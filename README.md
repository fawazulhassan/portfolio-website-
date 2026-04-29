# MERN.Dev Portfolio — React Edition

A modern, fully responsive portfolio website built with React, Tailwind CSS, and Vite. Showcasing full-stack (MERN) development expertise with a sleek dark theme and neon accents.

## 🎨 Features

- **Responsive Design**: Perfectly optimized for mobile, tablet, and desktop
- **Dark Theme**: Always-on dark mode with electric blue and purple neon accents
- **Component-Based Architecture**: Modular, reusable React components
- **Smooth Animations**: CSS-based animations for performance
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Mobile Menu**: Hamburger navigation for small screens
- **Accessibility**: Semantic HTML and ARIA labels

## 📁 Project Structure

```
src/
├── pages/
│   └── Home.jsx                 # Main page
├── components/
│   ├── Shared/
│   │   ├── Navbar.jsx          # Navigation bar with hamburger
│   │   └── Footer.jsx          # Footer section
│   └── Home/
│       ├── Hero.jsx            # Hero section
│       ├── Projects.jsx        # Projects carousel
│       ├── Technologies.jsx    # Skills & tech stack
│       ├── Services.jsx        # Service offerings
│       ├── About.jsx           # Timeline section
│       └── Cta.jsx             # Call-to-action section
├── hooks/
│   └── useToggle.js            # Mobile menu toggle hook
├── styles/
│   └── global.css              # Global styles & Tailwind directives
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd portfolio-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Build & Deploy

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🎯 Responsive Breakpoints

- **Mobile**: Default (≤ 767px)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

## 🎨 Design System

### Colors

Primary palette includes:
- **Primary**: Electric Blue (#00d2ff)
- **Secondary**: Vivid Purple (#3e23ce)
- **Surface**: Deep Navy (#0d1322)

See `tailwind.config.js` for all 40+ design tokens.

### Typography

- **Font**: Inter (loaded from Google Fonts)
- **Hierarchy**: display-lg, headline-md, headline-sm, body-lg, body-md, label-sm

## 📱 Mobile Features

- Responsive hamburger menu
- Touch-friendly navigation
- Optimized image loading
- Smooth scroll behavior (CSS-only)

## 🔗 External Resources

- **Fonts**: Google Fonts CDN (Inter)
- **Icons**: Material Symbols (Google)
- **Profile Images**: Google-hosted URLs (flagged for future replacement)

## ⚠️ Notes

- Google-hosted images are used for profile and project screenshots. These may become unavailable without notice — plan for replacement in a future asset-management pass.
- Dark mode is permanently enabled (`class="dark"` on `<html>`)
- No external routing library is used (single-page application)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the MIT License.
