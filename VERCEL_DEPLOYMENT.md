# Déploiement CI/CD avec Vercel

## Configuration automatique avec GitHub

### Étape 1 : Connecter le repository à Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"** ou **"Log In"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à vos repositories GitHub

### Étape 2 : Importer le projet

1. Une fois connecté, cliquez sur **"Add New..."** → **"Project"**
2. Trouvez votre repository `Demo_API` dans la liste
3. Cliquez sur **"Import"**

### Étape 3 : Configuration du projet

Dans l'écran de configuration :

- **Project Name** : `webcraft-api` (ou le nom de votre choix)
- **Framework Preset** : `Other` (projet statique)
- **Root Directory** : `.` (racine du projet)
- **Build Command** : Laisser vide (pas de build nécessaire)
- **Output Directory** : `.` (racine)

Cliquez sur **"Deploy"**

### Étape 4 : Déploiement automatique activé ! 🎉

Vercel va maintenant :
- ✅ Déployer automatiquement chaque push sur `main`
- ✅ Créer des preview deployments pour chaque Pull Request
- ✅ Fournir une URL de production : `https://webcraft-api.vercel.app`
- ✅ Configurer HTTPS automatiquement
- ✅ Activer le CDN global

## URL de votre API

Après déploiement, votre API sera accessible à :

```
Production : https://VOTRE-PROJET.vercel.app
Projects   : https://VOTRE-PROJET.vercel.app/data/projects.json
Courses    : https://VOTRE-PROJET.vercel.app/data/courses.json
```

## Workflow CI/CD

```
Developer push → GitHub → Vercel Build → Deploy → Live
```

### Branches et déploiements

- **main** → Production (https://VOTRE-PROJET.vercel.app)
- **autres branches** → Preview URLs automatiques
- **Pull Requests** → Preview deployments avec commentaires GitHub

## Configuration avancée (optionnelle)

### Variables d'environnement

Dans Vercel Dashboard → Settings → Environment Variables :
- Ajouter des variables si nécessaire (API keys, etc.)

### Domaine personnalisé

Dans Vercel Dashboard → Settings → Domains :
1. Cliquez sur **"Add"**
2. Entrez votre domaine personnalisé
3. Configurez les DNS selon les instructions

### Webhooks

Dans Vercel Dashboard → Settings → Git :
- Configure les webhooks pour d'autres intégrations (Slack, Discord, etc.)

## Surveillance et logs

- **Dashboard Vercel** : Voir tous les déploiements
- **Logs** : Accéder aux logs de build et runtime
- **Analytics** : Voir les statistiques de trafic (plan gratuit limité)

## Rollback

En cas de problème :
1. Allez dans Vercel Dashboard → Deployments
2. Trouvez un déploiement précédent qui fonctionnait
3. Cliquez sur **"..."** → **"Promote to Production"**

## Limites du plan gratuit

- ✅ 100 GB de bande passante / mois
- ✅ Déploiements illimités
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Analytics basiques
- ⚠️ 1 membre d'équipe seulement
- ⚠️ Pas de protection par mot de passe

## Support

- [Documentation Vercel](https://vercel.com/docs)
- [Support Vercel](https://vercel.com/support)
- [Community Discord](https://vercel.com/discord)

---

**Déploiement créé avec ❤️ pour l'apprentissage du développement web**
