/**
 * Smart Academy - Application Principale
 * 🚀 Orchestration des modules et initialisation
 */

const SmartAcademy = {
    // Version de l'application
    version: '2.0.0',
    
    // État de l'application
    initialized: false,
    modules: {},
    
    /**
     * Initialise l'application Smart Academy
     */
    async init() {
        console.log(`🚀 Smart Academy v${this.version} - Initialisation...`);
        
        try {
            // Vérifier que tous les modules sont chargés
            this.checkModules();
            
            // Initialiser les modules dans l'ordre correct
            await this.initializeModules();
            
            // Configurer l'application
            await this.setup();
            
            this.initialized = true;
            console.log('✅ Smart Academy initialisé avec succès !');
            
            // Afficher le message de bienvenue
            this.showWelcomeMessage();
            
        } catch (error) {
            console.error('❌ Erreur lors de l\'initialisation:', error);
            UI.showNotification('❌ Erreur d\'initialisation de l\'application', 'error');
        }
    },
    
    /**
     * Vérifie que tous les modules requis sont chargés
     */
    checkModules() {
        const requiredModules = ['Config', 'API', 'UI', 'Formations'];
        const optionalModules = ['Apprenants', 'BPF'];
        const missingModules = [];
        // Charger les modules optionnels s'ils sont disponibles
        optionalModules.forEach(moduleName => {
            if (window[moduleName]) {
                this.modules[moduleName] = window[moduleName];
                console.log(`📦 Module optionnel ${moduleName} chargé`);
            } else {
                console.warn(`⚠️ Module optionnel ${moduleName} non disponible`);
            }
        });
        
        
        requiredModules.forEach(moduleName => {
            if (!window[moduleName]) {
                missingModules.push(moduleName);
            } else {
                this.modules[moduleName] = window[moduleName];
            }
        });
        // Charger les modules optionnels s'ils sont disponibles
        optionalModules.forEach(moduleName => {
            if (window[moduleName]) {
                this.modules[moduleName] = window[moduleName];
            }
        });
        
        if (missingModules.length > 0) {
            throw new Error(`Modules manquants: ${missingModules.join(', ')}`);
        }
        
        console.log('📋 Tous les modules sont chargés:', Object.keys(this.modules));
    },
    
    /**
     * Initialise les modules dans l'ordre
     */
    async initializeModules() {
        console.log('🔧 Initialisation des modules...');
        
        // 1. Configuration (synchrone)
        Config.init();
        
        // 2. Interface utilisateur (synchrone)
        UI.init();
        
        // 3. API et test de connexion (asynchrone)
        await API.testConnection();
        
        // 4. Formations (asynchrone)
        await Formations.init();

        // 5. BPF - attendre que les formations soient chargées
        if (typeof BPF !== 'undefined' && BPF.init) {
            BPF.init();
            BPF.refreshStats();
        } else {
            console.warn('⚠️ Module BPF non disponible');
            // Essayer de l'initialiser plus tard
            setTimeout(() => {
                if (window.BPF) {
                    BPF.init();
                    BPF.refreshStats();
                }
            }, 500);
        }
        
        // 5. Apprenants (synchrone - si disponible)
        if (Apprenants && Apprenants.init) {
            Apprenants.init();
        } else {
            console.warn('⚠️ Module Apprenants non disponible');
        }
        console.log('✅ Modules initialisés');
    },
    
    /**
     * Configuration finale de l'application
     */
    async setup() {
        console.log('⚙️ Configuration de l\'application...');
        
        // Configurer les gestionnaires d'événements globaux
        this.setupGlobalHandlers();
        
        // Charger les données initiales si connecté
        if (API.connected) {
            await this.loadInitialData();
        }
        
        // Configurer l'interface
        this.setupUI();
        
        console.log('✅ Application configurée');
    },
    
    /**
     * Configure les gestionnaires d'événements globaux
     */
    setupGlobalHandlers() {
        // Gestionnaire pour les erreurs JavaScript globales
        window.addEventListener('error', (e) => {
            console.error('Erreur JavaScript:', e.error);
            UI.showNotification('Une erreur inattendue s\'est produite', 'error');
        });
        
        // Gestionnaire pour les promesses rejetées
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Promesse rejetée:', e.reason);
            UI.showNotification('Erreur de traitement asynchrone', 'error');
        });
        
        // Gestionnaire pour la perte de connexion
        window.addEventListener('online', () => {
            UI.showNotification('🌐 Connexion rétablie', 'success');
        });
        
        window.addEventListener('offline', () => {
            UI.showNotification('⚠️ Connexion perdue', 'warning');
        });
        
        console.log('🔗 Gestionnaires globaux configurés');
    },
    
    /**
     * Charge les données initiales
     */
    async loadInitialData() {
        try {
            console.log('📊 Chargement des données initiales...');
            
            // Les formations sont déjà chargées par le module Formations
            // Charger d'autres données si nécessaire
            
            console.log('✅ Données initiales chargées');
        } catch (error) {
            console.warn('⚠️ Erreur chargement données initiales:', error);
        }
    },
    
    /**
     * Configure l'interface utilisateur
     */
    setupUI() {
        // S'assurer que l'onglet catalogue est actif par défaut
        UI.showTab('catalogue');
        
        // Configurer les raccourcis clavier
        this.setupKeyboardShortcuts();
        
        console.log('🎨 Interface configurée');
    },
    
    /**
     * Configure les raccourcis clavier
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K : Recherche rapide (future fonctionnalité)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                // TODO: Implémenter la recherche rapide
                console.log('🔍 Recherche rapide (à implémenter)');
            }
            
            // Ctrl/Cmd + N : Nouvelle formation
            if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
                e.preventDefault();
                UI.showTab('creation');
            }
            
            // Ctrl/Cmd + R : Actualiser
            if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
                e.preventDefault();
                Formations.refresh();
            }
        });
    },
    
    /**
     * Affiche le message de bienvenue
     */
    showWelcomeMessage() {
        try {
            const hasVisited = localStorage.getItem('smart_academy_visited');
        
            if (!hasVisited) {
                setTimeout(() => {
                    UI.showNotification(`🎓 Bienvenue dans Smart Academy v${this.version} !`, 'success');
                    localStorage.setItem('smart_academy_visited', 'true');
                }, 1000);
            }
        } catch (error) {
            console.warn('localStorage non disponible, ignoré');
            // Afficher le message quand même
            setTimeout(() => {
                UI.showNotification(`🎓 Bienvenue dans Smart Academy v${this.version} !`, 'success');
            }, 1000);
        }
    },
    /**
     * Obtient les informations système
     */
    getSystemInfo() {
        return {
            version: this.version,
            initialized: this.initialized,
            modules: Object.keys(this.modules),
            apiConnected: API.connected,
            formations: Formations.list.length,
            timestamp: new Date().toISOString()
        };
    },
    
    /**
     * Mode debug - affiche les informations système
     */
    debug() {
        const info = this.getSystemInfo();
        console.table(info);
        
        UI.showModal('Informations système', `
            <div>
                <h4>🔧 Debug Smart Academy</h4>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; font-family: monospace; font-size: 0.9em;">
                    <pre>${JSON.stringify(info, null, 2)}</pre>
                </div>
                <div style="margin-top: 15px;">
                    <button class="btn btn-outline" onclick="SmartAcademy.exportLogs()">
                        📄 Exporter logs
                    </button>
                    <button class="btn btn-warning" onclick="SmartAcademy.resetApp()" style="margin-left: 10px;">
                        🔄 Reset application
                    </button>
                </div>
            </div>
        `);
    },
    
    /**
     * Exporte les logs pour le debug
     */
    exportLogs() {
        const logs = {
            systemInfo: this.getSystemInfo(),
            formations: Formations.list,
            config: {
                apiUrl: Config.current.apiUrl,
                formationUrl: Config.current.formationUrl
            },
            timestamp: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(logs, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `smart_academy_logs_${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        UI.showNotification('📄 Logs exportés', 'success');
    },
    
    /**
     * Remet à zéro l'application
     */
    resetApp() {
        if (UI.confirm('⚠️ Êtes-vous sûr de vouloir remettre à zéro l\'application ? Toutes les données locales seront perdues.')) {
            // Reset de la configuration
            Config.reset();
            
            // Clear des données locales
            localStorage.clear();
            
            // Rechargement de la page
            window.location.reload();
        }
    },
    
    /**
     * Vérifie s'il y a des mises à jour
     */
    async checkForUpdates() {
        try {
            // Dans une vraie application, ceci ferait appel à un service de mise à jour
            console.log('🔍 Vérification des mises à jour...');
            
            // Simuler la vérification
            setTimeout(() => {
                UI.showNotification('✅ Vous utilisez la dernière version', 'success');
            }, 1000);
            
        } catch (error) {
            console.error('Erreur vérification mises à jour:', error);
            UI.showNotification('❌ Impossible de vérifier les mises à jour', 'error');
        }
    },
    
    /**
     * Gestion des erreurs de l'application
     */
    handleError(error, context = '') {
        console.error(`Erreur${context ? ' (' + context + ')' : ''}:`, error);
        
        let message = 'Une erreur s\'est produite';
        
        if (error.message) {
            message += ': ' + error.message;
        }
        
        if (context) {
            message += ` (${context})`;
        }
        
        UI.showNotification(message, 'error');
    },
    
    /**
     * Utilitaires pour les autres modules
     */
    utils: {
        /**
         * Formate une date pour l'affichage
         */
        formatDate(date) {
            if (!date) return '';
            
            const d = new Date(date);
            return d.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        },
        
        /**
         * Génère un ID unique
         */
        generateId(prefix = 'ID') {
            const timestamp = Date.now().toString(36);
            const random = Math.random().toString(36).substr(2, 5);
            return `${prefix}_${timestamp}_${random}`.toUpperCase();
        },
        
        /**
         * Valide un objet selon un schéma
         */
        validate(obj, schema) {
            const errors = [];
            
            Object.keys(schema).forEach(key => {
                const rule = schema[key];
                const value = obj[key];
                
                if (rule.required && (!value || value.toString().trim() === '')) {
                    errors.push(`${key} est obligatoire`);
                }
                
                if (value && rule.type && typeof value !== rule.type) {
                    errors.push(`${key} doit être de type ${rule.type}`);
                }
                
                if (value && rule.minLength && value.toString().length < rule.minLength) {
                    errors.push(`${key} doit contenir au moins ${rule.minLength} caractères`);
                }
                
                if (value && rule.maxLength && value.toString().length > rule.maxLength) {
                    errors.push(`${key} ne peut pas dépasser ${rule.maxLength} caractères`);
                }
                
                if (value && rule.pattern && !rule.pattern.test(value)) {
                    errors.push(`${key} n'a pas le bon format`);
                }
            });
            
            return {
                isValid: errors.length === 0,
                errors: errors
            };
        },
        
        /**
         * Debounce une fonction
         */
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },
        
        /**
         * Formate un nombre avec séparateurs
         */
        formatNumber(num) {
            return new Intl.NumberFormat('fr-FR').format(num);
        },
        
        /**
         * Calcule la différence entre deux dates
         */
        dateDiff(date1, date2, unit = 'days') {
            const d1 = new Date(date1);
            const d2 = new Date(date2);
            const diffTime = Math.abs(d2 - d1);
            
            switch (unit) {
                case 'days':
                    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                case 'hours':
                    return Math.ceil(diffTime / (1000 * 60 * 60));
                case 'minutes':
                    return Math.ceil(diffTime / (1000 * 60));
                default:
                    return diffTime;
            }
        },
        
        /**
         * Convertit une URL Canva en format embed
         */
        convertCanvaUrl(url) {
            if (!url) return '';
            
            // Convertir les URLs Canva en format embed
            if (url.includes('canva.com/design/')) {
                const designId = url.split('/design/')[1].split('/')[0];
                return `https://www.canva.com/design/${designId}/view?embed`;
            }
            
            return url;
        },
        
        /**
         * Valide une URL
         */
        isValidUrl(string) {
            try {
                new URL(string);
                return true;
            } catch (_) {
                return false;
            }
        }
    },
    
    /**
     * Actions rapides accessibles depuis la console
     */
    quickActions: {
        /**
         * Créer une formation de test
         */
        createTestFormation() {
            const testData = {
                titre: 'Formation Test ' + new Date().toLocaleTimeString(),
                domaine: 'Test',
                objectifs: 'Formation créée automatiquement pour les tests',
                dureeHeures: 3,
                tarifHT: 299
            };
            
            // Remplir le formulaire et soumettre
            document.getElementById('formation-nom').value = testData.titre;
            document.getElementById('formation-domaine').value = testData.domaine;
            document.getElementById('formation-objectifs').value = testData.objectifs;
            document.getElementById('formation-duree').value = testData.dureeHeures;
            document.getElementById('formation-prix').value = testData.tarifHT;
            
            // Simuler la soumission
            Formations.create();
            
            console.log('🧪 Formation de test créée:', testData);
        },
        
        /**
         * Nettoyer les données de test
         */
        cleanTestData() {
            if (UI.confirm('Supprimer toutes les formations de test ?')) {
                // Dans une vraie application, ceci supprimerait les formations de test
                console.log('🧹 Nettoyage des données de test...');
                UI.showNotification('🧹 Données de test nettoyées', 'info');
            }
        },
        
        /**
         * Simuler une connexion API
         */
        simulateApiConnection() {
            API.connected = true;
            API.updateConnectionStatus('connected', 'Mode simulation');
            UI.showNotification('🔧 Mode simulation API activé', 'info');
        }
    }
};

// Fonctions globales pour la compatibilité et le debug
window.SmartAcademy = SmartAcademy;

// Raccourci pour le debug (accessible depuis la console)
window.debug = () => SmartAcademy.debug();

// Raccourci pour les infos système
window.info = () => console.table(SmartAcademy.getSystemInfo());

// Actions rapides pour le développement
window.quickTest = () => SmartAcademy.quickActions.createTestFormation();
window.cleanTest = () => SmartAcademy.quickActions.cleanTestData();
window.simAPI = () => SmartAcademy.quickActions.simulateApiConnection();

// Gestionnaire d'erreurs global pour l'application
window.onerror = function(message, source, lineno, colno, error) {
    SmartAcademy.handleError(error || new Error(message), `${source}:${lineno}`);
    return false; // Permet au navigateur de continuer le traitement normal
};

console.log('🎓 Smart Academy - Modules chargés, prêt pour l\'initialisation !');

// Export du module principal
window.SmartAcademy = SmartAcademy;
