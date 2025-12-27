# MicroBNG Landing Page

A modern, high-performance landing page for MicroBNG - a software-defined Broadband Network Gateway powered by VPP and DPDK. This project showcases MicroBNG's capabilities as a cloud-native alternative to traditional hardware BNG solutions for Internet Service Providers (ISPs).

## Overview

MicroBNG is a virtual BNG solution designed to help ISPs scale to millions of users while reducing infrastructure costs by up to 70%. This landing page serves as the primary marketing and customer acquisition platform, featuring interactive demos, customer testimonials, pricing information, and integrated scheduling for product demonstrations.

## Target Audience

- Internet Service Providers (ISPs)
- Telecommunications companies
- Network infrastructure decision-makers
- CTOs and VPs of Engineering in the telecom sector
- Network architects evaluating BNG solutions

## Technology Stack

### Framework
- **Next.js 16.1.1** - React framework with App Router for server-side rendering and optimal performance
- **React 19** - Latest React version with improved rendering and concurrent features
- **TypeScript** - Type-safe development for enhanced code quality

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework for responsive design
- **Custom CSS** - Hand-crafted animations and glassmorphism effects

### UI Components
- **Radix UI** - Accessible, unstyled component primitives for Badge and other interactive elements
- **Lucide React** - Icon library for consistent, scalable iconography

### Integrations
- **Calendly** - Embedded scheduling widget for demo bookings
- **Vercel** - Deployment and hosting platform

### Development Tools
- **ESLint** - Code linting with Next.js configuration
- **PostCSS** - CSS processing and optimization

## Project Structure

```
BNG/
├── microbng/                    # Main Next.js application
│   ├── app/                     # Next.js App Router directory
│   │   ├── fonts/              # Custom font files
│   │   ├── globals.css         # Global styles and custom CSS
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Homepage with all sections
│   ├── components/
│   │   ├── landing/            # Landing page sections
│   │   │   ├── About.tsx       # About section
│   │   │   ├── Architecture.tsx # Architecture comparison
│   │   │   ├── CalendlySection.tsx # Demo scheduling
│   │   │   ├── CTA.tsx         # Call-to-action section
│   │   │   ├── Features.tsx    # Feature highlights
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   ├── Hero.tsx        # Hero section with metrics
│   │   │   ├── Navigation.tsx  # Main navigation
│   │   │   ├── Pricing.tsx     # Pricing tiers
│   │   │   ├── Scalability.tsx # Scalability showcase
│   │   │   ├── Testimonials.tsx # Customer testimonials
│   │   │   ├── UseCases.tsx    # Use case scenarios
│   │   │   └── WhyMicroBNG.tsx # Value proposition
│   │   └── ui/                 # Reusable UI components
│   │       ├── badge.tsx       # Badge component
│   │       └── glass-button.tsx # Glassmorphism button
│   ├── hooks/                  # Custom React hooks
│   │   ├── useCountUp.ts       # Animated number counter
│   │   └── useScrollAnimation.ts # Scroll-based animations
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── public/                 # Static assets
│   ├── .eslintrc.json         # ESLint configuration
│   ├── next.config.ts         # Next.js configuration
│   ├── package.json           # Dependencies and scripts
│   ├── postcss.config.mjs     # PostCSS configuration
│   ├── tailwind.config.ts     # Tailwind CSS configuration
│   └── tsconfig.json          # TypeScript configuration
├── vercel.json                # Vercel deployment configuration
└── README.md                  # Project documentation
```

## Key Features

### Design & UX
- Fully responsive design optimized for mobile, tablet, and desktop
- Glassmorphism UI effects with smooth animations
- Scroll-triggered animations for engaging user experience
- Dark theme with neon green (#39ff14) accent color

### Sections
- **Hero**: Animated metrics showcasing key value propositions
- **About**: Company introduction and mission
- **Architecture**: Side-by-side comparison of traditional vs. cloud BNG
- **Features**: Core product capabilities
- **Testimonials**: Customer success stories with infinite scroll carousel
- **Scalability**: Performance benchmarks and scaling capabilities
- **Pricing**: Transparent pricing tiers
- **Why MicroBNG**: Competitive advantages
- **Use Cases**: Industry-specific applications
- **CTA**: Call-to-action with demo scheduling
- **Calendly Integration**: Embedded scheduling for free demos

### Performance Optimizations
- Server-side rendering for faster initial page loads
- Optimized images and assets
- Custom CSS animations using GPU acceleration
- Lazy loading for off-screen content

## Local Development Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/reachvivek/microbng-landing.git
cd microbng-landing
```

2. Navigate to the application directory:
```bash
cd microbng
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

The page will automatically reload when you make changes to the source files.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

### Linting

To check code quality and adherence to standards:

```bash
npm run lint
```

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file specifies the build configuration for the monorepo structure.

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Next.js framework
3. Deploy with zero configuration required

The build configuration automatically:
- Installs dependencies from the `microbng` directory
- Runs the build process
- Outputs the static files for deployment

## Environment Variables

No environment variables are required for basic functionality. If integrating analytics or other services, create a `.env.local` file in the `microbng` directory.

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Contributing

This is a commercial project for Nix Route Technologies. For bug reports or feature requests, please contact the development team.

## Credits

**Developer**: Vivek Singh
- LinkedIn: [linkedin.com/in/reachvivek](https://linkedin.com/in/reachvivek)
- Portfolio: [reachvivek.vercel.app](https://reachvivek.vercel.app)

**Company**: Nix Route Technologies

## License

Copyright (c) 2025 Nix Route Technologies. All rights reserved.

This project is proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without explicit permission from Nix Route Technologies.

## Contact

For inquiries about MicroBNG or this landing page:
- Email: asad@nixroute.aw
- Schedule a demo: [Calendly](https://calendly.com/nixroutetechnologies/new-meeting)

---

**Note**: This landing page is designed to showcase MicroBNG's capabilities and facilitate customer acquisition for ISPs seeking modern, scalable BNG solutions.
