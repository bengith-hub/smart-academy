/**
 * Smart Academy - Module Interface Utilisateur
 * 🎨 Gestion des modals, notifications et interface
 */

const UI = {
    // État des modals
    currentModal: null,
    
    /**
     * Affiche une notification
     */
    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        if (!notification) {
            console.warn('Element notification introuvable');
            return;
        }
        
        const colors = {
            'success': { bg: '#d4edda', text: '#155724', border: '#28a745' },
            'error': { bg: '#f8d7da', text: '#721c24', border: '#dc3545' },
            'warning': { bg: '#fff3cd', text: '#856404', border: '#ffc107' },
            'info': { bg: '#d1ecf1', text: '#0c5460', border: '#17a2b8' }
        };
        
        const color = colors[type] || colors.info;
        const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
        
        notification.innerHTML = `
            <div style="background: ${color.bg}; color: ${color.text}; padding: 15px; border-radius: 5px; border-left: 4px solid ${color.border};">
                ${icon} ${message}
            </div>
        `;
        notification.style.display = 'block';
        
        // Auto-masquer après délai
        setTimeout(() => {
            notification.style.display = 'none';
        }, Config.NOTIFICATION_DURATION);
    },
    
    /**
     * Affiche un modal
     */
    showModal(title, content) {
        const modal = document.getElementById('action-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        
        if (modalTitle) modalTitle.textContent = title;
        if (modalBody) modalBody.innerHTML = content;
        
        modal.classList.add('active');
        this.currentModal = modal;
        
        // Empêcher le scroll du body
        document.body.style.overflow = 'hidden';
    },
    
    /**
     * Ferme le modal actuel
     */
    closeModal() {
        if (this.currentModal) {
            this.currentModal.classList.remove('active');
            this.currentModal = null;
        }
        
        // Rétablir le scroll du body
        document.body.style.overflow = 'auto';
        
        // Reset de l'état d'édition
        if (window.Formations && window.Formations.editingFormation) {
            window.Formations.editingFormation = null;
        }
    },
    
    /**
     * Gestion des onglets
     */
    showTab(tabName) {
        // Désactiver tous les onglets
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Activer l'onglet sélectionné
        const activeTab = Array.from(document.querySelectorAll('.tab')).find(tab => 
            tab.onclick && tab.onclick.toString().includes(tabName)
        );
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        const activeContent = document.getElementById(tabName + '-content');
        if (activeContent) {
            activeContent.classList.add('active');
        }
        
        console.log(`📋 Onglet activé: ${tabName}`);
    },
    
    /**
     * Affiche/masque l'indicateur de chargement
     */
    showLoading(show = true, message = 'Chargement...') {
        const loadingElement = document.getElementById('formations-loading');
        if (!loadingElement) return;
        
        if (show) {
            loadingElement.style.display = 'block';
            const messageElement = loadingElement.querySelector('p');
            if (messageElement) {
                messageElement.textContent = message;
            }
        } else {
            loadingElement.style.display = 'none';
        }
    },
    
    /**
     * Met à jour les statistiques dans l'interface
     */
    updateStats(stats) {
        const elements = {
            'total-formations': stats.total || 0,
            'formations-publiees': stats.publiees || 0,
            'formations-brouillon': stats.brouillons || 0,
            'apprenants-actifs': stats.apprenants || 0
        };
        
        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = value;
            }
        });
    },
    
    /**
     * Copie du texte dans le presse-papiers
     */
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('📋 Lien copié dans le presse-papiers !', 'success');
        } catch (error) {
            console.error('Erreur copie presse-papiers:', error);
            this.showNotification('❌ Erreur lors de la copie', 'error');
        }
    },
    
    /**
     * Confirme une action avec l'utilisateur
     */
    confirm(message) {
        return window.confirm(message);
    },
    
    /**
     * Valide un formulaire
     */
    validateForm(formId, rules = {}) {
        const form = document.getElementById(formId);
        if (!form) {
            console.error('Formulaire introuvable:', formId);
            return false;
        }
        
        let isValid = true;
        const errors = [];
        
        // Validation des champs requis
        form.querySelectorAll('[required]').forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                errors.push(`Le champ "${field.labels?.[0]?.textContent || field.name}" est requis`);
                field.style.borderColor = '#dc3545';
            } else {
                field.style.borderColor = '#e9ecef';
            }
        });
        
        // Validation des emails
        form.querySelectorAll('input[type="email"]').forEach(field => {
            if (field.value && !this.isValidEmail(field.value)) {
                isValid = false;
                errors.push('Format d\'email invalide');
                field.style.borderColor = '#dc3545';
            }
        });
        
        // Afficher les erreurs
        if (!isValid) {
            this.showNotification('❌ ' + errors[0], 'error');
        }
        
        return isValid;
    },
    
    /**
     * Valide un format d'email
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
    
    /**
     * Génère une URL d'affichage sécurisée
     */
    createDisplayUrl(url, maxLength = 80) {
        if (!url) return '';
        
        if (url.length <= maxLength) {
            return url;
        }
        
        const start = url.substring(0, maxLength / 2);
        const end = url.substring(url.length - maxLength / 2);
        return `${start}...${end}`;
    },
    
    /**
     * Initialise l'interface utilisateur
     */
    init() {
        console.log('🎨 Initialisation de l\'interface...');
        
        // Ajouter les gestionnaires d'événements globaux
        this.setupGlobalEvents();
        
        console.log('✅ Interface initialisée');
    },
    
    /**
     * Configure les événements globaux
     */
    setupGlobalEvents() {
        // Gestionnaire pour la touche Escape (fermer modal)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentModal) {
                this.closeModal();
            }
        });
        
        // Empêcher la soumission des formulaires par défaut
        document.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        
        // Fermer modal en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal();
            }
        });
    },
    
    /**
     * Crée un élément HTML à partir d'une chaîne
     */
    createElement(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    },
    
    /**
     * Anime un élément (fade in)
     */
    fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.min(progress / duration, 1);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    },
    
    /**
     * Anime un élément (fade out)
     */
    fadeOut(element, duration = 300) {
        let start = null;
        const initialOpacity = parseFloat(getComputedStyle(element).opacity);
        
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.max(initialOpacity - (progress / duration), 0);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        }
        
        requestAnimationFrame(animate);
    },
    
    /**
     * Utilitaires pour les formulaires
     */
    formUtils: {
        /**
         * Récupère les données d'un formulaire
         */
        getFormData(formId) {
            const form = document.getElementById(formId);
            if (!form) return {};
            
            const formData = new FormData(form);
            const data = {};
            
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            return data;
        },
        
        /**
         * Remplit un formulaire avec des données
         */
        setFormData(formId, data) {
            const form = document.getElementById(formId);
            if (!form) return;
            
            Object.keys(data).forEach(key => {
                const field = form.querySelector(`[name="${key}"], #${key}`);
                if (field) {
                    field.value = data[key];
                }
            });
        },
        
        /**
         * Remet à zéro un formulaire
         */
        resetForm(formId) {
            const form = document.getElementById(formId);
            if (form) {
                form.reset();
                // Supprimer les styles d'erreur
                form.querySelectorAll('input, select, textarea').forEach(field => {
                    field.style.borderColor = '#e9ecef';
                });
            }
        }
    }
};

// Fonctions globales pour la compatibilité
window.showModal = (title, content) => UI.showModal(title, content);
window.closeModal = () => UI.closeModal();
window.copyToClipboard = (text) => UI.copyToClipboard(text);

// Export du module
window.UI = UI;
