# 🌟 Personal Portfolio

A modern, responsive, and multilingual portfolio website built with React, featuring a clean design, dark/light mode, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.15-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

### 🌍 Internationalization (i18n)
- **3 Languages**: English, French, and Arabic
- **RTL Support**: Full right-to-left layout for Arabic
- **Auto-detection**: Automatically detects browser language
- **Persistent**: Language preference saved in localStorage

### 🎨 Theme System
- **Dark/Light Mode**: Seamless theme switching
- **CSS Variables**: Consistent color system across the app
- **Persistent**: Theme preference saved in localStorage
- **Smooth Transitions**: Animated theme changes

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Modern UI**: Clean, professional design
- **Smooth Animations**: Framer Motion powered transitions
- **Glassmorphism**: Modern visual effects

### 🚀 Performance Optimized
- **React.memo**: Memoized components to prevent unnecessary re-renders
- **useCallback**: Optimized event handlers
- **Code Splitting**: Lazy loading for better performance
- **Vite**: Lightning-fast build tool

### 📄 Pages
- **Home**: Introduction and hero section
- **About**: Personal information and background
- **Projects**: Filterable project showcase with pagination
- **Skills**: Technical skills and expertise
- **Contact**: Contact form with EmailJS integration

### 📧 Contact Form
- **EmailJS Integration**: Send emails directly from the browser
- **File Upload**: Attach files (images, PDFs, documents)
- **Validation**: Real-time form validation
- **Toast Notifications**: User-friendly feedback
- **Character Counter**: Message length indicator

## 🛠️ Tech Stack

### Core
- **React 18.2** - UI library
- **Vite 7.1** - Build tool and dev server
- **React Router 7.9** - Client-side routing

### Styling
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Framer Motion 12.23** - Animation library
- **React Icons 5.5** - Icon library

### Internationalization
- **i18next 25.6** - Internationalization framework
- **react-i18next 16.1** - React bindings for i18next
- **i18next-browser-languagedetector 8.2** - Language detection

### Additional Libraries
- **EmailJS Browser 4.4** - Email service integration
- **React Toastify 11.0** - Toast notifications
- **React Helmet Async 2.0** - SEO meta tags management

## 📦 Installation

### Prerequisites
- Node.js
- npm or yarn

### Steps

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
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

> **Note**: Get your EmailJS credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/)

4. **Start the development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🚀 Build & Deployment

### Build for production
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview production build
```bash
npm run preview
```

## 📁 Project Structure

```
personal-portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   │   ├── common/    # Shared components (Meta, Heading, etc.)
│   │   ├── contact/   # Contact form components
│   │   ├── home/      # Home page components
│   │   ├── projects/  # Project components
│   │   └── skills/    # Skills components
│   ├── config/        # Configuration files
│   ├── data/          # Static data (projects, skills, etc.)
│   ├── hooks/         # Custom React hooks
│   ├── layouts/       # Layout components
│   ├── locales/       # Translation files (en, fr, ar)
│   ├── pages/         # Page components
│   ├── services/      # API services (EmailJS)
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main App component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles & CSS variables
├── .env.example       # Environment variables template
├── package.json       # Dependencies
├── vite.config.js     # Vite configuration
└── tailwind.config.js # Tailwind configuration
```

## 🎨 Customization

### Update Personal Information

1. **Edit data files** in `src/data/`:
   - `projects.js` - Your projects
   - `skills.js` - Your skills
   - `social.js` - Social media links

2. **Update translations** in `src/locales/`:
   - `en.json` - English translations
   - `fr.json` - French translations
   - `ar.json` - Arabic translations

3. **Modify theme colors** in `src/index.css`:
```css
:root {
  --color-primary: #your-color;
  --color-accent: #your-color;
  /* ... */
}
```

### Add a New Language

1. Create a new translation file in `src/locales/` (e.g., `es.json`)
2. Add the language to `src/config/i18n.js`:
```javascript
resources: {
  en: { translation: en },
  fr: { translation: fr },
  ar: { translation: ar },
  es: { translation: es }, // Add this
}
```
3. Update the language selector in `ChangeLanguage.jsx`

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mahmoud Saadaoui**

- GitHub: [@Mahmoud-Saadaoui](https://github.com/Mahmoud-Saadaoui)
- Email: contact.saadaouimahmoud@gmail.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Mahmoud-Saadaoui/personal-portfolio/issues).

---

<div align="center">
  Made with ❤️ by Mahmoud Saadaoui
</div>
