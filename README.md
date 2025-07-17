# Cool Gork Page - Aperture Science Fan Site

This project is a modern, responsive, interactive web app themed around Aperture Science from the Portal video game universe. It is built with React, Vite, TailwindCSS, React Router, and Framer Motion.

## Features

- React functional components with componentized structure
- TailwindCSS for styling with Portal-themed colors and typography
- React Router for client-side routing
- Dark mode toggle with localStorage persistence
- Image gallery with search, hover animations, and modal viewer
- Page transitions and animations using Framer Motion
- Mock login button triggering a GLaDOS quote
- Sound and tooltip elements triggered by hover (to be added)
- JSON-driven content for easy updates
- Accessible and responsive design

## Folder Structure

- `/src/components` - Reusable UI components (Navbar, DarkModeToggle, LoginButton, Modal, Tooltip)
- `/src/pages` - Page components (Home, About, Info, ImageGallery)
- `/src/data` - JSON content files (aboutContent.json, images.json, infoContent.json)
- `/src/assets` - Images and audio assets
- `/public` - Public static files
- `tailwind.config.js` - TailwindCSS configuration
- `vite.config.js` - Vite configuration

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Build

To build the project for production:

```bash
npm run build
```

## Notes

- Dark mode preference is saved in localStorage.
- The mock login button triggers a GLaDOS quote popup.
- Image gallery supports search and modal viewing with animations.
- Page transitions use Framer Motion for smooth effects.
- Sound effects and tooltips will be added in future updates.

## License

This project is fan-made and for educational purposes only. It does not use any copyrighted Portal assets.
