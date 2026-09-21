<div align="center">

# Personal Platform

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

**Une plateforme personnelle (portfolio) : un frontend React + un backend Express.**

</div>

---

## Structure du projet

```
personal-platform/
├── client/    # Frontend React (Vite + Tailwind CSS + i18next)
└── server/    # Backend API (Express + Helmet + rate limiting)
```

## Stack technique

### Client (`client/`)
- **React 18** + **Vite 7**
- **Tailwind CSS 4**
- **React Router 7** (routes lazy-loaded + Suspense)
- **i18next** (EN / FR / AR avec bascule RTL automatique)
- **ESLint 9** (flat config)

### Serveur (`server/`)
- **Express 5**
- **Helmet** (en-têtes de sécurité)
- **express-rate-limit** (protection contre le spam)
- **CORS** configuré via variable d'environnement
- **dotenv**

## Prérequis

- **Node.js** v18 ou supérieur
- **npm**

## Installation & lancement

### 1. Installer le client

```bash
cd client
npm install
cp .env.example .env   # optionnel
npm run dev            # http://localhost:5173
```

### 2. Installer le serveur

```bash
cd server
npm install
```

Vous pouvez renseigner vos variables dans un fichier `.env` (voir `client/.env.example` pour les variables concernées par le client).

```bash
npm run server         # lance serveur en watch mode
# ou
npm start              # lance le serveur normalement
```

Le serveur écoute par défaut sur le port `3001`.

## Scripts disponibles

### Client

| Commande | Description |
|----------|-------------|
| `npm run client` | Serveur de dev Vite (HMR) |
| `npm run build` | Build de production (`dist/`) |
| `npm run preview` | Prévisualiser le build de production |
| `npm run build:analyze` | Build avec analyse du bundle |
| `npm run lint` | Lint ESLint |
| `npm run lint:fix` | Corriger automatiquement les erreurs ESLint |

### Serveur

| Commande | Description |
|----------|-------------|
| `npm start` | Lance le serveur Express |
| `npm run server` | Lance le serveur avec `node --watch` |

## Variables d'environnement

Le client utilise des variables préfixées `VITE_` (voir `client/.env.example`) :

| Variable | Description |
|----------|-------------|
| `VITE_APP_URL` | URL publique de l'app |
| `VITE_API_BASE_URL` | URL de base de l'API backend |

Côté serveur, la variable `CLIENT_URL` définit l'origine autorisée par CORS (par défaut `http://localhost:3000`) et `PORT` le port d'écoute (par défaut `3001`).

## Routes de l'API

| Méthode | Route | Description |
|---------|-------|-------------|
| `GET` | `/` | Message de bienvenue (`Hello World!`) |

## Déploiement

- **Client** : `npm run build`, puis déployez le dossier `dist/` (Vercel, Netlify, ...).
- **Serveur** : déployez le dossier `server/` sur un hébergeur Node (Render, Railway, VPS, ...).

## Licence

ISC