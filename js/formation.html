<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formation - Smart Academy</title>
    
    <style>
        :root {
            --primary: #667eea;
            --secondary: #764ba2;
            --success: #28a745;
            --warning: #ffc107;
            --danger: #dc3545;
            --info: #17a2b8;
            --qualiopi: #0066cc;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
            line-height: 1.6;
        }

        /* Test Panel */
        .test-panel {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255,255,255,0.95);
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            z-index: 1000;
            max-width: 300px;
            border: 2px solid var(--warning);
        }

        .test-panel h4 {
            color: var(--warning);
            margin-bottom: 10px;
            font-size: 0.9em;
        }

        .test-controls {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .test-controls select,
        .test-controls button {
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 0.85em;
        }

        .test-controls button {
            background: var(--primary);
            color: white;
            border: none;
            cursor: pointer;
        }

        .test-controls button:hover {
            background: var(--secondary);
        }

        /* Header de formation */
        .formation-header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .formation-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255,255,255,0.1);
            opacity: 0.1;
        }

        .formation-title {
            font-size: 2.5em;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .formation-subtitle {
            font-size: 1.2em;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }

        .apprenant-info {
            position: absolute;
            top: 20px;
            left: 20px;
            background: rgba(255,255,255,0.2);
            padding: 10px 15px;
            border-radius: 20px;
            font-size: 0.9em;
            backdrop-filter: blur(10px);
        }

        /* Container principal */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Navigation des modules */
        .modules-nav {
            background: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            display: flex;
            gap: 15px;
            overflow-x: auto;
            align-items: center;
        }

        .module-nav-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            min-width: 150px;
            justify-content: center;
            border: 2px solid #e9ecef;
            background: #f8f9fa;
        }

        .module-nav-item.active {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }

        .module-nav-item.completed {
            background: var(--success);
            color: white;
            border-color: var(--success);
        }

        .module-nav-item:hover:not(.active) {
            background: rgba(102, 126, 234, 0.1);
            border-color: var(--primary);
        }

        .module-status {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8em;
            font-weight: bold;
        }

        /* Contenu de formation */
        .formation-content {
            background: white;
            border-radius: 15px;
            margin: 20px 0;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            overflow: hidden;
        }

        .module-content {
            display: none;
            min-height: 600px;
        }

        .module-content.active {
            display: block;
        }

        .module-header {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            padding: 25px;
            border-bottom: 1px solid #e9ecef;
        }

        .module-title {
            color: var(--primary);
            font-size: 1.8em;
            margin-bottom: 10px;
        }

        .module-description {
            color: #666;
            font-size: 1.1em;
        }

        .canva-container {
            position: relative;
            padding: 30px;
            text-align: center;
        }

        .canva-embed {
            width: 100%;
            height: 500px;
            border: none;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .module-progress {
            background: #f8f9fa;
            padding: 20px 30px;
            border-top: 1px solid #e9ecef;
        }

        .progress-bar {
            background: #e9ecef;
            border-radius: 10px;
            height: 12px;
            margin: 10px 0;
            overflow: hidden;
        }

        .progress-fill {
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            height: 100%;
            transition: width 0.5s ease;
            border-radius: 10px;
        }

        .progress-text {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.9em;
            color: #666;
        }

        /* Quiz section */
        .quiz-section {
            background: linear-gradient(135deg, #fff5f5, #ffe0e0);
            margin: 20px 0;
            border-radius: 15px;
            padding: 30px;
            border: 2px solid #ffc107;
        }

        .quiz-header {
            text-align: center;
            margin-bottom: 25px;
        }

        .quiz-title {
            color: var(--warning);
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        .question-container {
            background: white;
            border-radius: 10px;
            padding: 25px;
            margin: 20px 0;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }

        .question-title {
            font-size: 1.2em;
            color: #333;
            margin-bottom: 20px;
            font-weight: 600;
        }

        .question-options {
            display: grid;
            gap: 12px;
        }

        .option {
            display: flex;
            align-items: center;
            padding: 15px;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .option:hover {
            border-color: var(--primary);
            background: rgba(102, 126, 234, 0.05);
        }

        .option.selected {
            border-color: var(--primary);
            background: rgba(102, 126, 234, 0.1);
        }

        .option input[type="radio"] {
            margin-right: 12px;
            transform: scale(1.2);
        }

        /* Boutons de navigation */
        .navigation-buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25px 30px;
            background: #f8f9fa;
            border-top: 1px solid #e9ecef;
        }

        .btn {
            padding: 12px 25px;
            border: none;
            border-radius: 25px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 1em;
        }

        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
        }

        .btn-success {
            background: var(--success);
            color: white;
        }

        .btn-secondary {
            background: #6c757d;
            color: white;
        }

        .btn-warning {
            background: var(--warning);
            color: #333;
        }

        .btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        /* Tableau de bord de progression */
        .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }

        .dashboard-card {
            background: white;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            border-left: 4px solid var(--primary);
        }

        .dashboard-number {
            font-size: 2em;
            font-weight: bold;
            color: var(--primary);
        }

        .dashboard-label {
            color: #666;
            margin-top: 5px;
        }

        /* Messages de validation */
        .completion-message {
            background: linear-gradient(135deg, #d4edda, #c3e6cb);
            border: 2px solid var(--success);
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            margin: 20px 0;
        }

        .completion-icon {
            font-size: 4em;
            margin-bottom: 20px;
        }

        /* Loading et états */
        .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 400px;
            flex-direction: column;
            gap: 20px;
        }

        .spinner {
            border: 3px solid #f3f3f3;
            border-top: 3px solid var(--primary);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .error-message {
            background: #f8d7da;
            color: #721c24;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            border: 1px solid #f5c6cb;
            margin: 20px;
        }

        /* Timer */
        .timer {
            position: fixed;
            top: 80px;
            left: 20px;
            background: rgba(255,255,255,0.95);
            padding: 10px 15px;
            border-radius: 20px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            z-index: 1000;
            font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .formation-title {
                font-size: 2em;
            }
            
            .apprenant-info {
                position: relative;
                top: auto;
                left: auto;
                margin-top: 15px;
                display: inline-block;
            }

            .test-panel {
                position: relative;
                top: auto;
                right: auto;
                margin: 20px;
                max-width: none;
            }

            .timer {
                position: relative;
                top: auto;
                left: auto;
                margin: 10px 20px;
                display: inline-block;
            }
            
            .modules-nav {
                flex-direction: column;
                align-items: stretch;
            }
            
            .module-nav-item {
                min-width: auto;
            }
            
            .dashboard {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .navigation-buttons {
                flex-direction: column;
                gap: 15px;
            }
        }

        /* Animations */
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .warning-box {
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 10px;
            padding: 20px;
            margin: 20px;
            text-align: center;
        }

        .warning-box h3 {
            color: #856404;
            margin-bottom: 10px;
        }

        .url-example {
            background: #f8f9fa;
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
            font-size: 0.9em;
            margin: 10px 0;
            word-break: break-all;
        }
    </style>
</head>
<body>
    <!-- Panel de test en haut à droite -->
    <div class="test-panel" id="test-panel">
        <h4>🧪 Mode Test</h4>
        <div class="test-controls">
            <select id="formation-select">
                <option value="">Choisir une formation</option>
                <option value="BONNES PRATIQUES EN CYBERSÉCURITÉ">BONNES PRATIQUES EN CYBERSÉCURITÉ</option>
                <option value="Hygiène alimentaire">Hygiène alimentaire</option>
                <option value="HACCP">HACCP</option>
                <option value="Allergènes alimentaires">Allergènes alimentaires</option>
            </select>
            
            <select id="apprenant-select">
                <option value="">Mode anonyme</option>
                <option value="APP_001">Jean Dupont</option>
                <option value="APP_002">Marie Martin</option>
                <option value="APP_003">Pierre Durand</option>
                <option value="PREVIEW">Mode Prévisualisation</option>
            </select>
            
            <button onclick="startTestFormation()">▶️ Lancer le test</button>
            <button onclick="resetToHome()" style="background: #6c757d;">🏠 Accueil</button>
            <button onclick="toggleTestPanel()">❌ Masquer</button>
        </div>
    </div>

    <!-- Timer de session -->
    <div class="timer" id="session-timer">
        ⏱️ <span id="timer-display">00:00</span>
    </div>

    <!-- Header de la formation -->
    <div class="formation-header">
        <div class="apprenant-info" id="apprenant-info">
            🆔 Chargement...
        </div>
        <h1 class="formation-title" id="formation-title">Chargement de la formation...</h1>
        <p class="formation-subtitle" id="formation-subtitle">Veuillez patienter</p>
    </div>

    <div class="container">
        <!-- Message d'avertissement pour les paramètres manquants -->
        <div class="warning-box" id="params-warning" style="display: none;">
            <h3>⚠️ Paramètres manquants dans l'URL</h3>
            <p>Cette page nécessite des paramètres pour fonctionner correctement.</p>
            <p><strong>Format attendu :</strong></p>
            <div class="url-example">
                votre-url?formationId=FORM_001&apprenantId=APP_001
            </div>
            <p>Ou utilisez le panel de test ci-dessus pour tester différentes configurations.</p>
        </div>

        <!-- Tableau de bord de progression -->
        <div class="dashboard" id="dashboard" style="display: none;">
            <div class="dashboard-card">
                <div class="dashboard-number" id="progress-percent">0%</div>
                <div class="dashboard-label">Progression</div>
            </div>
            <div class="dashboard-card">
                <div class="dashboard-number" id="modules-completed">0/0</div>
                <div class="dashboard-label">Modules terminés</div>
            </div>
            <div class="dashboard-card">
                <div class="dashboard-number" id="quiz-score">-</div>
                <div class="dashboard-label">Score quiz</div>
            </div>
            <div class="dashboard-card">
                <div class="dashboard-number" id="time-spent">0min</div>
                <div class="dashboard-label">Temps passé</div>
            </div>
        </div>

        <!-- Navigation des modules -->
        <div class="modules-nav" id="modules-nav" style="display: none;">
            <!-- Modules générés dynamiquement -->
        </div>

        <!-- Contenu de formation -->
        <div class="formation-content" id="formation-content" style="display: none;">
            <!-- Modules de contenu générés dynamiquement -->
        </div>

        <!-- Message de completion -->
        <div class="completion-message" id="completion-message" style="display: none;">
            <div class="completion-icon">🎓</div>
            <h2>Félicitations !</h2>
            <p>Vous avez terminé la formation avec succès.</p>
            <div style="margin-top: 20px;">
                <button class="btn btn-success" onclick="downloadCertificate()">
                    📜 Télécharger l'attestation
                </button>
            </div>
        </div>

        <!-- Loading -->
        <div class="loading" id="loading">
            <div class="spinner"></div>
            <p>Chargement de votre formation personnalisée...</p>
        </div>

        <!-- Message d'erreur -->
        <div class="error-message" id="error-message" style="display: none;">
            <h3>⚠️ Erreur de chargement</h3>
            <p id="error-text">Impossible de charger la formation</p>
            <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 15px;">
                🔄 Réessayer
            </button>
        </div>
    </div>

    <script>
        // Configuration
        const API_URL = 'https://script.google.com/macros/s/AKfycbyI58hCtRiNyw1kCsbsVyRwHnO4tCNbVzXiFfDirYGh7qi6aLJ5FME25Eor7IaR4DTX/exec';
        
        // État global de la formation
        let formationState = {
            formationId: null,
            apprenantId: null,
            isPreview: false,
            formation: null,
            currentModule: 0,
            isTestMode: false,
            progress: {
                modulesCompleted: [],
                quizAnswers: {},
                quizScores: {},
                totalTimeSpent: 0,
                startTime: Date.now()
            }
        };

        // Timer de session
        let sessionTimer = null;

        // Initialisation
        document.addEventListener('DOMContentLoaded', function() {
            initializeFormation();
            startSessionTimer();
        });

        // Gestion du panel de test
        function toggleTestPanel() {
            const panel = document.getElementById('test-panel');
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        }

        function resetToHome() {
            // Réinitialiser l'état
            formationState = {
                formationId: null,
                apprenantId: null,
                isPreview: false,
                formation: null,
                currentModule: 0,
                isTestMode: false,
                progress: {
                    modulesCompleted: [],
                    quizAnswers: {},
                    quizScores: {},
                    totalTimeSpent: 0,
                    startTime: Date.now()
                }
            };

            // Réinitialiser l'interface
            document.getElementById('formation-title').textContent = 'Chargement de la formation...';
            document.getElementById('formation-subtitle').textContent = 'Veuillez patienter';
            document.getElementById('apprenant-info').textContent = '🆔 Chargement...';
            
            // Masquer tous les éléments de formation
            document.getElementById('loading').style.display = 'flex';
            document.getElementById('dashboard').style.display = 'none';
            document.getElementById('modules-nav').style.display = 'none';
            document.getElementById('formation-content').style.display = 'none';
            document.getElementById('completion-message').style.display = 'none';
            document.getElementById('error-message').style.display = 'none';
            
            // Afficher l'avertissement de paramètres
            document.getElementById('params-warning').style.display = 'block';
            document.getElementById('loading').style.display = 'none';
            
            // Réinitialiser les sélecteurs
            document.getElementById('formation-select').value = '';
            document.getElementById('apprenant-select').value = '';
            
            // Afficher le panel de test
            document.getElementById('test-panel').style.display = 'block';
            
            console.log('🏠 Retour à l\'accueil');
        }

        function startTestFormation() {
            const formationId = document.getElementById('formation-select').value;
            const apprenantId = document.getElementById('apprenant-select').value;
            
            if (!formationId) {
                alert('Veuillez sélectionner une formation');
                return;
            }

            // Mettre à jour l'état
            formationState.formationId = formationId;
            formationState.apprenantId = apprenantId === 'PREVIEW' ? null : apprenantId;
            formationState.isPreview = apprenantId === 'PREVIEW';
            formationState.isTestMode = true;

            // Masquer le panel de test et l'avertissement
            document.getElementById('test-panel').style.display = 'none';
            document.getElementById('params-warning').style.display = 'none';

            // Relancer l'initialisation
            document.getElementById('loading').style.display = 'flex';
            document.getElementById('error-message').style.display = 'none';
            
            initializeFormation();
        }

        // Analyse des paramètres URL (compatible Google Sites)
        function parseUrlParameters() {
            const urlParams = new URLSearchParams(window.location.search);
            
            // Récupérer les paramètres
            formationState.formationId = urlParams.get('formationId');
            formationState.apprenantId = urlParams.get('apprenantId');
            formationState.isPreview = urlParams.get('preview') === 'true';
            
            console.log('Paramètres URL détectés:', {
                formationId: formationState.formationId,
                apprenantId: formationState.apprenantId,
                isPreview: formationState.isPreview
            });
        }

        // Initialisation de la formation
        async function initializeFormation() {
            try {
                // Si on n'est pas en mode test, analyser les paramètres URL
                if (!formationState.isTestMode) {
                    parseUrlParameters();
                }
                
                if (!formationState.formationId) {
                    // Afficher l'avertissement et permettre le test
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('params-warning').style.display = 'block';
                    return;
                }
                
                // Charger les données de formation depuis l'API ou mode local
                await loadFormationData();
                
                // Initialiser l'interface
                setupInterface();
                
                // Charger la progression si apprenant connecté
                if (formationState.apprenantId && !formationState.isPreview) {
                    await loadProgress();
                }
                
                // Afficher la formation
                showFormation();
                
            } catch (error) {
                console.error('Erreur initialisation:', error);
                showError(error.message);
            }
        }

        // Chargement des données de formation (API + local pour les tests)
        async function loadFormationData() {
            try {
                console.log('Chargement formation ID:', formationState.formationId);
                
                // Toujours essayer l'API en premier
                try {
                    const response = await fetch(`${API_URL}?action=obtenirFormations&timestamp=${Date.now()}`);
                    const result = await response.json();
                    
                    console.log('Réponse API:', result);
                    
                    let formationRow = null;
                    
                    if (result.success && result.donnees && Array.isArray(result.donnees)) {
                        // Chercher par nom de formation (titre)
                        formationRow = result.donnees.find(row => 
                            row[1] === formationState.formationId || // B: Nom/titre
                            row[0] === formationState.formationId    // A: ID
                        );
                    } else if (Array.isArray(result)) {
                        formationRow = result.find(row => 
                            row[1] === formationState.formationId || 
                            row[0] === formationState.formationId
                        );
                    }
                    
                    if (formationRow) {
                        console.log('Formation trouvée dans l\'API:', formationRow);
                        
                        formationState.formation = {
                            id: formationRow[0],           // A: ID
                            titre: formationRow[1],        // B: Nom
                            objectifs: formationRow[2],    // C: Objectifs
                            domaine: formationRow[3],      // D: Domaine
                            modules: formationRow[4],      // E: Modules
                            dureeHeures: formationRow[5],  // F: Durée_heures
                            canvaUrls: formationRow[6],    // G: Canva_URLs
                            quizUrls: formationRow[7],     // H: Quiz_URLs
                            actif: formationRow[8],        // I: Actif
                            scoreMinimum: 70,
                            dureeEstimee: (formationRow[5] || 4) * 60
                        };
                        
                        // Parsing des modules depuis les données API si disponibles
                        if (formationRow[4] && formationRow[6]) {
                            formationState.formation.modules = parseModulesFromAPI(
                                formationRow[4], // Modules
                                formationRow[6], // Canva URLs
                                formationRow[7]  // Quiz URLs
                            );
                        } else {
                            // Générer des modules par défaut
                            formationState.formation.modules = generateDefaultModules(
                                formationState.formation.titre, 
                                formationState.formation.domaine
                            );
                        }
                        
                        console.log('Formation mappée depuis API:', formationState.formation);
                        console.log('Modules détaillés:', formationState.formation.modules);
                        return; // Succès API, on s'arrête là
                    }
                } catch (apiError) {
                    console.error('Erreur API:', apiError);
                }
                
                // Fallback : données de test locales
                console.log('Utilisation des données de test locales');
                
                const formationsTest = {
                    'BONNES PRATIQUES EN CYBERSÉCURITÉ': {
                        id: 'CYBER_001',
                        titre: 'BONNES PRATIQUES EN CYBERSÉCURITÉ',
                        objectifs: 'Comprendre les enjeux de la cybersécurité Identifier les menaces et les vulnérabilités de votre SI Mettre en place une politique et une démarche de maîtrise de la cybersécurité',
                        domaine: 'Cybersécurité',
                        dureeHeures: 14,
                        actif: false // Brouillon
                    },
                    'Hygiène alimentaire': {
                        id: 'HYGIENE_001',
                        titre: 'Hygiène alimentaire',
                        objectifs: 'Formation obligatoire hygiène et sécurité alimentaire',
                        domaine: 'Hygiène alimentaire',
                        dureeHeures: 14,
                        actif: true
                    },
                    'HACCP': {
                        id: 'HACCP_001',
                        titre: 'HACCP',
                        objectifs: 'Analyse des risques et maîtrise des points critiques',
                        domaine: 'Hygiène alimentaire',
                        dureeHeures: 14,
                        actif: true
                    },
                    'Allergènes alimentaires': {
                        id: 'ALLERGENES_001',
                        titre: 'Allergènes alimentaires',
                        objectifs: 'Formation sur la gestion des allergènes',
                        domaine: 'Hygiène alimentaire',
                        dureeHeures: 7,
                        actif: true
                    }
                };

                const formationData = formationsTest[formationState.formationId];
                
                if (formationData) {
                    console.log('Formation trouvée (mode test):', formationData);
                    
                    formationState.formation = {
                        ...formationData,
                        // Données par défaut
                        prerequis: 'Aucun',
                        modalites: 'E-learning asynchrone',
                        methodesPedagogiques: 'Modules interactifs',
                        modalitesEvaluation: 'QCM automatisés',
                        ressources: 'Plateforme Smart Academy',
                        tarifHT: 500,
                        certification: 'Attestation de formation',
                        version: '1.0',
                        scoreMinimum: 70,
                        dureeEstimee: formationData.dureeHeures * 60
                    };
                    
                    // Générer les modules selon le domaine
                    formationState.formation.modules = generateDefaultModules(
                        formationState.formation.titre, 
                        formationState.formation.domaine
                    );
                    
                    console.log('Formation mappée:', formationState.formation);
                } else {
                    throw new Error(`Formation "${formationState.formationId}" non trouvée`);
                }
                
            } catch (error) {
                console.error('Erreur chargement formation:', error);
                throw new Error(`Impossible de charger la formation: ${error.message}`);
            }
        }

        // Parser les modules depuis les données API
        function parseModulesFromAPI(modulesData, canvaUrls, quizUrls) {
            try {
                console.log('Parsing des données API:');
                console.log('- Modules:', modulesData);
                console.log('- Canva URLs:', canvaUrls);
                console.log('- Quiz URLs:', quizUrls);
                
                // Si les modules sont stockés sous format JSON
                let modules = [];
                
                if (typeof modulesData === 'string') {
                    try {
                        modules = JSON.parse(modulesData);
                        console.log('Modules parsés depuis JSON:', modules);
                    } catch (e) {
                        // Si ce n'est pas du JSON, traiter comme une liste simple
                        modules = modulesData.split(',').map((titre, index) => ({
                            id: `MOD_${String(index + 1).padStart(3, '0')}`,
                            titre: titre.trim(),
                            description: `Module ${index + 1} de la formation`
                        }));
                        console.log('Modules parsés depuis liste:', modules);
                    }
                } else if (Array.isArray(modulesData)) {
                    modules = modulesData;
                    console.log('Modules reçus comme array:', modules);
                }
                
                // Parser les URLs Canva
                let canvaUrlsList = [];
                if (typeof canvaUrls === 'string' && canvaUrls.trim()) {
                    canvaUrlsList = canvaUrls.split(',').map(url => url.trim()).filter(url => url);
                    console.log('URLs Canva parsées:', canvaUrlsList);
                } else if (Array.isArray(canvaUrls)) {
                    canvaUrlsList = canvaUrls.filter(url => url && url.trim());
                    console.log('URLs Canva comme array:', canvaUrlsList);
                }
                
                // Associer les URLs aux modules
                const finalModules = modules.map((module, index) => {
                    const canvaUrl = canvaUrlsList[index] || 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed';
                    
                    // S'assurer que l'URL Canva a le bon format d'embed
                    let embedUrl = canvaUrl;
                    if (canvaUrl && !canvaUrl.includes('view?embed')) {
                        if (canvaUrl.includes('/view?')) {
                            embedUrl = canvaUrl.replace('/view?', '/view?embed&');
                        } else if (canvaUrl.includes('/view')) {
                            embedUrl = canvaUrl.replace('/view', '/view?embed');
                        } else {
                            embedUrl = canvaUrl + (canvaUrl.includes('?') ? '&embed' : '?embed');
                        }
                    }
                    
                    console.log(`Module ${index + 1} - URL originale: ${canvaUrl} -> URL embed: ${embedUrl}`);
                    
                    return {
                        ...module,
                        canvaUrl: embedUrl,
                        quiz: generateQuizForModule('cybersécurité', 'module' + (index + 1))
                    };
                });
                
                console.log('Modules finaux avec URLs:', finalModules);
                return finalModules;
                
            } catch (error) {
                console.error('Erreur parsing modules API:', error);
                return generateDefaultModules('Formation', 'Générique');
            }
        }

        // Génération de modules par défaut basés sur le titre et domaine
        function generateDefaultModules(titre, domaine) {
            const modulesTemplates = {
                'Cybersécurité': [
                    {
                        id: 'MOD_001',
                        titre: 'Introduction à la cybersécurité',
                        description: 'Découvrez les enjeux et les bases de la cybersécurité',
                        canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                        quiz: generateQuizForModule('cybersécurité', 'introduction')
                    },
                    {
                        id: 'MOD_002',
                        titre: 'Gestion des mots de passe',
                        description: 'Apprenez à créer et gérer des mots de passe sécurisés',
                        canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                        quiz: generateQuizForModule('cybersécurité', 'mots de passe')
                    },
                    {
                        id: 'MOD_003',
                        titre: 'Phishing et ingénierie sociale',
                        description: 'Identifiez et évitez les tentatives de phishing',
                        canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                        quiz: generateQuizForModule('cybersécurité', 'phishing')
                    },
                    {
                        id: 'MOD_004',
                        titre: 'Protection des données',
                        description: 'Sécurisez vos données personnelles et professionnelles',
                        canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                        quiz: generateQuizForModule('cybersécurité', 'données')
                    }
                ],
                'Hygiène alimentaire': [
                    {
                        id: 'MOD_001',
                        titre: 'Principes de base HACCP',
                        description: 'Comprendre les fondamentaux de l\'HACCP',
                        canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                        quiz: generateQuizForModule('hygiène', 'haccp')
                    },
                    {
                        id: 'MOD_002',
                        titre: 'Contamination et prévention',
                        description: 'Identifier et prévenir les risques de contamination',
                        canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                        quiz: generateQuizForModule('hygiène', 'contamination')
                    },
                    {
                        id: 'MOD_003',
                        titre: 'Température et conservation',
                        description: 'Maîtriser la chaîne du froid',
                        canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                        quiz: generateQuizForModule('hygiène', 'température')
                    },
                    {
                        id: 'MOD_004',
                        titre: 'Nettoyage et désinfection',
                        description: 'Protocoles de nettoyage et désinfection',
                        canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                        quiz: generateQuizForModule('hygiène', 'nettoyage')
                    }
                ]
            };

            // Retourner les modules selon le domaine, ou modules génériques
            return modulesTemplates[domaine] || generateGenericModules(titre);
        }

        // Génération de modules génériques
        function generateGenericModules(titre) {
            return [
                {
                    id: 'MOD_001',
                    titre: `Introduction - ${titre}`,
                    description: 'Module d\'introduction à la formation',
                    canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                    quiz: generateGenericQuiz('introduction')
                },
                {
                    id: 'MOD_002',
                    titre: 'Fondamentaux',
                    description: 'Les bases essentielles',
                    canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                    quiz: generateGenericQuiz('fondamentaux')
                },
                {
                    id: 'MOD_003',
                    titre: 'Application pratique',
                    description: 'Mise en pratique des connaissances',
                    canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                    quiz: generateGenericQuiz('pratique')
                },
                {
                    id: 'MOD_004',
                    titre: 'Synthèse et validation',
                    description: 'Validation des acquis',
                    canvaUrl: 'https://www.canva.com/design/DAGXM2_7JDU/k3UoDsc6vjNtta0yUvE7qA/view?embed',
                    quiz: generateGenericQuiz('synthèse')
                }
            ];
        }

        // Génération de quiz selon le domaine et le sujet
        function generateQuizForModule(domaine, sujet) {
            const quizTemplates = {
                'cybersécurité': {
                    'introduction': {
                        questions: [
                            {
                                question: 'Qu\'est-ce que la cybersécurité ?',
                                options: [
                                    'Protection des systèmes informatiques',
                                    'Création de sites web',
                                    'Programmation de logiciels',
                                    'Gestion de bases de données'
                                ],
                                correct: 0,
                                explication: 'La cybersécurité consiste à protéger les systèmes informatiques, les réseaux et les données contre les attaques numériques, les accès non autorisés et les dommages.',
                                indices: [
                                    'Pensez à ce que signifie le préfixe "cyber"',
                                    'Il s\'agit de protection contre les menaces numériques',
                                    'Cela concerne la sécurité des ordinateurs et réseaux'
                                ]
                            },
                            {
                                question: 'Quel est le principal objectif de la cybersécurité ?',
                                options: [
                                    'Augmenter la vitesse d\'internet',
                                    'Protéger les données et systèmes',
                                    'Créer de nouveaux logiciels',
                                    'Améliorer les graphiques'
                                ],
                                correct: 1,
                                explication: 'L\'objectif principal de la cybersécurité est de protéger les données, les systèmes informatiques et les réseaux contre les cyberattaques et les accès non autorisés.',
                                indices: [
                                    'Le mot "sécurité" donne un indice important',
                                    'Il s\'agit de protection, pas d\'amélioration de performance',
                                    'Pensez à ce qu\'on veut garder en sécurité'
                                ]
                            }
                        ]
                    },
                    'mots de passe': {
                        questions: [
                            {
                                question: 'Quelle est la longueur minimale recommandée pour un mot de passe ?',
                                options: ['6 caractères', '8 caractères', '12 caractères', '16 caractères'],
                                correct: 2,
                                explication: 'Les experts recommandent au minimum 12 caractères pour un mot de passe sécurisé. Plus c\'est long, plus c\'est difficile à pirater par force brute.',
                                indices: [
                                    'Plus c\'est long, plus c\'est sécurisé',
                                    'Les recommandations modernes ont évolué depuis les années 2000',
                                    'Pensez que les ordinateurs sont plus puissants maintenant'
                                ]
                            },
                            {
                                question: 'Quelle pratique est recommandée pour les mots de passe ?',
                                options: [
                                    'Utiliser le même mot de passe partout',
                                    'Utiliser des mots de passe uniques pour chaque compte',
                                    'Écrire ses mots de passe sur papier',
                                    'Utiliser seulement des chiffres'
                                ],
                                correct: 1,
                                explication: 'Il est essentiel d\'utiliser un mot de passe unique pour chaque compte. Si un site est compromis, vos autres comptes restent protégés.',
                                indices: [
                                    'Si un site se fait pirater, que se passe-t-il ?',
                                    'La diversification est une stratégie de sécurité',
                                    'Un gestionnaire de mots de passe peut aider'
                                ]
                            }
                        ]
                    },
                    'phishing': {
                        questions: [
                            {
                                question: 'Comment reconnaître un email de phishing ?',
                                options: [
                                    'Email professionnel uniquement',
                                    'Demandes urgentes de données personnelles',
                                    'Provient toujours de votre banque',
                                    'Contient toujours des virus'
                                ],
                                correct: 1,
                                explication: 'Les emails de phishing utilisent souvent l\'urgence et la peur pour pousser à révéler des informations personnelles rapidement, sans réfléchir.',
                                indices: [
                                    'Les cybercriminels jouent sur vos émotions',
                                    'Ils veulent que vous agissiez vite sans réfléchir',
                                    'Méfiez-vous des demandes pressantes'
                                ]
                            }
                        ]
                    },
                    'données': {
                        questions: [
                            {
                                question: 'Que signifie RGPD ?',
                                options: [
                                    'Règlement Général sur la Protection des Données',
                                    'Réseau Global de Protection Digitale',
                                    'Règles Générales de Programmation Dédiée',
                                    'Rien de tout cela'
                                ],
                                correct: 0,
                                explication: 'Le RGPD (Règlement Général sur la Protection des Données) est un règlement européen qui protège les données personnelles des citoyens.',
                                indices: [
                                    'C\'est un règlement européen',
                                    'Il concerne la protection des données personnelles',
                                    'Il est entré en vigueur en 2018'
                                ]
                            }
                        ]
                    }
                },
                'hygiène': {
                    'haccp': {
                        questions: [
                            {
                                question: 'Que signifie HACCP ?',
                                options: [
                                    'Hazard Analysis Critical Control Points',
                                    'Health and Care Control Program',
                                    'Hygiene Analysis Catering Control Points',
                                    'Health Analysis Catering Control Program'
                                ],
                                correct: 0
                            }
                        ]
                    },
                    'contamination': {
                        questions: [
                            {
                                question: 'Quels sont les principaux types de contamination ?',
                                options: [
                                    'Physique, chimique, biologique',
                                    'Directe, indirecte, croisée',
                                    'Chaude, froide, tiède',
                                    'Visible, invisible, mixte'
                                ],
                                correct: 0
                            }
                        ]
                    },
                    'température': {
                        questions: [
                            {
                                question: 'À quelle température doit être maintenue la chaîne du froid ?',
                                options: ['En dessous de 8°C', 'En dessous de 4°C', 'En dessous de 0°C', 'En dessous de 2°C'],
                                correct: 1
                            }
                        ]
                    },
                    'nettoyage': {
                        questions: [
                            {
                                question: 'Quelle est la différence entre nettoyage et désinfection ?',
                                options: [
                                    'Il n\'y en a pas',
                                    'Le nettoyage enlève les salissures, la désinfection tue les microbes',
                                    'Le nettoyage se fait à chaud, la désinfection à froid',
                                    'Le nettoyage est quotidien, la désinfection hebdomadaire'
                                ],
                                correct: 1
                            }
                        ]
                    }
                }
            };

            return quizTemplates[domaine]?.[sujet] || generateGenericQuiz(sujet);
        }

        // Génération de quiz générique
        function generateGenericQuiz(sujet) {
            return {
                questions: [
                    {
                        question: `Question sur ${sujet}: Avez-vous bien compris les concepts abordés ?`,
                        options: [
                            'Oui, parfaitement',
                            'Oui, dans l\'ensemble',
                            'Partiellement',
                            'Non, j\'ai besoin de réviser'
                        ],
                        correct: 0
                    }
                ]
            };
        }

        // Configuration de l'interface
        function setupInterface() {
            const formation = formationState.formation;
            
            // Header
            document.getElementById('formation-title').textContent = formation.titre;
            document.getElementById('formation-subtitle').textContent = formation.objectifs;
            
            // Info apprenant
            const apprenantInfo = document.getElementById('apprenant-info');
            if (formationState.isPreview) {
                apprenantInfo.textContent = '👁️ Mode Prévisualisation';
                apprenantInfo.style.background = 'rgba(255, 193, 7, 0.3)';
            } else if (formationState.apprenantId) {
                apprenantInfo.textContent = `🆔 ${formationState.apprenantId}`;
            } else if (formationState.isTestMode) {
                apprenantInfo.textContent = '🧪 Mode Test';
                apprenantInfo.style.background = 'rgba(23, 162, 184, 0.3)';
            } else {
                apprenantInfo.textContent = '👤 Accès public';
            }
            
            // Navigation des modules
            setupModulesNavigation();
            
            // Contenu des modules
            setupModulesContent();
            
            // Dashboard
            updateDashboard();
        }

        // Configuration de la navigation des modules
        function setupModulesNavigation() {
            const nav = document.getElementById('modules-nav');
            const formation = formationState.formation;
            
            nav.innerHTML = formation.modules.map((module, index) => `
                <div class="module-nav-item ${index === 0 ? 'active' : ''}" 
                     onclick="navigateToModule(${index})" 
                     id="nav-module-${index}">
                    <div class="module-status" id="status-module-${index}">
                        ${index + 1}
                    </div>
                    <span>${module.titre}</span>
                </div>
            `).join('');
        }

        // Configuration du contenu des modules
        function setupModulesContent() {
            const content = document.getElementById('formation-content');
            const formation = formationState.formation;
            
            content.innerHTML = formation.modules.map((module, index) => `
                <div class="module-content ${index === 0 ? 'active' : ''}" id="module-${index}">
                    <div class="module-header">
                        <h2 class="module-title">${module.titre}</h2>
                        <p class="module-description">${module.description}</p>
                    </div>
                    
                    <div class="canva-container">
                        <iframe class="canva-embed" 
                                src="${module.canvaUrl}" 
                                allowfullscreen>
                        </iframe>
                        <p style="margin-top: 15px; color: #666;">
                            📚 Consultez attentivement tous les éléments de ce module
                        </p>
                    </div>
                    
                    <div class="module-progress">
                        <div class="progress-text">
                            <span>Progression du module</span>
                            <span id="module-progress-${index}">0%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-fill-${index}" style="width: 0%"></div>
                        </div>
                    </div>
                    
                    ${generateQuizHtml(module.quiz, index)}
                    
                    <div class="navigation-buttons">
                        <button class="btn btn-secondary" 
                                onclick="navigateToModule(${index - 1})" 
                                ${index === 0 ? 'disabled' : ''}>
                            ← Module précédent
                        </button>
                        
                        <div id="module-actions-${index}">
                            <button class="btn btn-primary" onclick="startModuleProgress(${index})">
                                ▶️ Commencer le module
                            </button>
                        </div>
                        
                        <button class="btn btn-secondary" 
                                onclick="navigateToModule(${index + 1})" 
                                ${index === formation.modules.length - 1 ? 'disabled' : ''} 
                                id="next-btn-${index}" 
                                style="${!formationState.progress.modulesCompleted.includes(index) ? 'opacity: 0.5; pointer-events: none;' : ''}">
                            Module suivant →
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Génération du HTML des quiz
        function generateQuizHtml(quiz, moduleIndex) {
            if (!quiz || !quiz.questions || quiz.questions.length === 0) {
                return '';
            }
            
            return `
                <div class="quiz-section" id="quiz-${moduleIndex}" style="display: none;">
                    <div class="quiz-header">
                        <h3 class="quiz-title">🧠 Quiz d'évaluation</h3>
                        <p>Testez vos connaissances sur ce module</p>
                    </div>
                    
                    ${quiz.questions.map((question, qIndex) => `
                        <div class="question-container">
                            <div class="question-title">
                                Question ${qIndex + 1}: ${question.question}
                            </div>
                            <div class="question-options">
                                ${question.options.map((option, oIndex) => `
                                    <label class="option" onclick="selectAnswer(${moduleIndex}, ${qIndex}, ${oIndex})">
                                        <input type="radio" name="question_${moduleIndex}_${qIndex}" value="${oIndex}">
                                        ${option}
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                    
                    <div style="text-align: center; margin-top: 25px;">
                        <button class="btn btn-success" onclick="submitQuiz(${moduleIndex})">
                            ✅ Valider le quiz
                        </button>
                    </div>
                </div>
            `;
        }

        // Affichage de la formation
        function showFormation() {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('dashboard').style.display = 'grid';
            document.getElementById('modules-nav').style.display = 'flex';
            document.getElementById('formation-content').style.display = 'block';
        }

        // Démarrage de la progression d'un module
        function startModuleProgress(moduleIndex) {
            const moduleActions = document.getElementById(`module-actions-${moduleIndex}`);
            
            // Simuler la progression automatique
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += 2;
                updateModuleProgress(moduleIndex, progress);
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    completeModule(moduleIndex);
                }
            }, 100);
            
            // Changer le bouton
            moduleActions.innerHTML = `
                <div style="display: flex; align-items: center; gap: 15px;">
                    <span>📖 Module en cours...</span>
                    <button class="btn btn-success" onclick="forceCompleteModule(${moduleIndex})">
                        ✅ Marquer comme terminé
                    </button>
                </div>
            `;
            
            // Enregistrer le début du module
            recordModuleStart(moduleIndex);
        }

        // Reste des fonctions...
        function forceCompleteModule(moduleIndex) {
            updateModuleProgress(moduleIndex, 100);
            completeModule(moduleIndex);
        }

        function updateModuleProgress(moduleIndex, progress) {
            document.getElementById(`module-progress-${moduleIndex}`).textContent = `${Math.round(progress)}%`;
            document.getElementById(`progress-fill-${moduleIndex}`).style.width = `${progress}%`;
        }

        function completeModule(moduleIndex) {
            const moduleActions = document.getElementById(`module-actions-${moduleIndex}`);
            const navStatus = document.getElementById(`status-module-${moduleIndex}`);
            const navItem = document.getElementById(`nav-module-${moduleIndex}`);
            
            if (!formationState.progress.modulesCompleted.includes(moduleIndex)) {
                formationState.progress.modulesCompleted.push(moduleIndex);
            }
            
            navStatus.textContent = '✅';
            navItem.classList.add('completed');
            navItem.classList.remove('active');
            
            // Débloquer le bouton suivant
            const nextBtn = document.getElementById(`next-btn-${moduleIndex}`);
            if (nextBtn) {
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'auto';
            }
            
            document.getElementById(`quiz-${moduleIndex}`).style.display = 'block';
            
            moduleActions.innerHTML = `
                <div style="display: flex; align-items: center; gap: 15px;">
                    <span style="color: var(--success);">✅ Module terminé</span>
                    <button class="btn btn-primary" onclick="scrollToQuiz(${moduleIndex})">
                        🧠 Passer au quiz
                    </button>
                </div>
            `;
            
            updateDashboard();
            saveProgress();
            checkFormationCompletion();
        }

        function navigateToModule(moduleIndex) {
            const formation = formationState.formation;
            
            if (moduleIndex < 0 || moduleIndex >= formation.modules.length) {
                return;
            }
            
            document.querySelectorAll('.module-content').forEach(module => {
                module.classList.remove('active');
            });
            document.querySelectorAll('.module-nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            
            document.getElementById(`module-${moduleIndex}`).classList.add('active');
            document.getElementById(`nav-module-${moduleIndex}`).classList.add('active');
            
            formationState.currentModule = moduleIndex;
            
            document.getElementById(`module-${moduleIndex}`).classList.add('fade-in');
        }

        function scrollToQuiz(moduleIndex) {
            document.getElementById(`quiz-${moduleIndex}`).scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        function selectAnswer(moduleIndex, questionIndex, optionIndex) {
            if (!formationState.progress.quizAnswers[moduleIndex]) {
                formationState.progress.quizAnswers[moduleIndex] = {};
            }
            formationState.progress.quizAnswers[moduleIndex][questionIndex] = optionIndex;
            
            const questionContainer = document.querySelector(`input[name="question_${moduleIndex}_${questionIndex}"]:checked`);
            if (questionContainer) {
                questionContainer.checked = false;
            }
            
            document.querySelector(`input[name="question_${moduleIndex}_${questionIndex}"][value="${optionIndex}"]`).checked = true;
            
            document.querySelectorAll(`input[name="question_${moduleIndex}_${questionIndex}"]`).forEach(input => {
                input.closest('.option').classList.remove('selected');
            });
            document.querySelector(`input[name="question_${moduleIndex}_${questionIndex}"][value="${optionIndex}"]`)
                .closest('.option').classList.add('selected');
        }

        function submitQuiz(moduleIndex) {
            const module = formationState.formation.modules[moduleIndex];
            const answers = formationState.progress.quizAnswers[moduleIndex] || {};
            
            for (let i = 0; i < module.quiz.questions.length; i++) {
                if (answers[i] === undefined) {
                    alert(`Veuillez répondre à la question ${i + 1}`);
                    return;
                }
            }
            
            let correctAnswers = 0;
            module.quiz.questions.forEach((question, index) => {
                if (answers[index] === question.correct) {
                    correctAnswers++;
                }
            });
            
            const score = Math.round((correctAnswers / module.quiz.questions.length) * 100);
            const passed = score >= formationState.formation.scoreMinimum;
            
            showQuizResult(moduleIndex, score, passed, correctAnswers, module.quiz.questions.length);
            
            if (!formationState.progress.quizScores) {
                formationState.progress.quizScores = {};
            }
            formationState.progress.quizScores[moduleIndex] = score;
            
            updateDashboard();
            saveProgress();
        }

        function showQuizResult(moduleIndex, score, passed, correct, total) {
            const quizSection = document.getElementById(`quiz-${moduleIndex}`);
            const module = formationState.formation.modules[moduleIndex];
            const answers = formationState.progress.quizAnswers[moduleIndex] || {};
            
            // Créer le détail des réponses avec explications (SANS révéler les bonnes réponses)
            let detailsHtml = '';
            if (module.quiz && module.quiz.questions) {
                detailsHtml = module.quiz.questions.map((question, qIndex) => {
                    const userAnswer = answers[qIndex];
                    const isCorrect = userAnswer === question.correct;
                    const userAnswerText = question.options[userAnswer] || 'Non répondu';
                    
                    return `
                        <div style="margin: 15px 0; padding: 15px; background: ${isCorrect ? '#f8f9fa' : '#fff3cd'}; border-radius: 8px; border-left: 4px solid ${isCorrect ? '#28a745' : '#ffc107'};">
                            <strong>Question ${qIndex + 1}:</strong> ${question.question}<br>
                            <div style="margin: 8px 0;">
                                <span style="color: ${isCorrect ? '#28a745' : '#dc3545'};">
                                    ${isCorrect ? '✅' : '❌'} Votre réponse: ${userAnswerText}
                                </span>
                            </div>
                            ${isCorrect ? 
                                `<div style="color: #666; font-style: italic; margin-top: 8px;">
                                    <strong>💡 Explication:</strong> ${question.explication || 'Bonne réponse !'}
                                </div>` : 
                                `<div style="color: #856404; margin-top: 8px;">
                                    <strong>💭 Indice:</strong> ${question.indices ? question.indices[0] : 'Réfléchissez à nouveau à cette question.'}
                                </div>`
                            }
                        </div>
                    `;
                }).join('');
            }
            
            const resultHtml = `
                <div style="background: ${passed ? '#d4edda' : '#f8d7da'}; 
                            border: 2px solid ${passed ? '#28a745' : '#dc3545'}; 
                            border-radius: 10px; 
                            padding: 20px; 
                            text-align: center; 
                            margin: 20px 0;">
                    <h4 style="color: ${passed ? '#155724' : '#721c24'};">
                        ${passed ? '✅ Quiz réussi !' : '❌ Quiz non réussi'}
                    </h4>
                    <p style="font-size: 1.2em; margin: 10px 0;">
                        Score: ${score}% (${correct}/${total} bonnes réponses)
                    </p>
                    <p style="color: #666;">
                        ${passed ? 
                            'Félicitations ! Vous pouvez passer au module suivant.' : 
                            `Score minimum requis: ${formationState.formation.scoreMinimum}%. Utilisez les indices ci-dessous pour vous améliorer.`
                        }
                    </p>
                    
                    <!-- Détails des réponses avec explications/indices -->
                    <div style="text-align: left; margin: 20px 0; max-height: 300px; overflow-y: auto;">
                        <h5 style="text-align: center; margin-bottom: 15px; color: #333;">
                            ${passed ? '📝 Explications' : '💡 Indices pour vous aider'}
                        </h5>
                        ${detailsHtml}
                    </div>
                    
                    <div style="margin-top: 15px;">
                        ${passed ? 
                            `<button class="btn btn-success" onclick="navigateToModule(${moduleIndex + 1})">
                                Module suivant →
                            </button>` :
                            `<button class="btn btn-warning" onclick="retryQuiz(${moduleIndex})">
                                🔄 Recommencer le quiz
                            </button>
                            ${!passed ? `<button class="btn btn-info" onclick="showMoreHints(${moduleIndex})" style="margin-left: 10px;">
                                💡 Plus d'indices
                            </button>` : ''}`
                        }
                    </div>
                </div>
            `;
            
            quizSection.innerHTML = quizSection.innerHTML.replace(
                /<div style="text-align: center; margin-top: 25px;">[\s\S]*?<\/div>/,
                resultHtml
            );
        }

        function retryQuiz(moduleIndex) {
            if (formationState.progress.quizAnswers[moduleIndex]) {
                delete formationState.progress.quizAnswers[moduleIndex];
            }
            
            const module = formationState.formation.modules[moduleIndex];
            const quizSection = document.getElementById(`quiz-${moduleIndex}`);
            quizSection.innerHTML = generateQuizHtml(module.quiz, moduleIndex).replace(
                '<div class="quiz-section" id="quiz-' + moduleIndex + '" style="display: none;">',
                '').replace('</div>', '');
            
            quizSection.style.display = 'block';
        }

        // Fonction pour afficher plus d'indices
        function showMoreHints(moduleIndex) {
            const module = formationState.formation.modules[moduleIndex];
            const answers = formationState.progress.quizAnswers[moduleIndex] || {};
            
            if (!module.quiz || !module.quiz.questions) return;
            
            let helpHtml = `
                <div style="background: #e7f3ff; border: 2px solid #0066cc; border-radius: 10px; padding: 20px; margin: 20px 0;">
                    <h4 style="color: #0066cc; text-align: center; margin-bottom: 15px;">💡 Indices supplémentaires</h4>
            `;
            
            module.quiz.questions.forEach((question, qIndex) => {
                const userAnswer = answers[qIndex];
                const isCorrect = userAnswer === question.correct;
                
                // Afficher les indices uniquement pour les mauvaises réponses
                if (!isCorrect && question.indices && question.indices.length > 0) {
                    helpHtml += `
                        <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #ffc107;">
                            <strong>Question ${qIndex + 1}:</strong> ${question.question}
                            <div style="margin: 10px 0;">
                                ${question.indices.map((indice, index) => 
                                    `<div style="margin: 8px 0; padding: 8px; background: #f8f9fa; border-radius: 4px;">
                                        <strong>Indice ${index + 1}:</strong> ${indice}
                                    </div>`
                                ).join('')}
                            </div>
                        </div>
                    `;
                }
            });
            
            helpHtml += `
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="btn btn-primary" onclick="retryQuiz(${moduleIndex})">
                            🔄 Recommencer avec ces indices
                        </button>
                    </div>
                </div>
            `;
            
            // Insérer les indices avant le résultat existant
            const quizSection = document.getElementById(`quiz-${moduleIndex}`);
            const existingResult = quizSection.querySelector('div[style*="background: #f8d7da"]') || 
                                  quizSection.querySelector('div[style*="background: #d4edda"]');
            
            if (existingResult) {
                existingResult.insertAdjacentHTML('beforebegin', helpHtml);
            }
        }

        function updateDashboard() {
            const formation = formationState.formation;
            const progress = formationState.progress;
            
            const progressPercent = Math.round((progress.modulesCompleted.length / formation.modules.length) * 100);
            document.getElementById('progress-percent').textContent = `${progressPercent}%`;
            
            document.getElementById('modules-completed').textContent = 
                `${progress.modulesCompleted.length}/${formation.modules.length}`;
            
            let averageScore = '-';
            if (progress.quizScores && Object.keys(progress.quizScores).length > 0) {
                const scores = Object.values(progress.quizScores);
                averageScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) + '%';
            }
            document.getElementById('quiz-score').textContent = averageScore;
            
            const timeSpent = Math.round((Date.now() - progress.startTime) / (1000 * 60));
            document.getElementById('time-spent').textContent = `${timeSpent}min`;
        }

        function checkFormationCompletion() {
            const formation = formationState.formation;
            const progress = formationState.progress;
            
            const allModulesCompleted = progress.modulesCompleted.length === formation.modules.length;
            
            let allQuizPassed = true;
            if (progress.quizScores) {
                Object.values(progress.quizScores).forEach(score => {
                    if (score < formation.scoreMinimum) {
                        allQuizPassed = false;
                    }
                });
            } else {
                allQuizPassed = false;
            }
            
            if (allModulesCompleted && allQuizPassed) {
                showFormationCompletion();
            }
        }

        function showFormationCompletion() {
            document.getElementById('formation-content').style.display = 'none';
            document.getElementById('completion-message').style.display = 'block';
            
            recordFormationCompletion();
        }

        function startSessionTimer() {
            let seconds = 0;
            sessionTimer = setInterval(() => {
                seconds++;
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                document.getElementById('timer-display').textContent = 
                    `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
            }, 1000);
        }

        async function loadProgress() {
            if (formationState.isTestMode) {
                console.log('Mode test - Progression non chargée depuis l\'API');
                return;
            }
            
            try {
                console.log('Chargement de la progression pour:', formationState.apprenantId);
                
                const response = await fetch(`${API_URL}?action=obtenirProgression&apprenantId=${formationState.apprenantId}&formationId=${formationState.formationId}&timestamp=${Date.now()}`);
                const result = await response.json();
                
                if (result && result.progression) {
                    formationState.progress = { ...formationState.progress, ...result.progression };
                    console.log('Progression chargée:', formationState.progress);
                }
                
            } catch (error) {
                console.error('Erreur chargement progression:', error);
            }
        }

        async function saveProgress() {
            if (formationState.isPreview || formationState.isTestMode) {
                console.log('Mode prévisualisation/test - Progression non sauvegardée');
                return;
            }
            
            if (!formationState.apprenantId) {
                console.log('Pas d\'ID apprenant - Progression non sauvegardée');
                return;
            }
            
            try {
                const progressData = {
                    action: 'sauvegarderProgression',
                    apprenantId: formationState.apprenantId,
                    formationId: formationState.formationId,
                    progression: formationState.progress,
                    timestamp: new Date().toISOString()
                };
                
                console.log('Sauvegarde progression:', progressData);
                
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: 'data=' + encodeURIComponent(JSON.stringify(progressData))
                });
                
                const result = await response.json();
                console.log('Sauvegarde résultat:', result);
                
            } catch (error) {
                console.error('Erreur sauvegarde:', error);
            }
        }

        function recordModuleStart(moduleIndex) {
            if (formationState.isPreview || formationState.isTestMode) return;
            
            const eventData = {
                action: 'enregistrerEvenement',
                apprenantId: formationState.apprenantId,
                formationId: formationState.formationId,
                type: 'module_start',
                moduleIndex: moduleIndex,
                timestamp: new Date().toISOString()
            };
            
            console.log('Début module enregistré:', eventData);
            
            fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: 'data=' + encodeURIComponent(JSON.stringify(eventData))
            }).catch(error => console.error('Erreur enregistrement événement:', error));
        }

        function recordFormationCompletion() {
            if (formationState.isPreview || formationState.isTestMode) return;
            
            const completionData = {
                action: 'terminerFormation',
                apprenantId: formationState.apprenantId,
                formationId: formationState.formationId,
                scoreGlobal: calculateGlobalScore(),
                tempsTotal: Math.round((Date.now() - formationState.progress.startTime) / (1000 * 60)),
                timestamp: new Date().toISOString()
            };
            
            console.log('Formation terminée:', completionData);
            
            fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: 'data=' + encodeURIComponent(JSON.stringify(completionData))
            }).catch(error => console.error('Erreur completion:', error));
        }

        function calculateGlobalScore() {
            const scores = formationState.progress.quizScores;
            if (!scores || Object.keys(scores).length === 0) return 0;
            
            const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
            return Math.round(totalScore / Object.keys(scores).length);
        }

        function downloadCertificate() {
            if (formationState.isPreview || formationState.isTestMode) {
                alert('📋 Mode prévisualisation/test - L\'attestation sera générée pour les vrais apprenants');
                return;
            }
            
            if (!formationState.apprenantId) {
                alert('❌ Impossible de générer l\'attestation sans identifiant apprenant');
                return;
            }
            
            const certificateUrl = `${API_URL}?action=genererAttestation&apprenantId=${formationState.apprenantId}&formationId=${formationState.formationId}&timestamp=${Date.now()}`;
            
            alert('📜 Génération de votre attestation en cours...\n\nElle sera téléchargée automatiquement ou envoyée par email.');
            
            try {
                window.open(certificateUrl, '_blank');
            } catch (error) {
                console.error('Erreur téléchargement attestation:', error);
                alert('❌ Erreur lors du téléchargement. Veuillez contacter le support.');
            }
        }

        function showError(message) {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('error-message').style.display = 'block';
            document.getElementById('error-text').textContent = message;
            
            console.error('Erreur formation:', message);
        }

        window.addEventListener('beforeunload', function(e) {
            if (!formationState.isPreview && !formationState.isTestMode && formationState.apprenantId) {
                saveProgress();
                
                if (formationState.progress.modulesCompleted.length > 0) {
                    e.preventDefault();
                    e.returnValue = 'Votre progression sera sauvegardée. Êtes-vous sûr de vouloir quitter ?';
                }
            }
        });

        setInterval(() => {
            if (!formationState.isPreview && !formationState.isTestMode && formationState.apprenantId) {
                saveProgress();
            }
        }, 30000);

        function showDebugInfo() {
            console.group('🔍 Debug Formation Smart Academy');
            console.log('État de la formation:', formationState);
            console.log('URL actuelle:', window.location.href);
            console.log('Paramètres URL:', new URLSearchParams(window.location.search));
            console.log('API URL:', API_URL);
            console.groupEnd();
        }

        window.smartAcademyDebug = {
            showDebugInfo,
            getState: () => formationState,
            forceComplete: (moduleIndex) => forceCompleteModule(moduleIndex),
            skipToModule: (moduleIndex) => navigateToModule(moduleIndex),
            resetProgress: () => {
                formationState.progress = {
                    modulesCompleted: [],
                    quizAnswers: {},
                    quizScores: {},
                    totalTimeSpent: 0,
                    startTime: Date.now()
                };
                updateDashboard();
                
                document.querySelectorAll('.module-nav-item').forEach((item, index) => {
                    item.classList.remove('completed');
                    const status = document.getElementById(`status-module-${index}`);
                    status.textContent = index + 1;
                });
                
                document.querySelectorAll('[id^="module-actions-"]').forEach((actions, index) => {
                    actions.innerHTML = `
                        <button class="btn btn-primary" onclick="startModuleProgress(${index})">
                            ▶️ Commencer le module
                        </button>
                    `;
                });
                
                document.querySelectorAll('[id^="quiz-"]').forEach(quiz => {
                    quiz.style.display = 'none';
                });
                
                console.log('✅ Progression réinitialisée');
            },
            completeAllModules: () => {
                const formation = formationState.formation;
                for (let i = 0; i < formation.modules.length; i++) {
                    forceCompleteModule(i);
                    if (!formationState.progress.quizScores) {
                        formationState.progress.quizScores = {};
                    }
                    formationState.progress.quizScores[i] = 85;
                }
                updateDashboard();
                checkFormationCompletion();
                console.log('✅ Tous les modules complétés avec scores fictifs');
            },
            testQuiz: (moduleIndex) => {
                const module = formationState.formation.modules[moduleIndex];
                if (module && module.quiz) {
                    console.log('Quiz du module', moduleIndex, ':', module.quiz);
                    
                    module.quiz.questions.forEach((question, qIndex) => {
                        selectAnswer(moduleIndex, qIndex, question.correct);
                    });
                    
                    setTimeout(() => {
                        submitQuiz(moduleIndex);
                    }, 1000);
                } else {
                    console.log('Pas de quiz pour le module', moduleIndex);
                }
            }
        };

        console.log('🎓 Interface Apprenant Smart Academy - Version Corrigée Chargée !');
        console.log('💡 Utilisez le panel de test en haut à droite pour tester différentes formations');
        console.log('🔧 Tapez smartAcademyDebug.showDebugInfo() dans la console pour plus d\'infos');
        console.log('🧪 Commandes de test disponibles:');
        console.log('   - smartAcademyDebug.resetProgress() : Réinitialiser la progression');
        console.log('   - smartAcademyDebug.completeAllModules() : Compléter tous les modules');
        console.log('   - smartAcademyDebug.testQuiz(0) : Tester automatiquement le quiz du module 0');
    </script>
</body>
</html>
