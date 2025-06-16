/**
 * Smart Academy - Module Apprenants
 * 👥 Gestion des apprenants et génération de liens uniques
 */

const Apprenants = {
    // État des apprenants
    list: [],
    
    /**
     * Initialise le module apprenants
     */
    init() {
        console.log('👥 Initialisation du module apprenants...');
        console.log('✅ Module apprenants initialisé');
    },
    
    /**
     * Gère les apprenants d'une formation
     */
    manage(formationId) {
        const formation = Formations.list.find(f => f.id === formationId);
        if (!formation) return;
        
        UI.showModal('Gestion des apprenants', `
            <div>
                <h4>👥 ${formation.titre}</h4>
                <div style="margin: 20px 0;">
                    <button class="btn btn-primary" onclick="Apprenants.addSingle('${formationId}')">
                        ➕ Ajouter un apprenant
                    </button>
                    <button class="btn btn-secondary" onclick="Apprenants.importBatch('${formationId}')" style="margin-left: 10px;">
                        📊 Import Excel
                    </button>
                </div>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h5>📈 Statistiques</h5>
                    <p>• Apprenants inscrits : 0</p>
                    <p>• Liens générés : 0</p>
                    <p>• En cours : 0</p>
                    <p>• Terminés : 0</p>
                </div>
            </div>
        `);
    },
    
    /**
     * Ajoute un apprenant individuel
     */
    addSingle(formationId) {
        UI.showModal('Ajouter un apprenant', `
            <div>
                <h4>👤 Nouvel apprenant</h4>
                <form id="apprenant-form">
                    <div class="form-group">
                        <label class="form-label">Nom *</label>
                        <input type="text" id="apprenant-nom" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Prénom *</label>
                        <input type="text" id="apprenant-prenom" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email *</label>
                        <input type="email" id="apprenant-email" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Téléphone</label>
                        <input type="tel" id="apprenant-telephone" class="form-input" placeholder="0123456789">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Entreprise</label>
                        <input type="text" id="apprenant-entreprise" class="form-input">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Niveau initial</label>
                        <select id="apprenant-niveau" class="form-input">
                            <option value="Débutant">Débutant</option>
                            <option value="Intermédiaire">Intermédiaire</option>
                            <option value="Avancé">Avancé</option>
                        </select>
                    </div>
                    <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                        <button type="button" class="btn btn-secondary" onclick="UI.closeModal()">Annuler</button>
                        <button type="button" class="btn btn-success" onclick="Apprenants.save('${formationId}')">
                            ✅ Ajouter et générer le lien
                        </button>
                    </div>
                </form>
            </div>
        `);
    },
    
    /**
     * Sauvegarde un nouvel apprenant
     */
    async save(formationId) {
        if (!UI.validateForm('apprenant-form')) {
            return;
        }
        
        const apprenantData = {
            nom: document.getElementById('apprenant-nom').value.trim(),
            prenom: document.getElementById('apprenant-prenom').value.trim(),
            email: document.getElementById('apprenant-email').value.trim(),
            telephone: document.getElementById('apprenant-telephone').value.trim() || '0123456789',
            entreprise: document.getElementById('apprenant-entreprise').value.trim(),
            niveauInitial: document.getElementById('apprenant-niveau').value,
            dateNaissance: '1990-01-01', // Valeur par défaut
            adresse: '123 Rue Example',   // Valeur par défaut
            codePostal: '75001',          // Valeur par défaut
            ville: 'Paris',               // Valeur par défaut
            handicap: 'Aucun'             // Valeur par défaut
        };
        
        try {
            const result = await API.createApprenant(apprenantData);
            
            if (result.success) {
                const apprenantId = result.id;
                
                // Générer le lien de formation personnalisé
                const lienFormation = `${Config.current.formationUrl}?formationId=${formationId}&apprenantId=${apprenantId}`;
                
                UI.closeModal();
                
                // Afficher le lien généré
                this.showGeneratedLink(apprenantData, apprenantId, lienFormation);
            } else {
                throw new Error(result.error || 'Erreur lors de la création de l\'apprenant');
            }
            
        } catch (error) {
            console.error('Erreur création apprenant:', error);
            UI.showNotification('❌ Erreur : ' + error.message, 'error');
        }
    },
    
    /**
     * Affiche le lien généré pour un apprenant
     */
    showGeneratedLink(apprenantData, apprenantId, lienFormation) {
        UI.showModal('Lien apprenant généré', `
            <div style="text-align: center;">
                <h4>✅ Apprenant ajouté avec succès !</h4>
                <div style="margin: 20px 0; padding: 15px; background: #e8f5e9; border-radius: 8px;">
                    <p><strong>👤 ${apprenantData.prenom} ${apprenantData.nom}</strong></p>
                    <p>📧 ${apprenantData.email}</p>
                    <p>🏢 ${apprenantData.entreprise || 'Non spécifiée'}</p>
                    <p><strong>🆔 ID Unique: ${apprenantId}</strong></p>
                    <p>📱 ${apprenantData.telephone}</p>
                    <p>📊 Niveau: ${apprenantData.niveauInitial}</p>
                </div>
                <div class="url-display">
                    ${lienFormation}
                </div>
                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">
                    <button class="btn btn-primary" onclick="Apprenants.sendEmail('${apprenantData.email}', '${lienFormation}', '${apprenantData.prenom}')">
                        📧 Envoyer par email
                    </button>
                    <button class="btn btn-outline" onclick="UI.copyToClipboard('${lienFormation}')">
                        📋 Copier le lien
                    </button>
                    <button class="btn btn-secondary" onclick="Apprenants.exportInfo('${apprenantId}', '${lienFormation}')">
                        📄 Exporter infos
                    </button>
                </div>
                <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; font-size: 0.9em;">
                    <p><strong>💡 Instructions pour l'apprenant :</strong></p>
                    <ul style="text-align: left; margin-top: 10px;">
                        <li>Ce lien est unique et personnel</li>
                        <li>Il permet de suivre la progression individuellement</li>
                        <li>Valable pendant toute la durée de la formation</li>
                        <li>Conforme aux exigences Qualiopi</li>
                    </ul>
                </div>
            </div>
        `);
    },
    
    /**
     * Simule l'envoi d'email à un apprenant
     */
    sendEmail(email, lien, prenom) {
        // Dans une vraie application, ceci ferait appel à un service d'email
        console.log('Envoi email à:', { email, lien, prenom });
        
        UI.showNotification(`📧 Email envoyé à ${prenom} (${email})`, 'success');
        UI.closeModal();
        
        // Optionnel: ouvrir le client email par défaut
        const subject = encodeURIComponent('Votre accès à la formation Smart Academy');
        const body = encodeURIComponent(`Bonjour ${prenom},\n\nVoici votre lien personnel pour accéder à votre formation :\n${lien}\n\nCordialement,\nL'équipe Smart Academy`);
        
        setTimeout(() => {
            if (UI.confirm('Ouvrir votre client email pour finaliser l\'envoi ?')) {
                window.open(`mailto:${email}?subject=${subject}&body=${body}`);
            }
        }, 1000);
    },
    
    /**
     * Exporte les informations d'un apprenant
     */
    exportInfo(apprenantId, lienFormation) {
        const exportData = {
            apprenantId: apprenantId,
            lienFormation: lienFormation,
            dateGeneration: new Date().toISOString(),
            plateforme: 'Smart Academy'
        };
        
        // Créer un fichier JSON à télécharger
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `apprenant_${apprenantId}_${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        UI.showNotification('📄 Informations exportées', 'success');
    },
    
    /**
     * Import en lot d'apprenants
     */
    importBatch(formationId) {
        UI.showModal('Import en lot d\'apprenants', `
            <div>
                <h4>📊 Import Excel/CSV</h4>
                
                <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                    <h5>📋 Format requis</h5>
                    <p>Votre fichier doit contenir les colonnes suivantes :</p>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li><strong>nom</strong> (obligatoire)</li>
                        <li><strong>prenom</strong> (obligatoire)</li>
                        <li><strong>email</strong> (obligatoire)</li>
                        <li>telephone (optionnel)</li>
                        <li>entreprise (optionnel)</li>
                        <li>niveau (optionnel: Débutant/Intermédiaire/Avancé)</li>
                    </ul>
                </div>
                
                <div class="form-group">
                    <label class="form-label">Sélectionner le fichier</label>
                    <input type="file" id="import-file" class="form-input" accept=".xlsx,.xls,.csv" onchange="Apprenants.previewImport(this)">
                </div>
                
                <div id="import-preview" style="display: none;">
                    <h5>👁️ Aperçu des données</h5>
                    <div id="preview-content"></div>
                    <div style="margin-top: 15px;">
                        <button class="btn btn-success" onclick="Apprenants.processImport('${formationId}')">
                            ✅ Importer tous les apprenants
                        </button>
                    </div>
                </div>
                
                <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                    <p>🚧 <strong>Fonctionnalité en développement</strong></p>
                    <p>L'import Excel sera bientôt disponible. Pour l'instant, utilisez l'ajout individuel.</p>
                </div>
            </div>
        `);
    },
    
    /**
     * Prévisualise le fichier d'import
     */
    previewImport(fileInput) {
        const file = fileInput.files[0];
        if (!file) return;
        
        const previewDiv = document.getElementById('import-preview');
        const contentDiv = document.getElementById('preview-content');
        
        // Simuler la prévisualisation
        contentDiv.innerHTML = `
            <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
                <p><strong>Fichier :</strong> ${file.name}</p>
                <p><strong>Taille :</strong> ${(file.size / 1024).toFixed(2)} KB</p>
                <p><strong>Type :</strong> ${file.type}</p>
                <p style="color: #856404; margin-top: 10px;">
                    ⚠️ Prévisualisation non implémentée - Utilisez l'ajout individuel
                </p>
            </div>
        `;
        
        previewDiv.style.display = 'block';
    },
    
    /**
     * Traite l'import en lot
     */
    processImport(formationId) {
        UI.showNotification('🚧 Import en lot en développement', 'warning');
        
        // Dans une vraie implémentation :
        // 1. Parser le fichier Excel/CSV
        // 2. Valider les données
        // 3. Créer les apprenants un par un
        // 4. Générer les liens
        // 5. Fournir un rapport d'import
    },
    
    /**
     * Obtient la liste des apprenants d'une formation
     */
    async getByFormation(formationId) {
        try {
            // Appel API pour récupérer les apprenants
            const result = await API.call('obtenirApprenants', { formationId });
            
            if (result.success) {
                return result.apprenants || [];
            } else {
                console.warn('Aucun apprenant trouvé pour la formation:', formationId);
                return [];
            }
            
        } catch (error) {
            console.error('Erreur récupération apprenants:', error);
            return [];
        }
    },
    
    /**
     * Génère un ID unique pour un apprenant
     */
    generateUniqueId() {
        const timestamp = Date.now().toString(36);
        const random = Math.random().toString(36).substr(2, 5);
        return `APP_${timestamp}_${random}`.toUpperCase();
    },
    
    /**
     * Valide les données d'un apprenant
     */
    validateApprenantData(data) {
        const errors = [];
        
        if (!data.nom || data.nom.trim().length === 0) {
            errors.push('Le nom est obligatoire');
        }
        
        if (!data.prenom || data.prenom.trim().length === 0) {
            errors.push('Le prénom est obligatoire');
        }
        
        if (!data.email || !UI.isValidEmail(data.email)) {
            errors.push('Un email valide est obligatoire');
        }
        
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    },
    
    /**
     * Formate un nom complet
     */
    formatFullName(prenom, nom) {
        return `${prenom.trim()} ${nom.trim()}`.trim();
    },
    
    /**
     * Génère un rapport d'activité
     */
    generateActivityReport(formationId) {
        // Placeholder pour le rapport d'activité
        console.log('Génération rapport activité pour formation:', formationId);
        
        UI.showModal('Rapport d\'activité', `
            <div>
                <h4>📊 Rapport d'activité</h4>
                <div style="background: #fff3cd; padding: 15px; border-radius: 8px;">
                    <p>🚧 <strong>Fonctionnalité en développement</strong></p>
                    <p>Le rapport d'activité incluera :</p>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>Progression par apprenant</li>
                        <li>Temps passé sur chaque module</li>
                        <li>Résultats des évaluations</li>
                        <li>Taux de complétion</li>
                        <li>Export conforme Qualiopi</li>
                    </ul>
                </div>
            </div>
        `);
    },
    
    /**
     * Crée un lien de formation pour un apprenant existant
     */
    createFormationLink(formationId, apprenantId) {
        return `${Config.current.formationUrl}?formationId=${formationId}&apprenantId=${apprenantId}`;
    },
    
    /**
     * Vérifie si un email existe déjà
     */
    async checkEmailExists(email, formationId) {
        try {
            const result = await API.call('verifierEmailApprenant', { 
                email: email, 
                formationId: formationId 
            });
            
            return result.exists || false;
        } catch (error) {
            console.warn('Impossible de vérifier l\'email:', error);
            return false;
        }
    },
    
    /**
     * Génère des statistiques pour une formation
     */
    async getFormationStats(formationId) {
        try {
            const apprenants = await this.getByFormation(formationId);
            
            return {
                total: apprenants.length,
                enCours: apprenants.filter(a => a.statut === 'en_cours').length,
                termines: apprenants.filter(a => a.statut === 'termine').length,
                abandons: apprenants.filter(a => a.statut === 'abandon').length
            };
        } catch (error) {
            console.error('Erreur calcul statistiques:', error);
            return { total: 0, enCours: 0, termines: 0, abandons: 0 };
        }
    }
};

// Export du module
window.Apprenants = Apprenants;
