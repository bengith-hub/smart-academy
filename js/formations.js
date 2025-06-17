/**
 * Smart Academy - Module Formations
 * 📚 Gestion CRUD des formations et éditeur avancé
 */

const Formations = {
    // État des formations
    list: [],
    editingFormation: null,
    
    /**
     * Initialise le module formations
     */
    async init() {
        console.log('📚 Initialisation du module formations...');
        
        this.setupEventListeners();
        await this.load();
        
        console.log('✅ Module formations initialisé');
    },
    
    /**
     * Configure les gestionnaires d'événements
     */
    setupEventListeners() {
        const formationForm = document.getElementById('formation-form');
        if (formationForm) {
            formationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.create();
            });
        }
    },
    
    /**
     * Charge la liste des formations
     */
    async load() {
        UI.showLoading(true, 'Chargement des formations...');
        
        try {
            const result = await API.getFormations();
            this.list = result.donnees || [];
            console.log(`📚 ${this.list.length} formations chargées`);
            
            this.render();
            this.updateStats();
            
        } catch (error) {
            console.error('❌ Erreur chargement formations:', error);
            
            // Mode test en cas d'erreur
            this.list = API.getTestData();
            this.render();
            this.updateStats();
            
            UI.showNotification('⚠️ Erreur de chargement - Mode test activé', 'warning');
        } finally {
            UI.showLoading(false);
        }
    },
    
    /**
     * Rafraîchit la liste des formations
     */
    async refresh() {
        await this.load();
        UI.showNotification('🔄 Formations actualisées', 'info');
    },
    
    /**
     * Affiche les formations dans l'interface
     */
    render() {
        const grid = document.getElementById('formations-grid');
        if (!grid) return;
        
        if (this.list.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
                    <h3>📚 Aucune formation trouvée</h3>
                    <p>Commencez par créer votre première formation !</p>
                    <button class="btn btn-primary" onclick="UI.showTab('creation')" style="margin-top: 15px;">
                        ➕ Créer une formation
                    </button>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = this.list.map(formation => this.generateFormationCard(formation)).join('');
    },
    
    /**
     * Génère la carte HTML d'une formation
     */
    generateFormationCard(formation) {
        const modulesCount = formation.modules ? formation.modules.length : 0;
        
        return `
            <div class="formation-card" data-formation-id="${formation.id}">
                <div class="formation-status status-${formation.statut === 'Active' ? 'publie' : 'brouillon'}">
                    ${formation.statut === 'Active' ? '📢 Publiée' : '📝 Brouillon'}
                </div>
                
                <h3 class="formation-title">${formation.titre}</h3>
                
                <div class="formation-meta">
                    ${formation.domaine} • ${formation.dureeHeures}h • ${formation.tarifHT}€ HT • ${modulesCount} modules
                </div>
                
                <div class="formation-description">
                    ${formation.objectifs}
                </div>
                
                <div class="formation-actions">
                    <button class="btn btn-primary" onclick="Formations.editComplete('${formation.id}')">
                        ✏️ Modifier
                    </button>
                    ${formation.statut === 'Active' ? 
                        `<button class="btn btn-warning" onclick="Formations.unpublish('${formation.id}')">📝 Dépublier</button>` :
                        `<button class="btn btn-success" onclick="Formations.publish('${formation.id}')">📢 Publier</button>`
                    }
                    <button class="btn btn-outline" onclick="Formations.preview('${formation.id}')">
                        👁️ Tester
                    </button>
                    <button class="btn btn-secondary" onclick="Apprenants.manage('${formation.id}')">
                        👥 Apprenants
                    </button>
                </div>
            </div>
        `;
    },
    
    /**
     * Met à jour les statistiques
     */
    updateStats() {
        const stats = {
            total: this.list.length,
            publiees: this.list.filter(f => f.statut === 'Active').length,
            brouillons: this.list.filter(f => f.statut !== 'Active').length,
            apprenants: 0 // À implémenter
        };
        
        UI.updateStats(stats);
    },
    
    /**
     * Crée une nouvelle formation
     */
    async create() {
        if (!UI.validateForm('formation-form')) {
            return;
        }
        
        const formData = {
            titre: document.getElementById('formation-nom').value,
            domaine: document.getElementById('formation-domaine').value,
            objectifs: document.getElementById('formation-objectifs').value,
            prerequis: 'Aucun',
            dureeHeures: parseInt(document.getElementById('formation-duree').value),
            modalites: 'E-learning asynchrone',
            methodesPedagogiques: 'Modules interactifs',
            modalitesEvaluation: 'QCM automatisés',
            ressources: 'Plateforme Smart Academy',
            tarifHT: parseInt(document.getElementById('formation-prix').value) || 0,
            certification: 'Attestation de formation'
        };
        
        try {
            const result = await API.createFormation(formData);
            
            if (result.success) {
                UI.showNotification('✅ Formation créée avec succès !', 'success');
                
                // Réinitialiser le formulaire
                document.getElementById('formation-form').reset();
                
                // Recharger et basculer vers le catalogue
                await this.load();
                UI.showTab('catalogue');
            } else {
                throw new Error(result.error || 'Erreur lors de la création');
            }
            
        } catch (error) {
            UI.showNotification('❌ Erreur : ' + error.message, 'error');
        }
    },
    
    /**
     * Édition complète d'une formation
     */
    editComplete(formationId) {
        const formation = this.list.find(f => f.id === formationId);
        if (!formation) return;
        
        this.editingFormation = JSON.parse(JSON.stringify(formation)); // Clone profond
        
        UI.showModal('Édition complète de la formation', this.generateEditHTML(formation));
    },
    
    /**
     * Génère l'HTML d'édition complète
     */
    generateEditHTML(formation) {
        return `
            <div style="max-height: 70vh; overflow-y: auto;">
                <!-- Section informations générales -->
                <div class="edit-section">
                    <h4>📝 Informations générales</h4>
                    <div class="form-group">
                        <label class="form-label">Titre de la formation *</label>
                        <input type="text" id="edit-titre" class="form-input" value="${formation.titre}" required>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div class="form-group">
                            <label class="form-label">Domaine</label>
                            <select id="edit-domaine" class="form-input">
                                ${Config.generateDomaineOptions(formation.domaine)}
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Durée (heures)</label>
                            <input type="number" id="edit-duree" class="form-input" value="${formation.dureeHeures}" min="1" max="35">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Objectifs pédagogiques</label>
                        <textarea id="edit-objectifs" class="form-input" rows="3">${formation.objectifs}</textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Prérequis</label>
                        <input type="text" id="edit-prerequis" class="form-input" value="${formation.prerequis || 'Aucun'}">
                    </div>
                </div>

                <!-- Section évaluation -->
                <div class="edit-section">
                    <h4>🎯 Modalités d'évaluation</h4>
                    <div style="display: grid; grid-template-columns: 1fr 150px; gap: 15px;">
                        <div class="form-group">
                            <label class="form-label">Type d'évaluation</label>
                            <select id="edit-evaluation" class="form-input">
                                ${Config.generateEvaluationOptions(formation.modalitesEvaluation)}
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Score min. (%)</label>
                            <input type="number" id="edit-score" class="form-input" value="${formation.scoreMinimum || 80}" min="50" max="100">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Prix HT (€)</label>
                        <input type="number" id="edit-prix" class="form-input" value="${formation.tarifHT}" min="0">
                    </div>
                </div>

                <!-- Section modules -->
                <div class="edit-section">
                    <h4>📚 Gestion des modules</h4>
                    <div class="modules-container">
                        <div id="modules-list">
                            ${this.generateModulesHTML(formation.modules || [])}
                        </div>
                        <button type="button" class="add-module-btn" onclick="Formations.addModule()">
                            ➕ Ajouter un module
                        </button>
                    </div>
                </div>

                <!-- Actions -->
                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                    <button type="button" class="btn btn-outline" onclick="Formations.previewEdit()">
                        👁️ Prévisualiser
                    </button>
                    <button type="button" class="btn btn-secondary" onclick="UI.closeModal()">
                        Annuler
                    </button>
                    <button type="button" class="btn btn-success" onclick="Formations.saveComplete('${formation.id}')">
                        ✅ Sauvegarder tout
                    </button>
                </div>
            </div>
        `;
    },
    
    /**
     * Génère l'HTML des modules
     */
     generateModulesHTML(modules) {
         if (!modules || !Array.isArray(modules) || modules.length === 0) {
             modules = (window.Config && Config.DEFAULT_MODULES) ? Config.DEFAULT_MODULES : [
                 { titre: 'Introduction', description: 'Module d\'introduction', canvaUrl: '' },
                 { titre: 'Contenu principal', description: 'Contenu de la formation', canvaUrl: '' },
                 { titre: 'Évaluation', description: 'Quiz final', canvaUrl: '' }
             ];
         }

        return modules.map((module, index) => `
            <div class="module-item" data-module-index="${index}">
                <button type="button" class="module-delete" onclick="Formations.deleteModule(${index})" title="Supprimer ce module">
                    🗑️
                </button>
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <span class="module-number">Module ${index + 1}</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Titre du module *</label>
                    <input type="text" class="form-input module-titre" value="${module.titre}" 
                           onchange="Formations.updateModule(${index}, 'titre', this.value)" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Description</label>
                    <input type="text" class="form-input module-description" value="${module.description}" 
                           onchange="Formations.updateModule(${index}, 'description', this.value)">
                </div>
                <div class="form-group">
                    <label class="form-label">URL Canva (lien de partage)</label>
                    <input type="url" class="form-input module-canva" value="${module.canvaUrl}" 
                           onchange="Formations.updateModule(${index}, 'canvaUrl', this.value)"
                           placeholder="https://www.canva.com/design/...">
                    <small style="color: #666; margin-top: 5px; display: block;">
                        💡 Utilisez le lien de partage public de votre présentation Canva
                    </small>
                </div>
            </div>
        `).join('');
    },
    
    /**
     * Met à jour un module
     */
    updateModule(index, field, value) {
        if (!this.editingFormation) {
            console.error('editingFormation is null');
            return;
        }
    
        if (!this.editingFormation.modules) {
            this.editingFormation.modules = [];
        }
    
        // S'assurer que le module existe
       if (!this.editingFormation.modules[index]) {
           this.editingFormation.modules[index] = {
               titre: '',
               description: '',
               canvaUrl: ''
           };
        }
    
    this.editingFormation.modules[index][field] = value;
    console.log('Module mis à jour:', index, field, value);
},
    
    /**
     * Ajoute un module
     */
    addModule() {
        if (!this.editingFormation.modules) {
            this.editingFormation.modules = [];
        }
        
        const newModule = {
            titre: `Module ${this.editingFormation.modules.length + 1}`,
            description: 'Description du nouveau module',
            canvaUrl: ''
        };
        
        if (this.editingFormation.modules[index]) {
            this.editingFormation.modules[index][field] = value;
            console.log('Module mis à jour:', index, field, value);
        } else {
            console.error('Module non trouvé à l\'index:', index);
        }
        
        // Régénérer la liste des modules
        document.getElementById('modules-list').innerHTML = this.generateModulesHTML(this.editingFormation.modules);
        
        UI.showNotification('➕ Module ajouté !', 'success');
    },
    
    /**
     * Supprime un module
     */
    deleteModule(index) {
        if (!this.editingFormation.modules || this.editingFormation.modules.length <= 1) {
            UI.showNotification('❌ Il faut au moins un module', 'error');
            return;
        }
        
        if (UI.confirm('Supprimer ce module ?')) {
            this.editingFormation.modules.splice(index, 1);
            
            // Régénérer la liste des modules
            document.getElementById('modules-list').innerHTML = this.generateModulesHTML(this.editingFormation.modules);
            
            UI.showNotification('🗑️ Module supprimé', 'info');
        }
    },
    
    /**
     * Prévisualise les modifications
     */
    previewEdit() {
        const titre = document.getElementById('edit-titre').value;
        const domaine = document.getElementById('edit-domaine').value;
        const duree = document.getElementById('edit-duree').value;
        const objectifs = document.getElementById('edit-objectifs').value;
        const prerequis = document.getElementById('edit-prerequis').value;
        const evaluation = document.getElementById('edit-evaluation').value;
        const score = document.getElementById('edit-score').value;
        const prix = document.getElementById('edit-prix').value;
        
        const previewHTML = `
            <div style="background: #e8f5e9; border: 1px solid #c3e6cb; border-radius: 10px; padding: 20px; margin: 20px 0;">
                <h5 style="color: var(--success); margin-bottom: 15px;">👁️ Aperçu de la formation</h5>
                <div style="background: white; padding: 20px; border-radius: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 15px;">${titre}</h4>
                    <div style="margin-bottom: 10px;"><strong>Domaine :</strong> ${domaine}</div>
                    <div style="margin-bottom: 10px;"><strong>Durée :</strong> ${duree} heures</div>
                    <div style="margin-bottom: 10px;"><strong>Prix :</strong> ${prix}€ HT</div>
                    <div style="margin-bottom: 10px;"><strong>Prérequis :</strong> ${prerequis}</div>
                    <div style="margin-bottom: 15px;"><strong>Objectifs :</strong><br>${objectifs}</div>
                    <div style="margin-bottom: 10px;"><strong>Évaluation :</strong> ${evaluation} (${score}% minimum)</div>
                    <div style="margin-bottom: 15px;"><strong>Modules :</strong></div>
                    <ul style="margin-left: 20px;">
                        ${(this.editingFormation.modules || []).map((module, i) => 
                            `<li style="margin-bottom: 5px;"><strong>${module.titre}</strong> - ${module.description}</li>`
                        ).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        // Ajouter la prévisualisation au modal
        const modalBody = document.getElementById('modal-body');
        modalBody.insertAdjacentHTML('afterbegin', previewHTML);
        
        UI.showNotification('👁️ Prévisualisation générée !', 'info');
    },
    
    /**
     * Sauvegarde complète
     */
    async saveComplete(formationId) {
        console.log('🔍 DEBUG saveComplete - formationId reçu:', formationId);
        console.log('🔍 DEBUG editingFormation:', this.editingFormation);
        // Validation
        const titre = document.getElementById('edit-titre').value.trim();
        if (!titre) {
            UI.showNotification('❌ Le titre est obligatoire', 'error');
            return;
        }
        
        // Vérifier que tous les modules ont un titre
        const modulesTitres = document.querySelectorAll('.module-titre');
        for (let input of modulesTitres) {
            if (!input.value.trim()) {
                UI.showNotification('❌ Tous les modules doivent avoir un titre', 'error');
                input.focus();
                return;
            }
        }
        
        try {
            const updatedFormation = {
                titre: titre,
                domaine: document.getElementById('edit-domaine').value,
                objectifs: document.getElementById('edit-objectifs').value,
                prerequis: document.getElementById('edit-prerequis').value,
                dureeHeures: parseInt(document.getElementById('edit-duree').value),
                modalitesEvaluation: document.getElementById('edit-evaluation').value,
                scoreMinimum: parseInt(document.getElementById('edit-score').value),
                tarifHT: parseInt(document.getElementById('edit-prix').value),
                modules: this.editingFormation.modules || []
            };
            
            console.log('Données complètes à sauvegarder:', updatedFormation);
            console.log('🔍 DEBUG avant appel API - formationId:', formationId);
            console.log('🔍 DEBUG données à envoyer:', updatedFormation);
            const result = await API.updateFormationComplete(formationId, updatedFormation);
            
            if (result.success) {
                // Mettre à jour l'état local
                const formation = this.list.find(f => f.id === formationId);
                if (formation) {
                    Object.assign(formation, updatedFormation);
                    
                    this.render();
                    UI.closeModal();
                    UI.showNotification('✅ Formation sauvegardée avec succès !', 'success');
                    
                    // Actualiser depuis l'API
                    setTimeout(() => this.load(), 1000);
                }
            } else {
                throw new Error(result.error || 'Erreur lors de la sauvegarde');
            }
            
        } catch (error) {
            console.error('Erreur sauvegarde complète:', error);
            
            // Mise à jour locale en cas d'erreur API
            const formation = this.list.find(f => f.id === formationId);
            if (formation) {
                Object.assign(formation, {
                    titre: document.getElementById('edit-titre').value,
                    domaine: document.getElementById('edit-domaine').value,
                    objectifs: document.getElementById('edit-objectifs').value,
                    prerequis: document.getElementById('edit-prerequis').value,
                    dureeHeures: parseInt(document.getElementById('edit-duree').value),
                    modalitesEvaluation: document.getElementById('edit-evaluation').value,
                    scoreMinimum: parseInt(document.getElementById('edit-score').value),
                    tarifHT: parseInt(document.getElementById('edit-prix').value),
                    modules: this.editingFormation.modules
                });
                
                this.render();
                UI.closeModal();
                UI.showNotification('⚠️ Formation modifiée localement (erreur sauvegarde API)', 'warning');
            } else {
                UI.showNotification('❌ Erreur : ' + error.message, 'error');
            }
        }
    },
    
    /**
     * Publie une formation
     */
    async publish(formationId) {
        if (UI.confirm('Êtes-vous sûr de vouloir publier cette formation ?')) {
            await this.updateStatus(formationId, 'Active');
        }
    },
    
    /**
     * Dépublie une formation
     */
    async unpublish(formationId) {
        if (UI.confirm('Dépublier cette formation ? Les apprenants en cours ne pourront plus y accéder.')) {
            await this.updateStatus(formationId, 'Inactive');
        }
    },
    
    /**
     * Met à jour le statut d'une formation
     */
    async updateStatus(formationId, newStatus) {
        try {
            const result = await API.updateFormationStatus(formationId, newStatus);
            
            if (result.success) {
                // Mettre à jour l'état local
                const formation = this.list.find(f => f.id === formationId);
                if (formation) {
                    formation.statut = newStatus;
                    this.render();
                    this.updateStats();
                    UI.showNotification(`✅ Formation ${newStatus === 'Active' ? 'publiée' : 'dépubliée'} !`, 'success');
                }
            } else {
                throw new Error(result.error || 'Erreur lors de la mise à jour');
            }
            
        } catch (error) {
            console.error('Erreur mise à jour statut:', error);
            UI.showNotification('❌ Erreur : ' + error.message, 'error');
        }
    },
    
    /**
     * Prévisualise une formation
     */
    preview(formationId) {
        const formation = this.list.find(f => f.id === formationId);
        if (!formation) return;
        
        const previewUrl = `${Config.current.formationUrl}?formationId=${formationId}&preview=true`;
        
        UI.showModal('Tester la formation', `
            <div style="text-align: center;">
                <h4>🎓 ${formation.titre}</h4>
                <p>Testez votre formation avant de l'envoyer aux apprenants</p>
                <div class="url-display">
                    ${previewUrl}
                </div>
                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                    <button class="btn btn-primary" onclick="window.open('${previewUrl}', '_blank')">
                        🚀 Ouvrir le test
                    </button>
                    <button class="btn btn-outline" onclick="UI.copyToClipboard('${previewUrl}')">
                        📋 Copier le lien
                    </button>
                </div>
                <p style="margin-top: 15px; font-size: 0.9em; color: #666;">
                    💡 Ce lien fonctionne avec les paramètres GET de Google Sites
                </p>
            </div>
        `);
    }
};

// Export du module
window.Formations = Formations;
