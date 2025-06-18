/**
 * Smart Academy - Module de Configuration
 * 📋 Gestion des paramètres et configuration de l'application
 */

const Config = {
    // URLs par défaut
    DEFAULT_API_URL: 'https://script.google.com/macros/s/AKfycbw0xN6luTVczvtci5LDYeo7BThkiVGyem1YhHgtEucDtZz8CLURogqq8789TcM25p0/exec',
    DEFAULT_FORMATION_URL: 'https://bengith-hub.github.io/smart-academy/formation.html',
    
    // Clés de stockage local
    STORAGE_KEYS: {
        API_URL: 'smart_academy_api_url',
        FORMATION_URL: 'smart_academy_formation_url',
        USER_SETTINGS: 'smart_academy_settings'
    },
    
    // Configuration des domaines de formation
    DOMAINES: [
        'Hygiène alimentaire',
        'Sécurité au travail', 
        'Cybersécurité',
        'Management',
        'Vente et commerce',
        'Autre'
    ],
    
    // Types d'évaluation disponibles
    TYPES_EVALUATION: [
        'QCM automatisés',
        'Questionnaire interactif',
        'Étude de cas',
        'Mise en situation'
    ],
    
    // Configuration des modules par défaut
    DEFAULT_MODULES: [
        { titre: 'Introduction', description: 'Module d\'introduction', canvaUrl: '' },
        { titre: 'Contenu principal', description: 'Contenu de la formation', canvaUrl: '' },
        { titre: 'Évaluation', description: 'Quiz final', canvaUrl: '' }
    ],
    
    // Paramètres par défaut des formations
    DEFAULT_FORMATION: {
        dureeHeures: 7,
        tarifHT: 500,
        scoreMinimum: 80,
        modalites: 'E-learning asynchrone',
        methodesPedagogiques: 'Modules interactifs',
        modalitesEvaluation: 'QCM automatisés',
        ressources: 'Plateforme Smart Academy',
        certification: 'Attestation de formation',
        version: '1.0'
    },
    
    // Configuration des notifications
    NOTIFICATION_DURATION: 5000,
    
    // URLs actuelles (initialisées au chargement)
    current: {
        apiUrl: '',
        formationUrl: ''
    },
    
    /**
     * Initialise la configuration
     */
    init() {
        console.log('📋 Initialisation de la configuration...');
        this.loadFromStorage();
        this.updateUI();
    },
    
    /**
     * Charge la configuration depuis le localStorage
     */
    loadFromStorage() {
        // Récupérer les URLs sauvegardées ou utiliser les valeurs par défaut
        this.current.apiUrl = localStorage.getItem(this.STORAGE_KEYS.API_URL) || this.DEFAULT_API_URL;
        this.current.formationUrl = localStorage.getItem(this.STORAGE_KEYS.FORMATION_URL) || this.DEFAULT_FORMATION_URL;
        
        console.log('Configuration chargée:', {
            apiUrl: this.current.apiUrl,
            formationUrl: this.current.formationUrl
        });
    },
    
    /**
     * Met à jour l'interface avec la configuration actuelle
     */
    updateUI() {
        const apiUrlInput = document.getElementById('api-url');
        const formationUrlInput = document.getElementById('formation-base-url');
        
        if (apiUrlInput) {
            apiUrlInput.value = this.current.apiUrl;
        }
        
        if (formationUrlInput) {
            formationUrlInput.value = this.current.formationUrl;
        }
    },
    
    /**
     * Sauvegarde la configuration
     */
    save() {
        const apiUrlInput = document.getElementById('api-url');
        const formationUrlInput = document.getElementById('formation-base-url');
        
        if (apiUrlInput) {
            this.current.apiUrl = apiUrlInput.value;
            localStorage.setItem(this.STORAGE_KEYS.API_URL, this.current.apiUrl);
        }
        
        if (formationUrlInput) {
            this.current.formationUrl = formationUrlInput.value;
            localStorage.setItem(this.STORAGE_KEYS.FORMATION_URL, this.current.formationUrl);
        }
        
        console.log('Configuration sauvegardée:', this.current);
    },
    
    /**
     * Valide une URL d'API
     */
    validateApiUrl(url) {
        if (!url) {
            throw new Error('L\'URL de l\'API est requise');
        }
        
        if (!url.endsWith('/exec')) {
            throw new Error('L\'URL doit se terminer par "/exec". Vérifiez votre déploiement Google Apps Script.');
        }
        
        try {
            new URL(url);
        } catch (e) {
            throw new Error('Format d\'URL invalide');
        }
        
        return true;
    },
    
    /**
     * Obtient les paramètres utilisateur
     */
    getUserSettings() {
        const settings = localStorage.getItem(this.STORAGE_KEYS.USER_SETTINGS);
        return settings ? JSON.parse(settings) : {};
    },
    
    /**
     * Sauvegarde les paramètres utilisateur
     */
    saveUserSettings(settings) {
        localStorage.setItem(this.STORAGE_KEYS.USER_SETTINGS, JSON.stringify(settings));
    },
    
    /**
     * Génère les options pour un select de domaines
     */
    generateDomaineOptions(selectedValue = '') {
        return this.DOMAINES.map(domaine => 
            `<option value="${domaine}" ${domaine === selectedValue ? 'selected' : ''}>${domaine}</option>`
        ).join('');
    },
    
    /**
     * Génère les options pour un select de types d'évaluation
     */
    generateEvaluationOptions(selectedValue = '') {
        return this.TYPES_EVALUATION.map(type => 
            `<option value="${type}" ${type === selectedValue ? 'selected' : ''}>${type}</option>`
        ).join('');
    },
    
    /**
     * Obtient la configuration par défaut d'une formation
     */
    getDefaultFormation() {
        return {
            ...this.DEFAULT_FORMATION,
            modules: [...this.DEFAULT_MODULES],
            dateCreation: new Date().toISOString().split('T')[0]
        };
    },
    
    /**
     * Remet la configuration par défaut
     */
    reset() {
        localStorage.removeItem(this.STORAGE_KEYS.API_URL);
        localStorage.removeItem(this.STORAGE_KEYS.FORMATION_URL);
        localStorage.removeItem(this.STORAGE_KEYS.USER_SETTINGS);
        
        this.current.apiUrl = this.DEFAULT_API_URL;
        this.current.formationUrl = this.DEFAULT_FORMATION_URL;
        
        this.updateUI();
        console.log('Configuration remise à zéro');
    }
};

// Export pour utilisation dans d'autres modules
window.Config = Config;
