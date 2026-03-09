# Ahmed Salem — AI & Data Engineer Portfolio

## Overview
A professional, dark-themed portfolio website for Ahmed Salem, an AI & Data Engineering student at Mansoura University. Features a minimalist high-tech aesthetic with neon teal/blue accents.

## Architecture
- **Frontend:** React + Vite + TypeScript + TailwindCSS + shadcn/ui
- **Backend:** Express.js with in-memory storage
- **Routing:** Wouter (frontend), Express (backend API)
- **Forms:** React Hook Form + Zod validation
- **Queries:** TanStack React Query

## Pages & Components
- `client/src/pages/Home.tsx` — Main portfolio page
- `client/src/components/Navbar.tsx` — Sticky navigation with smooth scrolling
- `client/src/components/HeroSection.tsx` — Hero with animated floating tags
- `client/src/components/SkillsSection.tsx` — Skills grouped by category with progress bars
- `client/src/components/ProjectsSection.tsx` — 3 project cards (Sentiment, RAG chatbot, Scraper)
- `client/src/components/ExperienceSection.tsx` — Timeline of freelance & academic experience
- `client/src/components/ContactSection.tsx` — Contact form + social links
- `client/src/components/Footer.tsx` — Footer with social links

## API Endpoints
- `POST /api/contact` — Submit contact form message
- `GET /api/contact` — Retrieve all contact messages

## Design Tokens
- Dark theme always-on (`.dark` class applied at page level)
- Primary: neon teal `hsl(174 100% 42%)`
- Accent: cyan-blue `hsl(196 100% 48%)`
- Background: deep dark navy `hsl(220 25% 7%)`
- Custom utilities: `gradient-text`, `neon-glow`, `neon-border`, `grid-bg`
- Font: Space Grotesk (sans), JetBrains Mono (mono)

## Running
```
npm run dev
```
