/**
 * Smart Academy - Module BPF
 * 📊 Gestion du Bilan Pédagogique et Financier
 */

const BPF = {
    /**
     * Initialise le module BPF
     */
    init() {
        console.log('📊 Initialisation du module BPF...');
/**
 * Actualise les statistiques quand les formations sont chargées
 */
refreshStats() {
    // Attendre que les formations soient chargées
    if (Formations.list && Formations.list.length > 0) {
        this.updateStats();
    }
},

    /**
     * Met à jour les statistiques BPF
     */
    updateStats() {
        if (!Formations.list || Formations.list.length === 0) {
            return;
        }

        const formationsBPF = Formations.list.filter(f => f.bpf);
        const heuresBPF = formationsBPF.reduce((total, f) => total + (f.dureeHeures || 0), 0);
        const caBPF = formationsBPF.reduce((total, f) => total + (f.tarifHT || 0), 0);
        const domaines = [...new Set(formationsBPF.map(f => f.domaine))];

        // Mise à jour des éléments
        this.updateElement('formations-bpf', formationsBPF.length);
        this.updateElement('heures-bpf', heuresBPF);
        this.updateElement('ca-bpf', caBPF.toLocaleString());
        this.updateElement('domaines-bpf', domaines.length);
    },

    /**
     * Met à jour un élément du DOM
     */
    updateElement(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    },

    /**
     * Génère le rapport BPF complet
     */
    genererRapport() {
        const formationsBPF = Formations.list.filter(f => f.bpf);
        
        if (formationsBPF.length === 0) {
            UI.showNotification('⚠️ Aucune formation BPF trouvée', 'warning');
            return;
        }

        const anneeActuelle = new Date().getFullYear();
        const rapport = this.creerRapportHTML(formationsBPF, anneeActuelle);
        
        document.getElementById('rapport-bpf').innerHTML = rapport;
        UI.showNotification('📊 Rapport BPF généré !', 'success');
    },

    /**
     * Crée l'HTML du rapport BPF
     */
    creerRapportHTML(formationsBPF, annee) {
        const totalHeures = formationsBPF.reduce((sum, f) => sum + (f.dureeHeures || 0), 0);
        const totalCA = formationsBPF.reduce((sum, f) => sum + (f.tarifHT || 0), 0);
        const domainesStats = this.calculerStatsDomaines(formationsBPF);

        return `
            <div class="rapport-bpf">
                <div class="rapport-header">
                    <h3>📊 Bilan Pédagogique et Financier ${annee}</h3>
                    <p><strong>Smart Academy</strong> - Généré le ${new Date().toLocaleDateString('fr-FR')}</p>
                </div>

                <div class="rapport-resume">
                    <h4>🎯 Résumé exécutif</h4>
                    <div class="resume-grid">
                        <div class="resume-item">
                            <span class="resume-number">${formationsBPF.length}</span>
                            <span class="resume-label">Formations</span>
                        </div>
                        <div class="resume-item">
                            <span class="resume-number">${totalHeures}h</span>
                            <span class="resume-label">Volume horaire</span>
                        </div>
                        <div class="resume-item">
                            <span class="resume-number">${totalCA.toLocaleString()}€</span>
                            <span class="resume-label">Chiffre d'affaires</span>
                        </div>
                    </div>
                </div>

                <div class="rapport-domaines">
                    <h4>📚 Répartition par domaines</h4>
                    <div class="domaines-grid">
                        ${domainesStats.map(d => `
                            <div class="domaine-item">
                                <div class="domaine-nom">${d.domaine}</div>
                                <div class="domaine-stats">
                                    ${d.count} formation(s) • ${d.heures}h • ${d.ca.toLocaleString()}€
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="rapport-formations">
                    <h4>📋 Détail des formations</h4>
                    <div class="formations-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Formation</th>
                                    <th>Domaine</th>
                                    <th>Durée</th>
                                    <th>Prix HT</th>
                                    <th>Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${formationsBPF.map(f => `
                                    <tr>
                                        <td><strong>${f.titre}</strong></td>
                                        <td>${f.domaine}</td>
                                        <td>${f.dureeHeures}h</td>
                                        <td>${(f.tarifHT || 0).toLocaleString()}€</td>
                                        <td><span class="status-badge status-${f.statut === 'Active' ? 'active' : 'inactive'}">${f.statut === 'Active' ? 'Publiée' : 'Brouillon'}</span></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Calcule les statistiques par domaine
     */
    calculerStatsDomaines(formationsBPF) {
        const stats = {};
        
        formationsBPF.forEach(f => {
            const domaine = f.domaine || 'Non spécifié';
            if (!stats[domaine]) {
                stats[domaine] = { count: 0, heures: 0, ca: 0 };
            }
            stats[domaine].count++;
            stats[domaine].heures += f.dureeHeures || 0;
            stats[domaine].ca += f.tarifHT || 0;
        });

        return Object.entries(stats).map(([domaine, data]) => ({
            domaine,
            ...data
        })).sort((a, b) => b.count - a.count);
    },

    /**
     * Exporte les données BPF
     */
    exporterDonnees() {
        const formationsBPF = Formations.list.filter(f => f.bpf);
        
        if (formationsBPF.length === 0) {
            UI.showNotification('⚠️ Aucune formation BPF à exporter', 'warning');
            return;
        }

        // Créer le CSV
        const headers = ['Titre', 'Domaine', 'Durée (h)', 'Prix HT (€)', 'Statut', 'Objectifs'];
        const csvData = [
            headers.join(';'),
            ...formationsBPF.map(f => [
                f.titre,
                f.domaine,
                f.dureeHeures,
                f.tarifHT,
                f.statut === 'Active' ? 'Publiée' : 'Brouillon',
                f.objectifs
            ].join(';'))
        ].join('\n');

        // Télécharger le fichier
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `BPF_Smart_Academy_${new Date().getFullYear()}.csv`;
        link.click();

        UI.showNotification('📊 Export BPF téléchargé !', 'success');
    }
};

// Export du module
window.BPF = BPF;
