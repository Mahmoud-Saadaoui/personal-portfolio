<div align="center">

![Portfolio Banner](https://raw.githubusercontent.com/Mahmoud-Saadaoui/personal-portfolio/main/.github/banner.png)

# Mahmoud Saadaoui - Personal Portfolio

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**A modern, responsive, and multilingual portfolio website**

Built with React, featuring a clean design, dark/light mode, smooth animations, and full RTL support for Arabic.

[Live Demo](#) • [Report Bug](https://github.com/Mahmoud-Saadaoui/personal-portfolio/issues) • [Request Feature](https://github.com/Mahmoud-Saadaoui/personal-portfolio/issues)

</div>

---

## Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## Overview

This portfolio website showcases my projects, skills, and professional background. It's designed with modern web development best practices, including performance optimization, accessibility, and a seamless user experience across all devices.

**Key Highlights:**

- Multilingual support (English, French, Arabic)
- Full RTL (Right-to-Left) support for Arabic
- Dark/Light theme with smooth transitions
- Responsive design optimized for all screen sizes
- SEO-optimized with dynamic meta tags
- Contact form with file upload capability

---

## Features

### Internationalization (i18n)

| Feature | Description |
|---------|-------------|
| **3 Languages** | English, French, and Arabic with native translations |
| **RTL Support** | Complete right-to-left layout for Arabic users |
| **Auto-detection** | Automatically detects and applies browser language |
| **Persistent** | Language preference saved in localStorage |
| **SEO Optimized** | Dynamic `lang` attribute for better indexing |

### Theme System

- **Dual Mode**: Seamless switching between light and dark themes
- **CSS Variables**: Consistent color system using design tokens
- **Smooth Transitions**: Animated theme changes for better UX
- **Persistent**: Theme preference remembered across sessions
- **System Preference**: Respects OS theme preference by default

### User Experience

| Feature | Description |
|---------|-------------|
| **Responsive** | Mobile-first design, works on all devices |
| **Animations** | Smooth Framer Motion powered transitions |
| **Glassmorphism** | Modern visual effects with backdrop blur |
| **Lazy Loading** | Code splitting for optimal performance |
| **Accessibility** | WCAG compliant with ARIA labels and focus states |

### Performance

- **React.memo**: Prevents unnecessary re-renders
- **useCallback**: Optimized event handlers
- **Code Splitting**: Lazy-loaded routes and components
- **Vite Build**: Lightning-fast HMR and optimized bundles
- **Image Optimization**: Lazy loading with blur placeholders

### Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section with animated profile and social links |
| **Skills** | Categorized technical skills with icons |
| **Projects** | Filterable project showcase with animations |
| **Project Details** | Individual project pages with tech stack |
| **Contact** | Functional form with file upload support |

---

## Tech Stack

### Frontend Framework

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.6-CA4245?style=flat-square&logo=react-router&logoColor=white)

### Build Tools

![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat-square&logo=vite&logoColor=white)

### Styling

![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.15-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-FF5F56?style=flat-square)
![React Icons](https://img.shields.io/badge/React_Icons-5.5.0-8A2BE2?style=flat-square&logo=react&logoColor=white)

### Internationalization

![i18next](https://img.shields.io/badge/i18next-25.6.0-26A69A?style=flat-square&logo=i18next&logoColor=white)
![react-i18next](https://img.shields.io/badge/react_i18next-16.1.3-26A69A?style=flat-square)

### Utilities

![EmailJS](https://img.shields.io/badge/EmailJS-4.4.1-4285F4?style=flat-square&logo=email&logoColor=white)
![React Toastify](https://img.shields.io/badge/React_Toastify-11.0.5-DD4B39?style=flat-square)
![React Helmet](https://img.shields.io/badge/React_Helmet_Async-2.0.5-6B4FBB?style=flat-square&logo=react-helmet&logoColor=white)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**/**pnpm**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Mahmoud-Saadaoui/personal-portfolio.git
cd personal-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# EmailJS Configuration (optional - for contact form)
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

> Get your EmailJS credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/)

4. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run type-check` | Run TypeScript type checking |

---

## Project Structure

```
personal-portfolio/
├── public/                     # Static assets served directly
│   └── favicon.png            # Site favicon
│
├── src/
│   ├── assets/                # Images and media files
│   │   └── profile.png        # Profile image
│   │
│   ├── components/            # React components
│   │   ├── common/           # Reusable shared components
│   │   │   ├── Button.jsx    # Custom button component
│   │   │   ├── Card.jsx      # Card container component
│   │   │   ├── Dropdown.jsx  # Dropdown menu component
│   │   │   ├── ErrorBoundary.jsx # Error handling
│   │   │   ├── Heading.jsx   # Page heading component
│   │   │   ├── LazyImage.jsx # Lazy-loaded image
│   │   │   ├── Loading.jsx   # Loading spinner
│   │   │   ├── Meta.jsx      # SEO meta tags
│   │   │   └── Skeleton.jsx  # Loading skeleton
│   │   │
│   │   ├── contact/          # Contact form components
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ContactInput.jsx
│   │   │   └── ContactTextarea.jsx
│   │   │
│   │   ├── features/         # Feature components
│   │   │   ├── Language.jsx  # Language switcher
│   │   │   └── Theme.jsx     # Theme toggle
│   │   │
│   │   └── layout/           # Layout components
│   │       ├── Header.jsx    # Navigation header
│   │       └── Footer.jsx    # Site footer
│   │
│   ├── config/               # Configuration files
│   │   └── i18n.js          # i18next configuration
│   │
│   ├── data/                 # Static data
│   │   ├── data.about.js    # About section data
│   │   ├── data.navbar.js   # Navigation & languages
│   │   ├── data.projects.js # Projects data
│   │   └── data.skills.js   # Skills data
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useContactForm.js # Contact form logic
│   │   ├── useTheme.js      # Theme management
│   │   └── useClickOutside.js # Click outside detector
│   │
│   ├── layouts/              # Page layouts
│   │   └── MainLayout.jsx   # Main layout wrapper
│   │
│   ├── locales/              # Translation files
│   │   ├── en.json          # English translations
│   │   ├── fr.json          # French translations
│   │   └── ar.json          # Arabic translations
│   │
│   ├── pages/                # Page components
│   │   ├── HomePage.jsx
│   │   ├── SkillsPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ProjectDetailsPage.jsx
│   │   └── ContactPage.jsx
│   │
│   ├── services/             # External services
│   │   └── emailjs.js       # EmailJS configuration
│   │
│   ├── styles/               # Additional styles
│   │   └── design-tokens.css # CSS design tokens
│   │
│   ├── utils/                # Utility functions
│   │   └── variants.js      # Framer Motion variants
│   │
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles & CSS variables
│
├── .env.example             # Environment variables template
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── index.html               # HTML template
├── package.json             # Project dependencies
├── README.md                # This file
├── vite.config.js           # Vite configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

---

## Customization

### Update Personal Information

#### 1. Edit Profile Data

**File**: `src/data/data.about.js`

```javascript
export const socials = [
  { name: "github", icon: FaGithub, link: "https://github.com/yourusername" },
  { name: "linkedin", icon: FaLinkedin, link: "https://linkedin.com/in/yourprofile" },
  // Add more social links
];
```

#### 2. Update Projects

**File**: `src/data/data.projects.js`

```javascript
export const projects = [
  {
    id: 1,
    key: "myProject", // Translation key in locales/*.json
    image: "/path/to/image.png",
    liveDemo: "https://myproject.com",
    github: "https://github.com/username/repo",
    language: "javascript", // For filtering
    techStack: ["React", "Node.js", "MongoDB"]
  }
];
```

#### 3. Update Skills

**File**: `src/data/data.skills.js`

```javascript
export const skillsKeys = [
  { key: "capabilities.frontend" },
  { key: "capabilities.backend" },
  // Add more skill categories
];
```

#### 4. Update Translations

**Files**: `src/locales/en.json`, `src/locales/fr.json`, `src/locales/ar.json`

```json
{
  "navbar": {
    "about": "About",
    "skills": "Skills",
    "projects": "Projects",
    "contact": "Contact"
  },
  "about": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio description..."
  }
}
```

### Update Theme Colors

**File**: `src/styles/design-tokens.css`

```css
:root {
  /* Primary Brand Colors */
  --color-primary: #4F46E5;      /* Indigo */
  --color-primary-hover: #4338CA;

  /* Accent Colors */
  --color-accent: #06B6D4;       /* Cyan */

  /* Add more colors... */
}
```

### Add a New Language

1. **Create translation file**

Create `src/locales/es.json` (for Spanish):

```json
{
  "navbar": {
    "about": "Sobre mí",
    "skills": "Habilidades",
    "projects": "Proyectos",
    "contact": "Contacto"
  }
}
```

2. **Import and add to i18n config**

**File**: `src/config/i18n.js`

```javascript
import es from "../locales/es.json";

i18n.init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar },
    es: { translation: es }, // Add this
  }
});
```

3. **Add language to navbar**

**File**: `src/data/data.navbar.js`

```javascript
export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "es", label: "Español" }, // Add this
];
```

---

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and click "New Project"
3. Import your repository
4. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Run `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Environment Variables

Make sure to add your environment variables in your hosting platform:

| Variable | Description |
|----------|-------------|
| `VITE_SERVICE_ID` | EmailJS service ID |
| `VITE_TEMPLATE_ID` | EmailJS template ID |
| `VITE_PUBLIC_KEY` | EmailJS public key |

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## FAQ

### How do I change the default language?

Edit `src/config/i18n.js` and change the `fallbackLng` value:

```javascript
fallbackLng: "fr", // Change to your preferred language
```

### How do I disable the contact form?

Simply remove the EmailJS environment variables or delete the contact form component.

### Can I use this portfolio for free?

Yes! This project is open-source under the MIT License. Feel free to use it for your own portfolio.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

**Mahmoud Saadaoui**

- GitHub: [@Mahmoud-Saadaoui](https://github.com/Mahmoud-Saadaoui)
- LinkedIn: [saadaoui-mahmoud](https://linkedin.com/in/saadaoui-mahmoud)
- Email: [contact.saadaouimahmoud@gmail.com](mailto:contact.saadaouimahmoud@gmail.com)

---

## Acknowledgments

- [React](https://react.dev/) - The library for web and native user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library for React
- [EmailJS](https://www.emailjs.com/) - Send emails from client-side JavaScript
- [React Icons](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects

---

<div align="center">

**Built with ❤️ by Mahmoud Saadaoui**

[⬆ Back to Top](#-mahmoud-saadaoui---personal-portfolio)

</div>
