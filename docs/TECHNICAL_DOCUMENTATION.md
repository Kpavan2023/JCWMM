# JCWMM Website — Full Technical Documentation

**Project:** Jesus Christ Word Miracles Ministry Official Website
**Version:** 1.0.0
**Author:** Built for JCWMM, Hyderabad, Telangana, India
**Document Type:** Full Technical Documentation — Methodology, Architecture, Design, and Implementation

---

## Table of Contents

1. [Project Background & Objectives](#1-project-background--objectives)
2. [Design Methodology](#2-design-methodology)
3. [Technology Stack — In Depth](#3-technology-stack--in-depth)
4. [System Architecture](#4-system-architecture)
5. [Frontend Architecture](#5-frontend-architecture)
6. [Component Catalogue](#6-component-catalogue)
7. [Data Architecture](#7-data-architecture)
8. [Database Design](#8-database-design)
9. [Routing & Navigation](#9-routing--navigation)
10. [Styling System](#10-styling-system)
11. [Animation System](#11-animation-system)
12. [SEO & Structured Data](#12-seo--structured-data)
13. [Performance Considerations](#13-performance-considerations)
14. [Accessibility (a11y)](#14-accessibility-a11y)
15. [Security Architecture](#15-security-architecture)
16. [Deployment Architecture](#16-deployment-architecture)
17. [Content Management Guide](#17-content-management-guide)
18. [Known Limitations & Future Roadmap](#18-known-limitations--future-roadmap)
19. [File Reference](#19-file-reference)

---

## 1. Project Background & Objectives

### 1.1 About the Ministry

**Jesus Christ Word Miracles Ministry (JCWMM)** is a Spirit-filled, Word-centered church founded in **Hyderabad, Telangana, India** around 2010 by **Prophet Judah Asher (Naresh)**. The ministry holds weekly services — Sunday Worship (11 AM–1 PM) and Saturday Prayer (6 PM–8 PM) — and operates eight active ministries serving children, youth, women, men, prayer warriors, the worship team, evangelists, and community outreach workers.

### 1.2 Project Objectives

The website was designed to meet the following goals:

| # | Objective | Solution Implemented |
|---|---|---|
| 1 | Establish a professional digital presence for the church | Full-featured, production-quality website |
| 2 | Broadcast sermons and reach a wider audience | YouTube-integrated sermon archive with real video thumbnails |
| 3 | Enable online prayer request submission | Supabase-backed form with RLS-secured database |
| 4 | Inform new visitors about the church | Dedicated "Plan Your Visit" page with FAQ |
| 5 | Showcase the church's activities and community | Gallery, events, testimonies sections |
| 6 | Provide real-time service info | Live stream detector + countdown timer |
| 7 | Enable instant contact via WhatsApp | Floating WhatsApp button with pre-filled message |
| 8 | Be fast, mobile-friendly, and accessible | Responsive design, semantic HTML, ARIA labels |

---

## 2. Design Methodology

### 2.1 Design Philosophy

The visual design follows a **premium ecclesiastical aesthetic** — combining the dignity and gravitas appropriate for a place of worship with modern, engaging web design patterns. The core principles applied were:

- **Hierarchy** — Clear visual hierarchy using Poppins (headings) and Inter (body), three font weights maximum, and consistent spacing.
- **Contrast** — High-contrast text on all backgrounds, verified across transition states (transparent-to-solid navbar).
- **Spiritual Symbolism** — Deep royal blue (faith, loyalty, heaven) and warm gold (divine light, anointing, glory) as the primary palette.
- **Whitespace** — Generous section padding (96px vertical) to reduce cognitive load and let content breathe.
- **Motion with purpose** — Animations communicate meaning (scroll reveals show content arriving, live dot pulses to indicate activity, float animation conveys the divine).

### 2.2 Color System

The design uses a **6-ramp color system**:

| Ramp | Hex Range | Semantic Role |
|---|---|---|
| **Royal Blue** (`royal-50` → `royal-950`) | `#eff6ff` → `#172554` | Primary brand, CTAs, links, headings |
| **Gold** (`gold-50` → `gold-900`) | `#fffbeb` → `#78350f` | Accent, highlights, divinity motifs |
| **Neutral Gray** (Tailwind `gray-*`) | `#f9fafb` → `#111827` | Body text, borders, backgrounds |
| **Success Green** (Tailwind `green-*`) | Used for confirmation states |
| **Error Red** (Tailwind `red-*`) | Used for LIVE badge, error states |
| **Sky Blue** (Tailwind `sky-*`) | Used for Telegram social icon |

### 2.3 Typography Scale

```
Font Family:
  Headings → Poppins (Google Fonts, weights: 400, 600, 700, 800, 900)
  Body     → Inter  (Google Fonts, weights: 300, 400, 500, 600, 700)

Scale:
  Hero H1    → 4xl → 7xl  (clamp responsive)
  Section H2 → 4xl → 5xl
  Card H3    → xl → 2xl
  Body       → base (1rem / 1.5 line-height)
  Caption    → sm (0.875rem)
  Label      → xs (0.75rem) uppercase tracking-wider
```

### 2.4 8px Spacing System

All padding and gap values are multiples of 8px (Tailwind's default scale). Section vertical padding is `py-24` (96px). Card internal padding is `p-6` or `p-8` (24px/32px).

### 2.5 Layout Grid

- **Max width:** `max-w-7xl` (1280px) centered with auto horizontal margins
- **Column grid:** 1 → 2 → 3 → 4 columns at responsive breakpoints
- **Breakpoints used:** `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

### 2.6 Responsive Design

Every section is fully responsive:
- Single column on mobile
- Two columns on tablet (md)
- Three or four columns on desktop (lg/xl)
- Navbar collapses to hamburger on `< lg`
- Masonry gallery adjusts from 3 columns → 2 → 1

### 2.7 Design Inspiration

The design draws inspiration from:
- Leading megachurch websites (Elevation Church, Hillsong, Lakewood)
- Modern SaaS landing pages for clean whitespace usage
- Premium Indian hospitality brand aesthetics for warmth and color

---

## 3. Technology Stack — In Depth

### 3.1 Next.js 13 (App Router)

**Why Next.js?**
Next.js provides server-side rendering (SSR), static site generation (SSG), and the new App Router which enables React Server Components. For a church website with mostly static content but a dynamic prayer form, SSG is ideal — pages pre-render at build time for maximum performance.

**Key features used:**
- **App Router** (`app/` directory) — file-system routing with layouts
- **Server Components** — `page.tsx` files render on the server, reducing client JS bundle
- **Client Components** — all interactive sections declare `'use client'` at the top
- **`next/image`** — automatic image optimization, lazy loading, WebP conversion
- **`next/link`** — client-side navigation between pages
- **Metadata API** — `export const metadata` for SEO, Open Graph, Twitter Card

**Server vs. Client Component split:**
```
app/page.tsx                 → Server Component (no hooks, just imports)
app/plan-your-visit/page.tsx → Server Component (metadata export, static structure)
components/sections/*.tsx    → Client Components ('use client' — use useState/useEffect)
components/shared/*.tsx      → Client Components ('use client' — interactive)
components/plan-visit/*.tsx  → Client Component ('use client' — accordion state)
```

### 3.2 TypeScript

All files are written in TypeScript. Interfaces are defined inline where needed. The `lib/church-data.ts` file exports typed constants that give autocomplete and type checking across all components that consume them.

### 3.3 Tailwind CSS

Tailwind is configured with a custom theme in `tailwind.config.ts`:

- **Custom color ramps:** `royal` (9 shades) and `gold` (9 shades)
- **Custom font families:** `font-poppins`, `font-inter`
- **Custom keyframes:** `float`, `fadeInUp`, `fadeIn`, `scrollBounce`, `shimmer`, `spin-slow`
- **Custom animations:** `animate-float`, `animate-fade-in-up`, `animate-scroll-bounce`, etc.
- **Extended screens:** `xs: 480px` breakpoint

### 3.4 Supabase

Supabase provides a hosted **PostgreSQL database** with a REST API (via PostgREST), **Row Level Security**, and a JavaScript client.

**How it's used in this project:**
- The `prayer_requests` table stores all form submissions
- The Supabase JS client (`@supabase/supabase-js`) is initialized as a singleton in `PrayerSection.tsx`
- The anon key is safe to expose publicly because RLS policies restrict what it can do (INSERT only for unauthenticated users)

**Supabase client initialization pattern:**
```typescript
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

### 3.5 shadcn/ui

shadcn/ui provides accessible, unstyled component primitives built on Radix UI. The `components/ui/` directory contains these pre-installed components. The project uses:
- `accordion` — Plan Your Visit FAQ
- `button`, `input`, `textarea`, `label` — Forms
- `badge`, `card`, `separator` — Layout primitives

### 3.6 lucide-react

Used for all iconography throughout the site. Icons are tree-shaken per import, minimizing bundle size.

---

## 4. System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    USER'S BROWSER                       │
│  Next.js Hydrated React App (Client Components)         │
│  - useState / useEffect for interactivity               │
│  - IntersectionObserver for scroll animations           │
│  - fetch() / Supabase client for data submission        │
└──────────────────────────┬──────────────────────────────┘
                           │ HTTP/HTTPS
           ┌───────────────┴───────────────┐
           │                               │
┌──────────▼──────────┐      ┌────────────▼────────────┐
│   Netlify CDN/Edge  │      │     Supabase Cloud       │
│  (Static HTML +     │      │  PostgreSQL + REST API   │
│   JS Bundles)       │      │  Row Level Security      │
│                     │      │  (prayer_requests table) │
│  Pre-rendered at    │      │                          │
│  build time (SSG)   │      │  Anon key: INSERT only   │
└─────────────────────┘      └─────────────────────────-┘
           │
┌──────────▼──────────┐
│   External Services │
│  - YouTube (embeds, │
│    thumbnails API)  │
│  - Google Fonts     │
│  - Google Maps      │
│  - Pexels Images    │
│  - WhatsApp API     │
└─────────────────────┘
```

### Data Flow — Prayer Request Submission

```
User fills form
      │
      ▼
PrayerSection.tsx handleSubmit()
      │
      ▼
Supabase JS Client
      │
      ▼
POST https://[project].supabase.co/rest/v1/prayer_requests
  Authorization: Bearer [ANON_KEY]
      │
      ▼
PostgREST → RLS check: "anyone_can_insert_prayer"
  → WITH CHECK (true) → PASS
      │
      ▼
Row inserted into prayer_requests table
      │
      ▼
Response 201 Created
      │
      ▼
UI shows success state, form resets
```

---

## 5. Frontend Architecture

### 5.1 Page Rendering Strategy

Both pages use **Static Site Generation (SSG)**:
- `app/page.tsx` — Static. All section components are client-side interactive, but the initial HTML shell is pre-rendered.
- `app/plan-your-visit/page.tsx` — Static. Metadata exported, content is static.

This means the first contentful paint is fast (pre-rendered HTML served from CDN), and then React hydrates the interactive elements (carousels, forms, countdown timers).

### 5.2 Component Communication

Components do not use global state (no Redux, no Zustand, no Context). Each component is self-contained:

- **Data:** Read from `lib/church-data.ts` at import time (static)
- **UI state:** Local `useState` per component
- **Side effects:** Local `useEffect` per component
- **Cross-component navigation:** Smooth scroll via `document.querySelector` + `scrollIntoView`

### 5.3 The `SectionReveal` Pattern

Every section and most grid items are wrapped in `SectionReveal`:

```tsx
// Usage
<SectionReveal delay={200}>
  <div className="card">...</div>
</SectionReveal>

// Implementation
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setTimeout(() => el.classList.add('visible'), delay);
      observer.unobserve(el); // fire once, then disconnect
    }
  },
  { threshold: 0.1 }
);
```

The CSS transition is defined in `globals.css`:
```css
.section-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.section-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 6. Component Catalogue

### 6.1 Shared Components

#### `Navbar`
- **State:** `scrolled` (boolean), `mobileOpen` (boolean), `dropdownOpen` (boolean)
- **Behavior:** Listens to `window.scroll` event. Below 60px: transparent white text. Above 60px: white background, dark text.
- **Mobile:** Hamburger menu reveals a full-width panel. Dropdown "More" reveals sub-links including "Plan Your Visit".
- **Accessibility:** `aria-expanded`, `aria-label` on toggle button, `aria-haspopup` on dropdown trigger.

#### `Footer`
- Renders contact info, quick links, service times, and social media links.
- Uses `CHURCH_INFO` from `church-data.ts` for all dynamic content.
- Smooth-scrolls to hash anchors for same-page links.

#### `LoadingScreen`
- Shown on initial page load for 2 seconds, then fades out over 0.5 seconds.
- Uses `setTimeout` with two timers: one for `fadeOut` class, one to remove from DOM.
- Displays church logo with `animate-float` and `animate-ping` ring.

#### `ScrollProgress`
- Listens to `window.scroll` (passive listener).
- Calculates `(scrollY / (totalHeight - viewportHeight)) * 100`.
- Sets `width` on a fixed `div` at top of screen.

#### `BackToTop`
- Appears after 400px scroll.
- Uses CSS `opacity` + `translateY` + `pointer-events: none` for smooth hide/show.
- `window.scrollTo({ top: 0, behavior: 'smooth' })`.

#### `WhatsAppButton`
- Fixed bottom-left, `z-50`.
- Builds WhatsApp URL: `https://wa.me/[number]?text=[encoded message]`.
- Custom SVG WhatsApp icon (avoids dependency on icon library for a brand icon).

#### `SectionReveal`
- Accepts `children`, `className`, and `delay` (ms).
- Uses `useRef` to get DOM element, then `IntersectionObserver` to trigger reveal.
- Observer disconnects after first trigger (performance: no repeated callbacks).

### 6.2 Section Components

#### `HeroSection`
- **State:** `mounted` (controls animation trigger), `isLive` (boolean)
- **Live detection logic:**
  - Sunday: `day === 0 && totalMin >= 660 && totalMin <= 780` (11 AM–1 PM)
  - Saturday: `day === 6 && totalMin >= 1080 && totalMin <= 1200` (6 PM–8 PM)
- **Animated elements:** floating rays (SVG lines), cross watermark (SVG), star particles (CSS radial-gradient)
- **CTA buttons:** "Join Worship" → `#services`, "Watch Live" → `#live`, "Prayer Request" → `#prayer`

#### `BibleVerseSection`
- **State:** `current` (index), `transitioning` (boolean for fade effect)
- **Auto-advance:** `setInterval` every 7 seconds
- **Transition:** Fades out (opacity 0, translateY +4px) → swaps verse → fades in
- **Controls:** Previous/next buttons + dot indicators

#### `SermonsSection`
- **State:** `activeCategory`, `searchQuery`
- **Filtering:** `SERMONS.filter()` combining category match and title/scripture substring search
- **Thumbnails:** YouTube's `img.youtube.com/vi/[VIDEO_ID]/maxresdefault.jpg` API
- **YouTube links:** Direct `href` to individual video URLs

#### `LiveStreamSection`
- **State:** `isLive`, `countdown` (days/hours/minutes/seconds object)
- **Countdown calculation:** Finds next Sunday from current date, computes `Date.getTime()` diff
- **Update interval:** `setInterval` every 1000ms (real-time seconds)
- **Live state:** Shows pulsing LIVE badge and direct YouTube link

#### `GallerySection`
- **State:** `activeCategory`, `lightboxImage` (null or `{src, caption}`)
- **Masonry layout:** CSS `columns` property — 3 on desktop, 2 on tablet, 1 on mobile
- **Lightbox:** Conditional render of fixed overlay with full image
- **Accessibility:** `role="button"`, `tabIndex={0}`, keyboard `Enter`/`Space` handler

#### `TestimoniesSection`
- **State:** `current` (index), `transitioning` (boolean)
- **Auto-advance:** `setInterval` every 6 seconds
- **Avatar row:** Shows all 5 member photos; clicking navigates to that testimony

#### `PrayerSection`
- **State:** `form` (FormData object), `loading`, `status` ('idle' | 'success' | 'error')
- **Supabase write:** `supabase.from('prayer_requests').insert([...])`
- **Success state:** Replaces form with confirmation UI + "Submit Another" button
- **Validation:** `required` HTML attributes on name and request fields; Supabase returns error on DB constraint violation

#### `PlanVisitAccordion`
- **State:** `openId` (string | null) — only one item open at a time
- **Animation:** CSS `max-height` transition: `0` → `600px`
- **Text rendering:** Custom `renderAnswer()` parses `**bold**` markdown and bullet `•` prefixes into React elements with `dangerouslySetInnerHTML` (content is static/internal, not user-generated — no XSS risk)
- **Accessibility:** `aria-expanded`, `aria-controls`, `aria-labelledby`, `role="region"` on panels

---

## 7. Data Architecture

### 7.1 Static Data (`lib/church-data.ts`)

All non-database content is stored as typed TypeScript constants in `lib/church-data.ts`. This is a deliberate architectural choice:

**Why static data instead of a CMS or database?**
- The content changes infrequently (sermons, events, ministries)
- Zero latency — imported at build time, no runtime fetch
- Type-safe — TypeScript catches mismatches at compile time
- Simpler — no admin interface, no API call, no loading state
- The website can still build and work even if Supabase is unreachable

**Trade-off:** Content updates require a code edit and redeploy. For a small ministry with an in-house developer, this is acceptable. A future enhancement could migrate to a headless CMS.

### 7.2 Sermon Data & YouTube Integration

Sermons display real YouTube video thumbnails using YouTube's public thumbnail API:

```
https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg
```

This returns the highest-resolution thumbnail (1280×720). No YouTube API key is required for thumbnails. The thumbnail URL is stored directly in the `SERMONS` array alongside the video URL.

---

## 8. Database Design

### 8.1 Schema

Only one table is used in this version: `prayer_requests`.

```sql
CREATE TABLE prayer_requests (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text        NOT NULL,
  email      text,
  phone      text,
  request    text        NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
```

### 8.2 Row Level Security

RLS is enabled on the table. The policies implement a "public write, authenticated read" pattern:

```sql
-- Anyone can submit (no account required)
CREATE POLICY "anyone_can_insert_prayer" ON prayer_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Only admins (authenticated users) can read
CREATE POLICY "admin_select_prayer" ON prayer_requests
  FOR SELECT TO authenticated
  USING (true);
```

**Why `WITH CHECK (true)` on INSERT?**
The data being inserted doesn't need ownership scoping — any visitor may submit a prayer request anonymously. The `WITH CHECK (true)` simply means "any insert through the anon key is allowed." The table doesn't store a `user_id` because the submitter is not a registered user.

### 8.3 Data Access Pattern

```typescript
// Single insert, no need to read back
const { error } = await supabase
  .from('prayer_requests')
  .insert([{ name, email, phone, request }]);

if (error) {
  // show error UI
} else {
  // show success UI
}
```

The client never fetches prayer requests (that would require admin auth). It only ever inserts.

---

## 9. Routing & Navigation

### 9.1 App Router Structure

```
app/
├── layout.tsx              → Root layout (wraps all pages)
├── page.tsx                → Route: /
└── plan-your-visit/
    └── page.tsx            → Route: /plan-your-visit
```

### 9.2 Same-Page Navigation (Homepage)

The homepage is a single-page application with section IDs as anchors:
- Navbar links call `document.querySelector(href).scrollIntoView({ behavior: 'smooth' })`
- The URL does not change (no hash-router)
- Scroll position is tracked by `ScrollProgress`

### 9.3 Cross-Page Navigation

- `next/link` is used for `/plan-your-visit` links (client-side navigation, no full page reload)
- The Plan Your Visit page has a "Back to Home" link (`href="/"`)
- The Navbar appears on both pages; the Plan Your Visit CTA button appears on the homepage navbar

### 9.4 External Navigation

- YouTube links open in new tab (`target="_blank" rel="noopener noreferrer"`)
- Social media links open in new tab
- Google Maps directions open in new tab
- WhatsApp link opens in WhatsApp app or web

---

## 10. Styling System

### 10.1 CSS Architecture

```
app/globals.css
├── Google Fonts @import (Poppins, Inter)
├── CSS Custom Properties (:root) — color variables
├── @layer base — Tailwind base reset + body font assignment
├── @layer utilities — custom utility classes
│   ├── .font-poppins, .font-inter
│   ├── .text-gradient-blue, .text-gradient-gold
│   ├── .glass, .glass-dark — frosted glass effects
│   ├── .hero-gradient — hero overlay gradient
│   ├── .gold-gradient, .blue-gradient — button gradients
│   ├── .card-hover — hover lift animation
│   └── .masonry-grid, .masonry-item — gallery layout
├── @keyframes — animation definitions
│   ├── float, fadeInUp, fadeIn
│   ├── scrollBounce, shimmer
│   ├── countdownPulse, liveGlow
│   └── crossGlow, rayRotate
├── Scroll progress bar styles
├── Section reveal animation base styles
└── Custom scrollbar styles
```

### 10.2 Gradient System

```css
/* Used as background on dark sections */
.hero-gradient {
  background: linear-gradient(
    135deg,
    rgba(10, 20, 60, 0.92) 0%,
    rgba(15, 40, 100, 0.85) 40%,
    rgba(30, 64, 175, 0.7) 70%,
    rgba(251, 191, 36, 0.15) 100%
  );
}

/* Used on primary CTA buttons */
.blue-gradient {
  background: linear-gradient(135deg, #1e3a8a, #1d4ed8, #3b82f6);
}

/* Used on accent CTA buttons */
.gold-gradient {
  background: linear-gradient(135deg, #d97706, #f59e0b, #fcd34d);
}

/* Used on section background alternation */
.section-gradient {
  background: linear-gradient(180deg, #f8faff 0%, #ffffff 50%, #f0f7ff 100%);
}
```

### 10.3 Frosted Glass

Used on the hero section's CTA buttons and navbar (before scroll):
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## 11. Animation System

### 11.1 CSS Keyframe Animations

Defined in `globals.css` and referenced via Tailwind's `animation` utilities (configured in `tailwind.config.ts`):

| Animation | Keyframe | Duration | Use Case |
|---|---|---|---|
| `animate-float` | `float` | 6s infinite | Logo floating in Hero/Loading |
| `animate-fade-in-up` | `fadeInUp` | 0.8s forwards | Hero text reveal on mount |
| `animate-fade-in` | `fadeIn` | 0.6s forwards | Hero badge reveal |
| `animate-scroll-bounce` | `scrollBounce` | 2s infinite | Scroll chevron indicator |
| `animate-spin-slow` | `spin-slow` | 20s linear | Ray rotation effect |
| `animate-ping-slow` | `ping-slow` | 2s infinite | Logo ring glow |
| `live-dot` | `liveGlow` | 2s infinite | Live service status dot |
| `cross-glow` | `crossGlow` | 3s alternate | Hero cross watermark |

### 11.2 JavaScript-Driven Animations

| Component | Trigger | Mechanism |
|---|---|---|
| `SectionReveal` | Scroll into view | `IntersectionObserver` → add CSS class |
| `BibleVerseSection` | Auto + user click | `setInterval` + `setTimeout` for fade transition |
| `TestimoniesSection` | Auto + user click | Same pattern as above |
| `LiveStreamSection` | Mount + 1s interval | `setInterval` updating countdown state |
| `HeroSection` | Mount | `useState(mounted)` triggers CSS animation classes |
| `LoadingScreen` | Mount | `setTimeout` chain for fade-out |

### 11.3 Transition Patterns

Card hover: defined in `.card-hover` utility class
```css
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(37, 99, 235, 0.15);
}
```

Navbar scroll transition:
```tsx
// className changes based on `scrolled` state
scrolled
  ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-royal-900/10'
  : 'bg-transparent'
```

---

## 12. SEO & Structured Data

### 12.1 Next.js Metadata API

`app/layout.tsx` exports a `metadata` object used by Next.js to generate `<meta>` tags:

```typescript
export const metadata: Metadata = {
  title: 'Jesus Christ Word Miracles Ministry (JCWMM)',
  description: '...',
  keywords: ['JCWMM', 'church Hyderabad', ...],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: '...',
    description: '...',
    images: [{ url: '/Logo_Jcwmm.jpeg', width: 800, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/Logo_Jcwmm.jpeg'],
  },
  icons: { icon: '/Logo_Jcwmm.jpeg' },
};
```

### 12.2 JSON-LD Structured Data

A `schema.org/Church` object is injected via the `other` metadata key:

```json
{
  "@context": "https://schema.org",
  "@type": "Church",
  "name": "Jesus Christ Word Miracles Ministry",
  "alternateName": "JCWMM",
  "description": "...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  },
  "url": "https://jcwmm.org",
  "sameAs": [
    "https://www.youtube.com/@JCWMMOFFICIAL",
    "https://www.facebook.com/JCWMMOFFICIAL",
    "https://www.instagram.com/jcwmmofficial"
  ]
}
```

This enables rich results in Google Search (church knowledge panel, address, hours).

### 12.3 Per-Page Metadata

`app/plan-your-visit/page.tsx` exports its own `metadata` for page-level SEO:
```typescript
export const metadata: Metadata = {
  title: 'Plan Your Visit | Jesus Christ Word Miracles Ministry (JCWMM)',
  description: '...',
};
```

### 12.4 Semantic HTML

- `<header role="banner">` for Navbar
- `<main>` wrapping all sections
- `<footer role="contentinfo">` for Footer
- `<nav aria-label="Main navigation">` for navigation
- `<section id="...">` for each homepage section
- `<blockquote>` for Bible verses
- `<cite>` for scripture references
- `<figure>` / `<figcaption>` patterns via Image alt text

---

## 13. Performance Considerations

### 13.1 Image Optimization

- All images use `next/image` component
- `sizes` prop is set on all images for responsive image hints (`srcset`)
- `priority` prop on above-the-fold images (Hero background, logo, Pastor photo)
- `next.config.js` sets `images: { unoptimized: true }` for Netlify compatibility
- External images (Pexels, YouTube) are served from their own CDNs

### 13.2 Font Loading

- Google Fonts are loaded with `rel="preconnect"` hints in `layout.tsx`
- `display=swap` in the font URL ensures text remains visible during font load
- Two fonts with combined weights — kept to minimum for performance

### 13.3 Code Splitting

Next.js automatically code-splits at the page and route level. The homepage bundle is ~158 kB first-load JS (including React runtime). The Plan Your Visit page is only ~101 kB (lighter, no Supabase client).

### 13.4 Static Generation

Both pages are SSG (`○` in build output). This means:
- Pages are pre-rendered to HTML at build time
- Served instantly from CDN edge nodes
- No server-side computation on each request
- Zero cold-start latency

### 13.5 Event Listener Cleanup

All `useEffect` hooks that add event listeners return cleanup functions:
```typescript
useEffect(() => {
  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}, []);
```

`{ passive: true }` is used on scroll listeners to avoid blocking the browser's main thread.

---

## 14. Accessibility (a11y)

### 14.1 Keyboard Navigation

- All interactive elements are reachable by keyboard (`Tab`)
- Gallery items have `tabIndex={0}` and `onKeyDown` handlers for `Enter`/`Space`
- Accordion items use `button` elements with proper `aria-expanded`/`aria-controls`/`aria-labelledby`

### 14.2 Screen Reader Support

- All `<img>` and `next/image` have descriptive `alt` text
- Icon-only buttons have `aria-label`
- Live service dot has semantic meaning conveyed via `role="status"` (via badge element)
- Countdown section updates are readable (time values are in visible text, not hidden)

### 14.3 Color Contrast

Text colors verified for WCAG AA compliance:
- White text on blue gradient: contrast ratio > 4.5:1
- `royal-900` text on white: contrast ratio > 10:1
- `gold-400` on `royal-950` (footer): contrast ratio > 4.5:1
- All navbar text is verified in both transparent (white on dark) and scrolled (dark on white) states

### 14.4 Focus Management

- Navbar mobile menu close restores natural focus flow
- Lightbox modal uses `onClick` on overlay to dismiss
- No focus traps implemented (no modal/dialog components used that require it)

---

## 15. Security Architecture

### 15.1 Supabase RLS (Primary Security Layer)

Row Level Security is the primary data protection mechanism. Even if the anon key is exposed (which is intentional and expected), RLS ensures:
- **Unauthenticated users (anon):** Can only INSERT new prayer requests
- **Authenticated users:** Can SELECT, UPDATE, DELETE prayer requests (church admins)
- **No user can read others' prayer requests** without admin authentication

### 15.2 XSS Prevention

- **React's built-in escaping** — All dynamic text rendered via JSX is automatically escaped
- **`dangerouslySetInnerHTML`** — Used only in `PlanVisitAccordion.renderAnswer()` for static, internal content (not user-generated). The `**bold**` and `•` bullet syntax is authored by the developer, never input by users.
- **No `eval()`** — No dynamic code execution anywhere in the project
- **External links:** All external links use `rel="noopener noreferrer"` to prevent tab-napping

### 15.3 Environment Variables

- Both Supabase variables are `NEXT_PUBLIC_` — client-exposed by design
- The anon key is safe to expose because it's restricted by RLS policies
- The service role key is NOT included in the project (not needed for client-side operations)
- Never commit the `.env` file to public repositories

### 15.4 Content Security

- All Pexels images are referenced by URL, not downloaded/served locally
- YouTube thumbnails use `img.youtube.com` — a trusted Google CDN
- No user-uploaded content is supported in this version

---

## 16. Deployment Architecture

### 16.1 Netlify Configuration

`netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

The `@netlify/plugin-nextjs` plugin handles:
- Next.js ISR (Incremental Static Regeneration) support
- API routes (if any)
- Edge functions
- Image optimization routing

### 16.2 Build Process

```
npm install
  → Installs all dependencies

npm run build
  → next build
  → TypeScript type checking
  → Tailwind CSS purge and compile
  → SSG pre-rendering of / and /plan-your-visit
  → Bundle splitting and optimization
  → Output: .next/ directory

Netlify deploys .next/ to CDN
```

### 16.3 Environment Variables on Netlify

Set in Netlify Dashboard → Site Settings → Environment Variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 17. Content Management Guide

### 17.1 Updating Church Contact Info

Edit `lib/church-data.ts`:
```typescript
contact: {
  phone1: '+91 XXXXX XXXXX',
  phone2: '+91 XXXXX XXXXX',
  email: 'your@email.com',
  whatsapp: '+91XXXXXXXXXX',  // digits only, no spaces or dashes
},
```

### 17.2 Adding a New Sermon

1. Go to YouTube, find the video, copy the 11-character video ID from the URL
   - Example URL: `https://www.youtube.com/watch?v=cfpuRdVn-s0`
   - Video ID: `cfpuRdVn-s0`

2. Add to `SERMONS` array in `lib/church-data.ts`:
```typescript
{
  id: 7,  // increment
  title: 'Sermon Title Here',
  speaker: 'Prophet Judah Asher (Naresh)',
  date: '2025',
  scripture: 'Genesis 1:1',
  category: 'Faith',  // must exist in SERMON_CATEGORIES
  thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg',
  youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  duration: 'Full Message',
},
```

3. If using a new category, add it to `SERMON_CATEGORIES`:
```typescript
export const SERMON_CATEGORIES = ['All', 'Anointing', 'Prophetic', ...', 'Your New Category'];
```

4. Redeploy (push to GitHub → Netlify auto-builds).

### 17.3 Adding a Gallery Photo

1. Get a Pexels URL (or host your own image in `public/images/`)
2. Add to `GALLERY_IMAGES`:
```typescript
{
  id: 13,
  src: 'https://images.pexels.com/photos/XXXXX/...',
  category: 'Worship',
  caption: 'Description of the moment',
},
```

### 17.4 Adding an Event

```typescript
{
  id: 5,
  title: 'Event Name',
  date: 'Month DD, YYYY',
  time: 'HH:MM AM – HH:MM PM',
  description: 'Full event description here.',
  image: 'https://images.pexels.com/...',
  category: 'Special',
  featured: false,  // true = shows as hero banner (max 1 at a time)
},
```

### 17.5 Updating Bible Verses

Edit the `BIBLE_VERSES` array. Each entry needs:
- `id` — unique number
- `verse` — full verse text in quotes
- `reference` — e.g. `'John 3:16'`
- `theme` — single word description

### 17.6 Updating the Prophet's Photo

Replace `public/images/image.png` with a new image file of the same name, or:
1. Add new image to `public/images/`
2. Edit `components/sections/PastorSection.tsx` line with `src="/images/image.png"` → new path

---

## 18. Known Limitations & Future Roadmap

### 18.1 Known Limitations

| Issue | Cause | Impact | Status |
|---|---|---|---|
| `Critical dependency` build warning | `@supabase/realtime-js` webpack expression | Warning only, no functional impact | Non-blocking upstream issue |
| `metadataBase not set` warning | Dev-only Next.js warning | No production impact | Cosmetic |
| YouTube thumbnails may show placeholder | Video unavailable or deleted | Shows broken image | Monitor and update sermon entries |
| Google Maps embed requires API key | iframe embed without API key may fail | Map may not load in all regions | Replace with valid Maps Embed API key |
| Static content requires redeploy | No CMS layer | Team must edit code to update sermons/events | Acceptable for current team size |

### 18.2 Recommended Future Enhancements

| Priority | Feature | Description |
|---|---|---|
| High | **Admin Dashboard** | Protected Next.js page (authenticated) for managing prayer requests, viewing submissions |
| High | **Email Notifications** | Supabase Edge Function triggered on prayer_requests INSERT → sends email to church admin |
| High | **YouTube API Integration** | Fetch latest sermons automatically from `@JCWMMOFFICIAL` channel via YouTube Data API v3 |
| Medium | **Headless CMS** | Integrate Sanity or Contentful for no-code content management (events, sermons, gallery) |
| Medium | **Online Giving / Donations** | Stripe payment integration for tithes and offerings |
| Medium | **Newsletter Subscription** | Email capture form connected to Mailchimp or Supabase |
| Medium | **Event Registration Forms** | Allow online registration for events (stored in Supabase) |
| Medium | **Multi-language Support** | Telugu and Hindi versions of the site |
| Low | **PWA Support** | Add `manifest.json` and service worker for installable app experience |
| Low | **Dark Mode** | Toggle between light and dark themes |
| Low | **Search** | Full-text search across sermons and events |

---

## 19. File Reference

| File | Purpose | Lines (approx.) |
|---|---|---|
| `app/globals.css` | Global styles, CSS variables, animations | ~280 |
| `app/layout.tsx` | Root layout, fonts, SEO metadata, JSON-LD | ~70 |
| `app/page.tsx` | Homepage — assembles all sections | ~35 |
| `app/plan-your-visit/page.tsx` | Plan Your Visit page — static content + accordion | ~250 |
| `lib/church-data.ts` | All church content data constants | ~454 |
| `lib/utils.ts` | Tailwind class merge utility | ~6 |
| `tailwind.config.ts` | Custom Tailwind theme (colors, fonts, animations) | ~120 |
| `next.config.js` | Next.js build configuration | ~10 |
| `components/shared/Navbar.tsx` | Sticky navigation header | ~160 |
| `components/shared/Footer.tsx` | Site footer | ~120 |
| `components/shared/LoadingScreen.tsx` | Animated loading splash | ~50 |
| `components/shared/ScrollProgress.tsx` | Scroll progress indicator | ~25 |
| `components/shared/BackToTop.tsx` | Back-to-top button | ~30 |
| `components/shared/SectionReveal.tsx` | Scroll-trigger animation wrapper | ~35 |
| `components/shared/WhatsAppButton.tsx` | WhatsApp float button | ~35 |
| `components/sections/HeroSection.tsx` | Hero with live status + CTAs | ~170 |
| `components/sections/AboutSection.tsx` | About, mission, vision, beliefs | ~140 |
| `components/sections/ServicesSection.tsx` | Weekly service cards | ~80 |
| `components/sections/MinistriesSection.tsx` | 8 ministry cards | ~65 |
| `components/sections/PastorSection.tsx` | Prophet profile + message | ~100 |
| `components/sections/BibleVerseSection.tsx` | Auto-rotating verse carousel | ~85 |
| `components/sections/SermonsSection.tsx` | YouTube sermon archive + search | ~130 |
| `components/sections/LiveStreamSection.tsx` | Live/countdown section | ~120 |
| `components/sections/EventsSection.tsx` | Featured + grid events | ~110 |
| `components/sections/GallerySection.tsx` | Masonry gallery + lightbox | ~110 |
| `components/sections/TestimoniesSection.tsx` | Member testimonies carousel | ~110 |
| `components/sections/PrayerSection.tsx` | Prayer request form (Supabase) | ~180 |
| `components/sections/ContactSection.tsx` | Contact + map + social links | ~130 |
| `components/plan-visit/PlanVisitAccordion.tsx` | FAQ accordion component | ~75 |
| `supabase/migrations/create_prayer_requests.sql` | DB migration SQL | ~40 |

---

*This documentation covers the complete technical implementation of the JCWMM official website as of version 1.0.0.*

*Jesus Christ Word Miracles Ministry — Hyderabad, Telangana, India*
*"For God so loved the world that He gave His one and only Son..." — John 3:16*
