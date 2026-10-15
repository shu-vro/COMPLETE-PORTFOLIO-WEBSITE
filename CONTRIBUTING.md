# Contributing to COMPLETE-PORTFOLIO-WEBSITE

Thank you for your interest in contributing to this open-source portfolio website template! This is a Vite-powered portfolio site and contributions are welcome.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)

## Getting Started

1. **Fork** this repository
2. **Clone** your fork: `git clone https://github.com/YOUR-USERNAME/COMPLETE-PORTFOLIO-WEBSITE.git`
3. **Install** dependencies: `npm install`
4. **Start** the dev server: `npm run dev`

## Development Setup

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Running Locally

```bash
# Install dependencies
npm install

# Start Vite dev server with hot-reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## How to Contribute

### What We Welcome

- 🎨 **Design improvements** — Better animations, color schemes, layout tweaks
- 📱 **Responsiveness** — Fixes for mobile/tablet breakpoints
- ♿ **Accessibility** — ARIA labels, keyboard navigation, color contrast improvements
- 🐛 **Bug fixes** — Fix broken links, incorrect styles, or JS errors
- ✨ **New sections** — Skills, certifications, testimonials, blog section
- 📚 **Documentation** — Improve README, add setup instructions
- 🌐 **Internationalization** — Multi-language support

## Pull Request Process

1. Branch from `main`: `git checkout -b feat/your-feature`
2. Make focused, clean commits
3. Test across major browsers (Chrome, Firefox, Safari)
4. Test responsiveness at mobile (375px), tablet (768px), and desktop (1440px)
5. Submit PR with:
   - Clear description of changes
   - Screenshots for visual changes
   - Before/after comparison if modifying existing UI

### Commit Message Format

- `feat: add skills progress bar section`
- `fix: correct mobile nav overflow on small screens`
- `style: improve hero section gradient for dark mode`
- `docs: add portfolio customization guide to README`

## Code Style

- Write **semantic HTML5** elements (use `<section>`, `<article>`, `<nav>` appropriately)
- Use **CSS custom properties** (`--variable-name`) for consistent theming
- Keep JavaScript **modular** — separate concerns into small focused functions
- Avoid inline styles — use CSS classes or Vite-processed stylesheets
- Ensure all images have descriptive `alt` attributes

---

Happy building! 🚀