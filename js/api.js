/**
 * Smart Academy - Module API
 * 🌐 Gestion de la communication avec Google Apps Script
 */

const API = {
    // État de la connexion
    connected: false,
    
    /**
     * Teste la connexion à l'API
     */
    async testConnection() {
        const statusElement = document.getElementById('connection-status');
        const iconElement = document.getElementById('status-icon');
        const textElement = document.getElementById('status-text');
        
        // Sauvegarder la configuration avant le test
        Config.save();
        
        // Validation de l'URL
        try {
            Config.validateApiUrl(Config.current.apiUrl);
        } catch (error) {
            this.updateConnectionStatus('error', error.message);
            return false;
        }
        
        // Mettre en état de chargement
        this.updateConnectionStatus('loading', 'Test de connexion...');
        
        try {
            console.log('🔍 Test de connexion vers:', Config.current.apiUrl);
            
            const response = await fetch(`${Config.current.apiUrl}?action=version&timestamp=${Date.now()}`);
            console.log('📡 Réponse brute:', response);
            
            if (!response.ok) {
                throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
            }
            
            const result = await response.json();
            console.log('📋 Réponse parsée:', result);
            
            if (result.success) {
                this.connected = true;
                this.updateConnectionStatus('connected', 'Connecté');
                
                // Masquer la configuration si connexion réussie
                document.getElementById('api-config').style.display = 'none';
                
                UI.showNotification('✅ Connexion établie avec succès !', 'success');
                return true;
            } else {
                throw new Error(result.message || 'Réponse invalide du serveur');
            }
            
        } catch (error) {
            console.error('❌ Erreur de connexion:', error);
            this.connected = false;
            
            // Message d'erreur détaillé
            let errorMessage = error.message;
            if (error.message.includes('Failed to fetch')) {
                errorMessage = 'Impossible de joindre le serveur. Vérifiez l\'URL de votre Google Apps Script.';
            } else if (error.message.includes('Unexpected token')) {
                errorMessage = 'Réponse invalide du serveur. Vérifiez que votre script est bien déployé.';
            }
            
            this.updateConnectionStatus('error', 'Erreur');
            UI.showNotification('❌ Erreur de connexion : ' + errorMessage, 'error');
            
            // Afficher la configuration pour correction
            document.getElementById('api-config').style.display = 'block';
            return false;
        }
    },
    
    /**
     * Met à jour le statut de connexion dans l'interface
     */
    updateConnectionStatus(status, message) {
        const statusElement = document.getElementById('connection-status');
        const iconElement = document.getElementById('status-icon');
        const textElement = document.getElementById('status-text');
        
        const statusConfig = {
            'loading': { class: 'status-loading', icon: '⏳' },
            'connected': { class: 'status-connected', icon: '✅' },
            'error': { class: 'status-error', icon: '❌' }
        };
        
        const config = statusConfig[status] || statusConfig.error;
        
        statusElement.className = `connection-status ${config.class}`;
        iconElement.textContent = config.icon;
        textElement.textContent = message;
    },
    
    /**
     * Effectue un appel API générique
     */
    async call(action, data = {}) {
        if (!this.connected && action !== 'test') {
            console.warn('⚠️ API non connectée, tentative d\'appel pour:', action);
        }
        
        try {
            const requestData = {
                action: action,
                ...data
            };
            
            console.log('📤 Appel API:', action, requestData);
            
            const response = await fetch(Config.current.apiUrl, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded' 
                },
                body: 'data=' + encodeURIComponent(JSON.stringify(requestData))
            });
            
            if (!response.ok) {
                throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
            }
            
            const result = await response.json();
            console.log('📥 Réponse API:', action, result);
            
            return result;
            
        } catch (error) {
            console.error('❌ Erreur appel API:', action, error);
            throw error;
        }
    },
    
    /**
     * Obtient la liste des formations
     */
    async getFormations() {
        try {
            const response = await fetch(`${Config.current.apiUrl}?action=obtenirFormations&timestamp=${Date.now()}`);
            const result = await response.json();
            
            console.log('📚 Formations reçues:', result);
            
            if (result.success && result.donnees && Array.isArray(result.donnees)) {
                return this.parseFormationsData(result.donnees);
            } else if (Array.isArray(result)) {
                // Format de compatibilité
                return this.parseFormationsData(result);
            } else {
                console.warn('Format de données inattendu:', result);
                return [];
            }
            
        } catch (error) {
            console.error('❌ Erreur chargement formations:', error);
            throw error;
        }
    },
    
    /**
     * Parse les données des formations reçues de l'API
     */
    parseFormationsData(data) {
        if (!Array.isArray(data) || data.length === 0) {
            return [];
        }
        
        // Ignorer la première ligne (headers)
        return data.slice(1).map((row, index) => {
            // Ignorer les lignes vides
            if (!row[0] && !row[1]) {
                return null;
            }
            
            const hasValidName = row[1] && row[1].toString().trim().length > 0;
            if (!hasValidName) {
                return null;
            }
            
            return {
                id: row[0] || `TEMP_${index}`,
                titre: row[1] || 'Formation sans titre',
                objectifs: row[2] || '',
                domaine: row[3] || 'Non spécifié',
                modules: this.parseModules(row[4] || 'Module1,Module2,Module3'),
                dureeHeures: row[5] || 7,
                canvaUrls: row[6] || '',
                quizUrls: row[7] || '',
                actif: (row[8] === true || row[8] === 'true' || row[8] === 'TRUE'),
                statut: (row[8] === true || row[8] === 'true' || row[8] === 'TRUE') ? 'Active' : 'Brouillon',
                prerequis: row[9] || 'Aucun',
                modalites: row[10] || 'E-learning asynchrone',
                methodesPedagogiques: row[11] || 'Modules interactifs',
                modalitesEvaluation: row[12] || 'QCM automatisés',
                tarifHT: row[13] || 500,
                scoreMinimum: row[14] || 80,
                ressources: 'Plateforme Smart Academy',
                dateCreation: new Date().toISOString().split('T')[0],
                certification: 'Attestation de formation',
                version: '1.0'
            };
        }).filter(formation => formation !== null);
    },
    
    /**
     * Parse une chaîne de modules
     */
    parseModules(modulesString) {
        if (!modulesString || typeof modulesString !== 'string') {
            return Config.DEFAULT_MODULES;
        }
        
        return modulesString.split(',').map((module, index) => ({
            titre: module.trim() || `Module ${index + 1}`,
            description: `Description du module ${module.trim() || (index + 1)}`,
            canvaUrl: ''
        }));
    },
    
    /**
     * Crée une nouvelle formation
     */
    async createFormation(formationData) {
        return await this.call('creerFormation', formationData);
    },
    
    /**
     * Met à jour une formation complète
     */
    async updateFormationComplete(formationId, formationData) {
        return await this.call('modifierFormationComplete', {
            formationId: formationId,
            ...formationData
        });
    },
    
    /**
     * Met à jour le statut d'une formation
     */
    async updateFormationStatus(formationId, newStatus) {
        return await this.call('mettreAJourStatutFormation', {
            formationId: formationId,
            nouveauStatut: newStatus === 'Active' ? 'TRUE' : 'FALSE'
        });
    },
    
    /**
     * Crée un nouvel apprenant
     */
    async createApprenant(apprenantData) {
        return await this.call('creerApprenant', apprenantData);
    },
    
    /**
     * Obtient les statistiques
     */
    async getStats() {
        try {
            return await this.call('obtenirStatistiques');
        } catch (error) {
            console.warn('⚠️ Impossible d\'obtenir les statistiques:', error);
            return { apprenants: 0, sessions: 0, completions: 0 };
        }
    },
    
    /**
     * Génère des données de test en cas d'erreur
     */
    getTestData() {
        return [
            {
                id: 'TEST_001',
                titre: 'Formation Test',
                domaine: 'Test',
                objectifs: 'Formation de test pour debug',
                prerequis: 'Aucun',
                dureeHeures: 7,
                modalites: 'E-learning asynchrone',
                methodesPedagogiques: 'Modules interactifs',
                modalitesEvaluation: 'QCM',
                scoreMinimum: 80,
                ressources: 'Plateforme Smart Academy',
                dateCreation: '2025-06-16',
                statut: 'Brouillon',
                tarifHT: 500,
                certification: 'Attestation',
                version: '1.0',
                modules: Config.DEFAULT_MODULES
            }
        ];
    }
};

// Fonction globale pour le test de connexion (appelée depuis l'HTML)
window.testApiConnection = () => API.testConnection();

// Export du module
window.API = API;
