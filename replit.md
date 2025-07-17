# Replit.md - Aperture Science Portal-themed Website

## Overview

This is a full-stack Portal fan site built with React + TypeScript frontend and Express backend, featuring an immersive Aperture Science website. The application includes a responsive user interface with authentic Portal game aesthetics, animated slideshow hero section, framer-motion animations, enhanced navigation, and a comprehensive gallery system. The project uses modern web technologies including Vite for development, Tailwind CSS with Portal-specific colors, shadcn/ui components, and serves assets from a dedicated CDN-style folder structure.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with hot module replacement
- **Styling**: Tailwind CSS with Portal-themed custom CSS variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Theme**: Dark Portal-themed design with blue/orange color scheme

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage with plans for PostgreSQL sessions
- **API Design**: RESTful API with JSON responses
- **Development**: Hot reloading with tsx

## Key Components

### Frontend Components
- **Navigation**: Fixed horizontal navbar with framer-motion animations and mobile-responsive menu
- **Hero Section**: Animated slideshow with Portal facility images and smooth transitions
- **Theme**: Portal-inspired design with grid backgrounds, scanline effects, and GLaDOS messaging
- **Sections**: Home with hero slideshow, About with company stats, Enhanced Image Gallery with search and modal, Technical Info with animations
- **Interactive Elements**: GLaDOS quote system, sound controls, modal image gallery, and animated UI elements
- **Mobile Support**: Responsive design with mobile-first approach and touch-friendly controls
- **Animations**: Framer-motion powered page transitions and scroll-triggered animations

### Backend Components
- **API Routes**: Health check, authentication, and gallery endpoints
- **Storage Layer**: Abstract storage interface with in-memory implementation
- **Static Assets**: Express static middleware for serving images and files
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Drizzle Integration**: Type-safe database operations with Zod validation
- **Migration Support**: Database schema versioning with drizzle-kit

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle HTTP requests and responses
3. **Business Logic**: Storage layer abstracts database operations
4. **Database**: PostgreSQL with Drizzle ORM for data persistence
5. **Response**: JSON responses with proper error handling

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, TypeScript, Vite
- **Styling**: Tailwind CSS with Portal colors (apertureOrange, apertureTeal, apertureGray), PostCSS, Autoprefixer
- **Components**: Radix UI primitives, Lucide React icons
- **State**: TanStack Query, Wouter router
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer-motion for page transitions and scroll animations
- **Fonts**: Orbitron for Portal-themed typography
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Dependencies
- **Server**: Express.js, Node.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite, esbuild for production builds
- **Database**: drizzle-kit for migrations
- **Replit**: Custom plugins for development environment

## Deployment Strategy

### Development Mode
- **Frontend**: Vite dev server with HMR on client folder
- **Backend**: tsx with Node.js for hot reloading
- **Database**: Requires DATABASE_URL environment variable
- **Integration**: Vite middleware integration with Express

### Production Build
- **Frontend**: Vite builds to dist/public directory
- **Backend**: esbuild bundles server to dist/index.js
- **Static Files**: Express serves built frontend files
- **Database**: PostgreSQL connection via environment variables

### Environment Setup
- **Required**: DATABASE_URL for PostgreSQL connection
- **Optional**: NODE_ENV for environment-specific behavior
- **Replit**: Integrated development environment support

## Recent Changes (Latest Update)

### Enhanced Portal Fan Site Implementation
- **Hero Slideshow**: Added animated hero section with Portal facility images and smooth transitions
- **Improved Navigation**: Replaced sidebar with modern horizontal navbar featuring framer-motion animations
- **Enhanced Gallery**: Added search functionality and modal image viewer with zoom effects
- **Better Animations**: Implemented scroll-triggered animations throughout all sections
- **Portal Colors**: Added authentic Portal color scheme (apertureOrange #FF6600, apertureTeal #00B3B3)
- **Typography**: Integrated Orbitron font for Portal-themed headers
- **Asset Structure**: Created organized assets folder with audio, images, and fonts directories
- **Sound System**: Enhanced audio playback with proper fallback handling
- **SEO Improvements**: Added meta tags and proper page titles

The application is now a comprehensive Portal fan site with immersive animations and authentic Portal game aesthetics, ready for users to add their own Portal-themed assets in the assets folder.