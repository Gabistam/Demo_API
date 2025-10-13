// Variables globales
let allProjects = [];
let allTechnologies = [];

// Obtenir l'URL de base dynamiquement
function getBaseURL() {
    return window.location.origin + window.location.pathname.replace('index.html', '');
}

// Mettre à jour l'URL de base dans la page
document.addEventListener('DOMContentLoaded', () => {
    const baseUrlElement = document.getElementById('base-url');
    if (baseUrlElement) {
        baseUrlElement.textContent = getBaseURL();
    }
});

// Fonction pour tester un endpoint
async function testEndpoint(type) {
    const baseURL = getBaseURL();
    let url, result;

    try {
        // Déterminer l'URL selon le type
        if (type.startsWith('projects-')) {
            url = `${baseURL}data/projects.json`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            const data = await response.json();

            switch(type) {
                case 'projects-all':
                    result = data;
                    break;
                case 'projects-react':
                    result = {
                        projects: data.projects.filter(p => p.technologies.includes('React')),
                        count: data.projects.filter(p => p.technologies.includes('React')).length
                    };
                    break;
                case 'projects-ecommerce':
                    result = {
                        projects: data.projects.filter(p => p.category === 'E-commerce'),
                        count: data.projects.filter(p => p.category === 'E-commerce').length
                    };
                    break;
            }

            console.log('✅ Résultat du test (Projects):', result);
            alert(`✅ Requête réussie! ${result.projects ? result.projects.length : 'Tous les'} projet(s) récupéré(s). Consultez la console (F12) pour voir les données.`);

        } else if (type.startsWith('courses-')) {
            url = `${baseURL}data/courses.json`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            const data = await response.json();

            switch(type) {
                case 'courses-all':
                    result = data;
                    break;
                case 'courses-frontend':
                    result = {
                        courses: data.courses.filter(c => c.category === 'Frontend'),
                        count: data.courses.filter(c => c.category === 'Frontend').length
                    };
                    break;
                case 'courses-debutant':
                    result = {
                        courses: data.courses.filter(c => c.level === 'Débutant'),
                        count: data.courses.filter(c => c.level === 'Débutant').length
                    };
                    break;
            }

            console.log('✅ Résultat du test (Courses):', result);
            alert(`✅ Requête réussie! ${result.courses ? result.courses.length : 'Tous les'} cours récupéré(s). Consultez la console (F12) pour voir les données.`);
        }

    } catch (error) {
        console.error('❌ Erreur:', error);
        alert(`❌ Erreur: ${error.message}`);
    }
}

// Fonction pour charger les données en temps réel
async function loadLiveData() {
    const baseURL = getBaseURL();
    const url = `${baseURL}data/projects.json`;
    const container = document.getElementById('projects-container');
    const techFilter = document.getElementById('tech-filter');
    
    // Afficher un loader
    container.innerHTML = '<p class="text-muted">Chargement des données...</p>';
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        allProjects = data.projects;
        allTechnologies = data.technologies;
        
        // Remplir le select des technologies
        techFilter.innerHTML = '<option value="">Toutes les technologies</option>';
        data.technologies.forEach(tech => {
            const option = document.createElement('option');
            option.value = tech;
            option.textContent = tech;
            techFilter.appendChild(option);
        });
        
        // Afficher tous les projets
        displayProjects(data.projects);
        
        console.log('✅ Données chargées avec succès:', data);
        
    } catch (error) {
        console.error('❌ Erreur de chargement:', error);
        container.innerHTML = `<p class="text-muted" style="color: var(--danger-color);">❌ Erreur: ${error.message}</p>`;
    }
}

// Fonction pour afficher les projets
function displayProjects(projects) {
    const container = document.getElementById('projects-container');
    
    if (!projects || projects.length === 0) {
        container.innerHTML = '<p class="text-muted">Aucun projet trouvé.</p>';
        return;
    }
    
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='https://via.placeholder.com/400x300/3498db/ffffff?text=Projet'">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-client">${project.client}</p>
                <p>${project.description.substring(0, 100)}...</p>
                <div class="project-technologies">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="tech-badge">${tech}</span>`
                    ).join('')}
                    ${project.technologies.length > 3 ? `<span class="tech-badge">+${project.technologies.length - 3}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Fonction pour filtrer par technologie
function filterByTechnology() {
    const techFilter = document.getElementById('tech-filter');
    const selectedTech = techFilter.value;
    
    if (!selectedTech) {
        displayProjects(allProjects);
        return;
    }
    
    const filteredProjects = allProjects.filter(project => 
        project.technologies.includes(selectedTech)
    );
    
    displayProjects(filteredProjects);
    console.log(`📊 Projets filtrés par ${selectedTech}:`, filteredProjects);
}

// Smooth scroll pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});