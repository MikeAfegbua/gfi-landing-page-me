# GFI Landing Page

Landing page for **Global Financial Innovation (GFI)** — a fintech platform offering cross-border payments, currency conversion, and financial products across Africa and emerging markets.

## Overview

This is a single-page marketing site built with React and Vite. It showcases the GFI product, highlights key features (P2P transfers, multi-currency support), presents the team, collects waitlist sign-ups, and hosts legal pages (Privacy Policy, Terms of Service).

## Tech Stack

| Layer          | Technology                                      |
| -------------- | ----------------------------------------------- |
| Framework      | React 19                                        |
| Build Tool     | Vite 7                                          |
| Styling        | Tailwind CSS 3 (Geist font)                     |
| Animations     | Framer Motion                                   |
| Routing        | React Router v7                                 |
| Icons          | Lucide React                                    |
| Linting        | ESLint 9                                        |
| Formatting     | Prettier                                        |
| Deployment     | Vercel (SPA rewrite rules in `vercel.json`)     |
| Backend API    | External waitlist API (Railway)                  |

## Project Architecture

```
src/
├── main.jsx                  # App entry point
├── App.jsx                   # Router setup, global layout (Navbar + Footer)
├── index.css                 # Global styles & Tailwind directives
│
├── pages/
│   ├── Home.jsx              # Main landing page (composes all sections)
│   ├── Privacy.jsx           # Privacy Policy page
│   └── Terms.jsx             # Terms of Service page
│
├── components/
│   ├── Navbar.jsx            # Site navigation
│   ├── Hero.jsx              # Hero banner with waitlist email capture
│   ├── Introduction.jsx      # Product introduction section
│   ├── Features.jsx          # Key features (P2P, multi-currency flags)
│   ├── ForEveryone.jsx       # Target audience carousel (students, SMEs, etc.)
│   ├── GettingStarted.jsx    # How-it-works steps
│   ├── Reviews.jsx           # User testimonials
│   ├── MeetTheTeam.jsx       # Team member profiles
│   ├── Waitlist.jsx          # Waitlist sign-up form
│   ├── Footer.jsx            # Site footer
│   └── ScrollToTop.jsx       # Scrolls to top on route change
│
├── services/
│   └── waitlistService.js    # API client for waitlist endpoint
│
└── assets/
    └── images/               # Static images (mockups, flags, team photos)
```

### Routing

| Path       | Page              |
| ---------- | ----------------- |
| `/`        | Home              |
| `/privacy` | Privacy Policy    |
| `/terms`   | Terms of Service  |

All routes share a common `Navbar` and `Footer`. Vercel is configured to rewrite all paths to `/` for client-side routing.

### Data Flow

The site is mostly static content. The only external interaction is the **waitlist sign-up**, which sends a `POST` request to the GFI backend API (`/api/v1/waitlist`) via `waitlistService.js`. The email capture form appears in both the `Hero` and `Waitlist` components.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Deployment

The project is configured for **Vercel** with SPA fallback rewrites in `vercel.json`. Push to the connected branch to trigger automatic deploys.
