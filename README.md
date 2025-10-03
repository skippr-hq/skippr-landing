# Skippr Landing Page

A modern, responsive landing page for Skippr - Your Full AI Product Team.

## Features

- **Modern Design**: Dark theme with glassmorphism effects and gradient accents
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Latest Tech Stack**: Built with Vite, React, TypeScript, and Tailwind CSS
- **Component Architecture**: Modular React components using shadcn/ui
- **Smooth Animations**: Hover effects and smooth scrolling
- **Performance Optimized**: Fast loading and optimized build

## Tech Stack

- **Vite** - Next-generation frontend build tool
- **React 18** - UI library with modern hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework with latest Vite plugin
- **shadcn/ui** - High-quality accessible UI components
- **Lucide React** - Beautiful & consistent icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header with mobile menu
│   ├── Hero.tsx         # Hero section with main messaging
│   ├── RealityCheck.tsx # Human vs AI team comparison
│   ├── AIAgents.tsx     # 7 AI expert agents showcase
│   ├── HowItWorks.tsx   # Dual approach explanation
│   ├── Integration.tsx  # IDE integration showcase
│   ├── Results.tsx      # Metrics and testimonials
│   ├── Pricing.tsx      # 4-tier pricing cards
│   ├── FinalCTA.tsx     # Final call-to-action
│   └── Footer.tsx       # Site footer
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## Features Implemented

- ✅ Responsive navigation with mobile hamburger menu
- ✅ Hero section with gradient text effects
- ✅ Comparison section (Human vs AI teams)
- ✅ AI agents showcase with hover animations
- ✅ How it works dual approach explanation
- ✅ IDE integration code examples
- ✅ Results metrics and testimonials
- ✅ 4-tier pricing section with recommended badge
- ✅ Final call-to-action section
- ✅ Glassmorphism and gradient effects
- ✅ Smooth scrolling and animations
- ✅ Dark theme with purple/fuchsia accents
- ✅ Custom fonts (Inter & Space Grotesk)

## Design System

- **Colors**: Dark theme with fuchsia/purple gradients
- **Typography**: Inter (body) and Space Grotesk (headings)
- **Effects**: Glassmorphism, gradients, and smooth transitions
- **Layout**: Container-based responsive design
- **Components**: shadcn/ui for consistent, accessible UI

## License

Private project - All rights reserved.
