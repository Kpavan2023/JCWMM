# JCWMM Official Website — README

> **Jesus Christ Word Miracles Ministry**
> *Sharing God's Word • Transforming Lives • Walking in Faith*

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Live Features](#live-features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Environment Variables](#environment-variables)
7. [Pages & Routes](#pages--routes)
8. [Component Architecture](#component-architecture)
9. [Database Schema](#database-schema)
10. [Deployment](#deployment)
11. [Customization Guide](#customization-guide)
12. [SEO & Metadata](#seo--metadata)
13. [Contributing](#contributing)
14. [License](#license)

---

## Project Overview

This is the **official production website** for Jesus Christ Word Miracles Ministry (JCWMM), a Spirit-filled, Word-centered church based in Hyderabad, Telangana, India, founded by **Prophet Judah Asher (Naresh)**.

The website is a fully featured, responsive, production-ready web application built with **Next.js 13 App Router**, **Tailwind CSS**, and **Supabase** as the backend. It serves as the digital home of the ministry — enabling the church to reach its congregation and new visitors through sermons, live streaming, events, prayer requests, and more.

---

## Live Features

| Feature | Description |
|---|---|
| **Animated Hero Section** | Fullscreen background, animated cross watermark, live service status badge, real-time Sunday/Saturday detection, stats counter |
| **About Section** | Church story, mission, vision, and 6 core beliefs |
| **Weekly Services** | Sunday Worship (11 AM) and Saturday Prayer (6 PM) cards |
| **Ministries** | 8 ministry cards: Children, Youth, Women, Men, Prayer, Choir, Evangelism, Outreach |
| **Prophet Profile** | Prophet Judah Asher's photo, bio, and welcome message |
| **Bible Verse Rotator** | Auto-cycling carousel of 7 scripture verses with manual controls |
| **Sermons Archive** | 6 real YouTube video cards with thumbnails, search, and category filters |
| **Live Stream / Countdown** | Detects live service window; shows real-time countdown to next Sunday otherwise |
| **Events** | Featured event hero + event grid cards |
| **Photo Gallery** | Masonry-grid photo gallery with category filter and lightbox viewer |
| **Testimonies Carousel** | Rotating testimonies from church members |
| **Prayer Request Form** | Full Supabase-backed form (name, email, phone, request) with success/error states |
| **Contact Section** | Phone, email, address, Google Maps embed, social media links |
| **Plan Your Visit Page** | Dedicated `/plan-your-visit` route with 4-step guide, 8 FAQ accordion, quick tips |
| **Loading Screen** | Animated splash screen with church logo and pulse dots |
| **Scroll Progress Bar** | Fixed top progress bar tracking page scroll position |
| **Back to Top Button** | Appears after 400px scroll, smooth scroll to top |
| **WhatsApp Float Button** | Pre-filled WhatsApp message link for instant contact |
| **Sticky Navbar** | Transparent-to-solid on scroll, mobile hamburger menu, dropdown, "Plan Your Visit" CTA |
| **Footer** | Full links, service times, contact info, social icons |
| **Section Reveal Animations** | IntersectionObserver-based fade-in-up animations for all sections |

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 13.5.1 | React framework, App Router, SSR/SSG |
| **React** | 18.2.0 | UI library |
| **TypeScript** | 5.2.2 | Type safety |
| **Tailwind CSS** | 3.3.3 | Utility-first CSS framework |
| **tailwindcss-animate** | 1.0.7 | Animation utilities |

### UI Components

| Technology | Version | Purpose |
|---|---|---|
| **shadcn/ui** | Latest | Base component library built on Radix UI |
| **Radix UI** | Various | Accessible headless component primitives |
| **lucide-react** | 0.446.0 | Icon library |
| **Embla Carousel** | 8.3.0 | Carousel/slider component |
| **class-variance-authority** | 0.7.0 | Variant-based class management |
| **clsx + tailwind-merge** | Latest | Conditional class composition |

### Backend & Database

| Technology | Version | Purpose |
|---|---|---|
| **Supabase** | 2.58.0 | PostgreSQL database, auth, real-time, storage |
| **@supabase/supabase-js** | 2.58.0 | Supabase JavaScript client |

### Fonts & Assets

| Resource | Source |
|---|---|
| **Poppins** | Google Fonts (headings: weights 300–900) |
| **Inter** | Google Fonts (body: weights 300–700) |
| **Stock Photos** | Pexels (free commercial license) |
| **Sermon Thumbnails** | YouTube `img.youtube.com` API |

### Dev & Build

| Tool | Purpose |
|---|---|
| **ESLint** | Code linting |
| **PostCSS** | CSS processing |
| **Netlify** | Deployment platform |

---

## Project Structure

```
jcwmm/
├── app/
│   ├── globals.css              # Global styles, CSS variables, custom animations
│   ├── layout.tsx               # Root layout — fonts, metadata, Open Graph, JSON-LD
│   ├── page.tsx                 # Homepage — assembles all section components
│   └── plan-your-visit/
│       └── page.tsx             # Plan Your Visit standalone page
│
├── components/
│   ├── plan-visit/
│   │   └── PlanVisitAccordion.tsx   # FAQ accordion component for Plan Your Visit
│   │
│   ├── sections/                    # Full-page section components (homepage)
│   │   ├── HeroSection.tsx          # Animated hero with live status + CTA
│   │   ├── AboutSection.tsx         # About, mission, vision, core beliefs
│   │   ├── ServicesSection.tsx      # Weekly service schedule cards
│   │   ├── MinistriesSection.tsx    # 8 ministry feature cards
│   │   ├── PastorSection.tsx        # Prophet Judah Asher profile + message
│   │   ├── BibleVerseSection.tsx    # Auto-rotating scripture verse carousel
│   │   ├── SermonsSection.tsx       # YouTube sermon archive with search/filter
│   │   ├── LiveStreamSection.tsx    # Live stream detector + countdown timer
│   │   ├── EventsSection.tsx        # Featured event + upcoming events grid
│   │   ├── GallerySection.tsx       # Masonry photo gallery + lightbox
│   │   ├── TestimoniesSection.tsx   # Member testimonies carousel
│   │   ├── PrayerSection.tsx        # Prayer request form (Supabase-backed)
│   │   └── ContactSection.tsx       # Contact info + Google Maps + social links
│   │
│   ├── shared/                      # Layout / persistent UI components
│   │   ├── Navbar.tsx               # Sticky header with scroll behavior
│   │   ├── Footer.tsx               # Site-wide footer
│   │   ├── LoadingScreen.tsx        # Animated splash/loading screen
│   │   ├── ScrollProgress.tsx       # Fixed scroll progress bar
│   │   ├── BackToTop.tsx            # Back-to-top floating button
│   │   ├── SectionReveal.tsx        # IntersectionObserver reveal wrapper
│   │   └── WhatsAppButton.tsx       # Floating WhatsApp CTA button
│   │
│   └── ui/                          # shadcn/ui primitives (accordion, button, etc.)
│
├── lib/
│   ├── church-data.ts               # All church content: info, sermons, events, verses...
│   └── utils.ts                     # Tailwind class merge utility
│
├── public/
│   ├── Logo_Jcwmm.jpeg              # Church logo (used in Navbar, LoadingScreen, Footer)
│   ├── Logo_Jcwmm copy.jpeg         # Logo variant
│   └── images/
│       └── image.png                # Prophet Judah Asher photo
│
├── supabase/
│   └── migrations/
│       └── create_prayer_requests.sql  # Database migration (applied via Supabase MCP)
│
├── .env                             # Environment variables (Supabase keys)
├── tailwind.config.ts               # Tailwind configuration (custom colors, fonts, animations)
├── next.config.js                   # Next.js configuration
├── tsconfig.json                    # TypeScript configuration
├── components.json                  # shadcn/ui configuration
└── netlify.toml                     # Netlify deployment configuration
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A Supabase project (already provisioned for this project)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
# The .env file is already pre-populated for this project.
# For a fresh setup, copy the example:
cp .env.example .env
# Then fill in your Supabase URL and anon key.

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm start
```

### Type Check

```bash
npm run typecheck
```

---

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public API key | Yes |

Both variables are prefixed with `NEXT_PUBLIC_` so they are accessible in the browser (client-side). They are intentionally public — Supabase Row Level Security (RLS) policies protect the data, not key secrecy.

---

## Pages & Routes

### `/` — Homepage

The main church homepage. A single-page application with 13 sections rendered in sequence. All sections use the `SectionReveal` component for scroll-triggered animations.

**Section Order:**
1. `HeroSection` — `#home`
2. `AboutSection` — `#about`
3. `ServicesSection` — `#services`
4. `MinistriesSection` — `#ministries`
5. `PastorSection` — `#pastor`
6. `BibleVerseSection` — `#verse`
7. `SermonsSection` — `#sermons`
8. `LiveStreamSection` — `#live`
9. `EventsSection` — `#events`
10. `GallerySection` — `#gallery`
11. `TestimoniesSection` — `#testimonies`
12. `PrayerSection` — `#prayer`
13. `ContactSection` — `#contact`

### `/plan-your-visit` — Plan Your Visit

A standalone page for first-time visitors. Contains:
- Hero section with service time bar
- 4-step visitor journey guide
- 8-question FAQ accordion
- What to bring checklist
- Call-to-action with directions, phone, and email links

---

## Component Architecture

### Design Pattern

All page-level components follow this pattern:

```
Server Component (page.tsx)
  └── Client Components (section components with 'use client')
        └── Shared utilities (SectionReveal, etc.)
              └── Data (church-data.ts — static, imported directly)
```

`app/page.tsx` and `app/plan-your-visit/page.tsx` are **Server Components** (no `'use client'` directive). Every section component declares `'use client'` because they use React hooks (`useState`, `useEffect`).

### SectionReveal

A lightweight IntersectionObserver wrapper that adds `visible` class when the element scrolls into view:

```tsx
<SectionReveal delay={200}>
  <YourContent />
</SectionReveal>
```

The `delay` prop (milliseconds) staggers animations for grid items.

### Data Layer

All content lives in `lib/church-data.ts` as typed TypeScript constants:

- `CHURCH_INFO` — name, address, contact, social links, service times
- `BIBLE_VERSES` — 7 scripture verses with references
- `MINISTRIES` — 8 ministry objects with icons and descriptions
- `SERMONS` — 6 real YouTube videos with thumbnails
- `SERMON_CATEGORIES` — filter options
- `EVENTS` — upcoming events with featured flag
- `GALLERY_IMAGES` — 12 photo entries with categories
- `GALLERY_CATEGORIES` — gallery filter options
- `TESTIMONIES` — 5 member testimonies
- `CORE_BELIEFS` — 6 theological beliefs

To update content, edit only this file — all components read from it.

---

## Database Schema

### Table: `prayer_requests`

Stores prayer request submissions from website visitors.

| Column | Type | Nullable | Default | Description |
|---|---|---|---|---|
| `id` | `uuid` | No | `gen_random_uuid()` | Primary key |
| `name` | `text` | No | — | Submitter's full name |
| `email` | `text` | Yes | `NULL` | Optional contact email |
| `phone` | `text` | Yes | `NULL` | Optional contact phone |
| `request` | `text` | No | — | The prayer request text |
| `created_at` | `timestamptz` | No | `now()` | Submission timestamp |

### Row Level Security Policies

| Policy | Operation | Role | Condition |
|---|---|---|---|
| `anyone_can_insert_prayer` | INSERT | `anon, authenticated` | `WITH CHECK (true)` |
| `admin_select_prayer` | SELECT | `authenticated` | `USING (true)` |
| `admin_update_prayer` | UPDATE | `authenticated` | `USING (true)` |
| `admin_delete_prayer` | DELETE | `authenticated` | `USING (true)` |

**Design rationale:** Any visitor can submit a prayer request without creating an account (public `INSERT`). Only authenticated users (church administrators) can read, update, or delete records (`authenticated`-only SELECT/UPDATE/DELETE).

---

## Deployment

This project is configured for **Netlify** deployment via `netlify.toml` and `@netlify/plugin-nextjs`.

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `.next`.
4. Add the environment variables in Netlify's dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy.

### Vercel (Alternative)

```bash
npm install -g vercel
vercel --prod
```

Vercel auto-detects Next.js. Add environment variables in the Vercel dashboard.

---

## Customization Guide

### Update Church Information

All church content is centralized in `lib/church-data.ts`:

```typescript
// Change any of these fields:
export const CHURCH_INFO = {
  name: 'Jesus Christ Word Miracles Ministry',
  contact: {
    phone1: '+91 98765 43210',
    email: 'jcwmm@gmail.com',
    whatsapp: '+919876543210',
  },
  social: {
    youtube: 'https://www.youtube.com/@JCWMMOFFICIAL',
    // ...
  },
};
```

### Add a New Sermon

Add an entry to the `SERMONS` array in `lib/church-data.ts`:

```typescript
{
  id: 7,
  title: 'Your Sermon Title',
  speaker: 'Prophet Judah Asher (Naresh)',
  date: '2025',
  scripture: 'John 3:16',
  category: 'Faith',                          // must match a SERMON_CATEGORIES entry
  thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg',
  youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
  duration: 'Full Message',
},
```

Replace `VIDEO_ID` with the YouTube video's 11-character ID from the URL.

### Add a New Event

Add an entry to the `EVENTS` array:

```typescript
{
  id: 5,
  title: 'Revival Night 2025',
  date: 'October 12, 2025',
  time: '6:00 PM – 10:00 PM',
  description: 'A powerful night of worship and healing...',
  image: 'https://images.pexels.com/photos/XXXXX/...',
  category: 'Revival',
  featured: false,
},
```

Set `featured: true` on at most one event to display it as the hero banner.

### Change the Color Scheme

The color system is defined in `tailwind.config.ts`. The primary palette:

```typescript
royal: {
  50:  '#eff6ff',  // lightest
  // ...
  900: '#1e3a8a',  // darkest
  950: '#172554',  // deepest (used for dark sections)
},
gold: {
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',  // primary gold
  600: '#d97706',
},
```

Gradient utilities are defined in `app/globals.css`:
- `.blue-gradient` — royal blue gradient (primary CTAs)
- `.gold-gradient` — warm gold gradient (accent CTAs)
- `.hero-gradient` — dark overlay for hero section

### Add a New Gallery Photo

Add an entry to `GALLERY_IMAGES` in `lib/church-data.ts`:

```typescript
{
  id: 13,
  src: 'https://images.pexels.com/photos/YOUR_PHOTO_ID/...',
  category: 'Worship',                // must match a GALLERY_CATEGORIES entry
  caption: 'Your Caption Here',
},
```

---

## SEO & Metadata

SEO is configured in `app/layout.tsx` using Next.js 13's `Metadata` API:

- **Title & Description** — Church name and ministry description
- **Open Graph** — `og:title`, `og:description`, `og:image`, `og:type: website`
- **Twitter Card** — `summary_large_image` card with logo
- **Favicon** — Church logo set as icon, shortcut, and Apple touch icon
- **JSON-LD Structured Data** — `schema.org/Church` type with name, address, URL, and `sameAs` social links

The Plan Your Visit page has its own metadata export for page-level SEO.

---

## Animations

### Custom CSS Animations (`app/globals.css`)

| Class | Effect | Duration |
|---|---|---|
| `.animate-float` | Smooth vertical floating | 6s |
| `.animate-fade-in-up` | Fade in from below | 0.8s |
| `.animate-fade-in` | Simple fade in | 0.6s |
| `.live-dot` | Pulsing glow ring (for LIVE badge) | 2s |
| `.cross-glow` | Alternating drop-shadow glow | 3s |
| `.scroll-indicator` | Bounce up/down | 2s |
| `.section-reveal` + `.visible` | Scroll-triggered fade-up | 0.7s |

### IntersectionObserver Pattern

`SectionReveal` uses a single `IntersectionObserver` per instance with a 10% threshold. Once the element enters the viewport, the `visible` class is added and the observer disconnects (fires once, not repeatedly).

---

## Browser Support

Targets modern evergreen browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

CSS features used: `backdrop-filter`, CSS custom properties, `aspect-ratio`, CSS Grid, CSS Columns (masonry), `IntersectionObserver` API.

---

## Known Warnings

The following build warnings are non-blocking:

- `Critical dependency: the request of a dependency is an expression` — Comes from `@supabase/realtime-js` internal webpack bundling. This is a known upstream issue in Supabase's realtime module. It does not affect functionality.
- `metadata.metadataBase is not set` — A Next.js 13 informational warning for OG image URL resolution in local dev. Does not affect production.

---

## License

This project is proprietary software developed exclusively for **Jesus Christ Word Miracles Ministry (JCWMM)**. All rights reserved.

Unauthorized reproduction, distribution, or modification of this codebase is prohibited without explicit written permission from JCWMM.

---

*Built with love for the glory of God.*
*Jesus Christ Word Miracles Ministry — Hyderabad, Telangana, India*
