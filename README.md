# 🚀 WebCraft Projects API

API REST pédagogique pour l'apprentissage des requêtes AJAX en JavaScript.

## 📋 Description

Cette API fournit des données de projets web et de cours de formation fictifs pour permettre aux étudiants de pratiquer les requêtes AJAX, le filtrage de données et la manipulation du DOM sans avoir besoin de configurer un backend.

## 🌐 API en Production

**URL de production :** [https://webcraft-api.vercel.app](https://webcraft-api.vercel.app)

### Endpoints disponibles :
- **Projects API :** `https://webcraft-api.vercel.app/data/projects.json`
- **Courses API :** `https://webcraft-api.vercel.app/data/courses.json`

## 🚀 Déploiement sur GitHub Pages ou Vercel

### Étape 1 : Créer le repository

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur "New repository"
3. Nom du repository : `webcraft-api`
4. Cochez "Public"
5. Cliquez sur "Create repository"

### Étape 2 : Uploader les fichiers

**Option A - Via l'interface web :**
1. Cliquez sur "uploading an existing file"
2. Glissez-déposez tous les fichiers et dossiers
3. Cliquez sur "Commit changes"

**Option B - Via Git (ligne de commande) :**
```bash
git clone https://github.com/VOTRE-USERNAME/webcraft-api.git
cd webcraft-api
# Copiez tous les fichiers du projet ici
git add .
git commit -m "Initial commit - WebCraft API"
git push origin main
```

### Étape 3 : Activer GitHub Pages

1. Allez dans "Settings" du repository
2. Dans le menu de gauche, cliquez sur "Pages"
3. Source : Sélectionnez "main" branch
4. Folder : Sélectionnez "/ (root)"
5. Cliquez sur "Save"
6. Attendez 1-2 minutes

### Étape 4 : Accéder à l'API

Votre API sera accessible à :
```
https://VOTRE-USERNAME.github.io/webcraft-api/
```

## 📡 Endpoints disponibles

### Projects API

#### Récupérer tous les projets
```
GET https://webcraft-api.vercel.app/data/projects.json
```

**Réponse :**
```json
{
  "projects": [8 projets web],
  "technologies": [...],
  "categories": [...]
}
```

### Courses API

#### Récupérer tous les cours
```
GET https://webcraft-api.vercel.app/data/courses.json
```

**Réponse :**
```json
{
  "courses": [10 cours de formation],
  "categories": ["Frontend", "Backend", "Mobile", "DevOps"],
  "levels": ["Débutant", "Intermédiaire", "Avancé"],
  "technologies": [...]
}
```

## 💻 Exemples d'utilisation

### Avec Fetch API - Projets

```javascript
async function loadProjects() {
    try {
        const response = await fetch('https://webcraft-api.vercel.app/data/projects.json');

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log('Projets:', data.projects);

    } catch (error) {
        console.error('Erreur:', error);
    }
}
```

### Avec Fetch API - Cours

```javascript
async function loadCourses() {
    try {
        const response = await fetch('https://webcraft-api.vercel.app/data/courses.json');

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log('Cours:', data.courses);

    } catch (error) {
        console.error('Erreur:', error);
    }
}
```

### Avec Axios

```javascript
async function loadProjects() {
    try {
        const response = await axios.get('https://webcraft-api.vercel.app/data/projects.json');
        console.log('Projets:', response.data.projects);

    } catch (error) {
        console.error('Erreur:', error);
    }
}
```

### Filtrer par technologie

```javascript
async function loadReactProjects() {
    try {
        const response = await fetch('https://webcraft-api.vercel.app/data/projects.json');
        const data = await response.json();

        const reactProjects = data.projects.filter(project =>
            project.technologies.includes('React')
        );

        console.log('Projets React:', reactProjects);

    } catch (error) {
        console.error('Erreur:', error);
    }
}
```

### Filtrer par catégorie de cours

```javascript
async function loadFrontendCourses() {
    try {
        const response = await fetch('https://webcraft-api.vercel.app/data/courses.json');
        const data = await response.json();

        const frontendCourses = data.courses.filter(course =>
            course.category === 'Frontend'
        );

        console.log('Cours Frontend:', frontendCourses);

    } catch (error) {
        console.error('Erreur:', error);
    }
}
```

## 📦 Structure des données

### Objet Project

```json
{
  "id": 1,
  "title": "E-commerce ModaStyle",
  "client": "ModaStyle Fashion",
  "category": "E-commerce",
  "technologies": ["HTML5", "CSS3", "JavaScript", "PHP"],
  "year": 2024,
  "duration": "3 mois",
  "image": "https://...",
  "description": "...",
  "features": ["Panier dynamique", "Paiement sécurisé", ...],
  "url": "https://..."
}
```

### Objet Course

```json
{
  "id": 1,
  "title": "Maîtriser React 18",
  "category": "Frontend",
  "level": "Intermédiaire",
  "duration": "24h",
  "technologies": ["React", "JavaScript", "Hooks"],
  "instructor": "Sophie Martin",
  "price": 599,
  "rating": 4.8,
  "students": 342,
  "image": "https://...",
  "description": "...",
  "modules": ["Composants fonctionnels", "Hooks avancés", ...],
  "available": true
}
```

### Propriétés disponibles

| Propriété | Type | Description |
|-----------|------|-------------|
| id | number | Identifiant unique |
| title | string | Titre du projet |
| client | string | Nom du client |
| category | string | Catégorie du projet |
| technologies | array | Liste des technologies utilisées |
| year | number | Année de réalisation |
| duration | string | Durée du projet |
| image | string | URL de l'image |
| description | string | Description complète |
| features | array | Liste des fonctionnalités |
| url | string | URL du projet (fictive) |

## 🎯 Cas d'usage pédagogiques

### 1. Affichage simple
Charger et afficher tous les projets dans une grille

### 2. Filtrage
Filtrer les projets par technologie ou catégorie

### 3. Recherche
Implémenter une recherche textuelle

### 4. Modal de détails
Afficher les détails d'un projet dans un modal

### 5. Tri
Trier les projets par année, nom, etc.

## 🔧 Technologies utilisées

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript ES6+ (Fetch API, Async/Await)
- JSON

## 📝 Notes importantes

- ✅ CORS activé (accessible depuis n'importe quel domaine)
- ✅ Pas d'authentification requise
- ✅ Données statiques (pas de base de données)
- ✅ Idéal pour l'apprentissage et les projets étudiants

## 🚨 Limitations

- Les données sont en lecture seule (GET uniquement)
- Pas de vrai backend (filtrage côté client)
- Les POST/PUT/DELETE ne fonctionneront pas
- Les images sont hébergées sur des CDN externes

## 📄 Licence

Ce projet est à usage pédagogique. Les données sont fictives.

## 🤝 Contribution

Pour suggérer des améliorations :
1. Fork le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

## 📧 Contact

Pour toute question, ouvrez une issue sur le repository GitHub.

---

**Créé avec ❤️ pour l'apprentissage du développement web**