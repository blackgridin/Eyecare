# VisionCare Eye Clinic

A modern, responsive website for VisionCare Eye Clinic - providing comprehensive eye care services with over 16 years of excellence.

## Overview

VisionCare Eye Clinic is a professional healthcare website built to showcase premium eye care services, facilitate appointment bookings, and provide essential information to patients. The site features a clean, accessible design optimized for both desktop and mobile devices.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Appointment Booking**: WhatsApp integration for instant appointment scheduling
- **Service Information**: Comprehensive details about eye care services
- **Doctor Profiles**: Information about medical professionals
- **Contact Integration**: Multiple contact methods including emergency support
- **Accessibility**: WCAG compliant design for all users

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **State Management**: TanStack Query
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd eye
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Landing section
│   ├── AboutSection.tsx# About clinic information
│   ├── ServicesSection.tsx # Services offered
│   ├── DoctorsSection.tsx  # Medical team
│   ├── ContactSection.tsx  # Contact information
│   └── Footer.tsx      # Site footer
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## Deployment

Build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For technical support or inquiries about the website, please contact the development team.