# JCWMM Official Website

> **Jesus Christ Word Miracles Ministry (JCWMM)**
> *Sharing God’s Word • Transforming Lives • Walking in Faith*

A modern, responsive, production-ready church website built with **Next.js 13**, **TypeScript**, **Tailwind CSS**, and **Supabase**. The website serves as the official digital platform for **Jesus Christ Word Miracles Ministry (JCWMM)** in Hyderabad, Telangana, India, led by **Prophet Judah Asher (Naresh)**.

---

## Overview

The JCWMM website is designed to provide a welcoming online presence for visitors and church members. It includes sermon streaming, event announcements, ministry information, prayer request submission, and contact resources, all optimized for desktop, tablet, and mobile devices.

---

## Key Features

* Elegant **hero section** with responsive typography and service status badge
* **About JCWMM** with mission, vision, and core beliefs
* **Weekly service schedule** and ministry information
* **Prophet Judah Asher** profile section
* **Bible verse carousel** with automatic rotation
* **Sermon archive** with YouTube integration, search, and category filters
* **Live stream / countdown** for upcoming services
* **Events section** for upcoming ministry programs
* **Photo gallery** with category filtering and lightbox preview
* **Testimonies carousel**
* **Prayer request form** powered by Supabase
* **Contact section** with Google Maps and social media links
* **Plan Your Visit** page for first-time visitors
* Smooth **scroll animations**, progress indicator, and responsive navigation
* Optimized for **SEO, performance, and accessibility**

---

## Technology Stack

| Technology                  | Purpose                       |
| --------------------------- | ----------------------------- |
| **Next.js 13 (App Router)** | React framework and routing   |
| **React 18**                | User interface                |
| **TypeScript**              | Type safety                   |
| **Tailwind CSS**            | Styling and responsive design |
| **shadcn/ui + Radix UI**    | Accessible UI components      |
| **Lucide React**            | Icon library                  |
| **Supabase**                | Database and backend services |
| **Embla Carousel**          | Carousel functionality        |

---

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  plan-your-visit/

components/
  sections/
  shared/
  ui/

lib/
  church-data.ts
  utils.ts

public/
  images/
  logo/

supabase/
  migrations/

tailwind.config.ts
next.config.js
tsconfig.json
```

---

## Getting Started

### Prerequisites

* Node.js 18+
* npm

### Installation

```bash
npm install
npm run dev
```

The development server will be available at **http://localhost:3000**.

### Production Build

```bash
npm run build
npm start
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

These values are required for the prayer request functionality and other Supabase services.

---

## Deployment

The project can be deployed directly to **Vercel**.

### Vercel

```bash
npm install -g vercel
vercel
```

After deployment, connect your custom domain (planned: **prophetjudahasher.com**) through the Vercel dashboard.

---

## Customization

Most church content is centralized in **`lib/church-data.ts`**, including:

* Church information
* Service timings
* Sermons
* Events
* Ministries
* Bible verses
* Gallery images
* Testimonies

Updating this file automatically updates the corresponding sections across the website.

---

## SEO

The website includes:

* Next.js Metadata API
* Open Graph metadata
* Twitter Card support
* JSON-LD structured data
* Optimized typography and semantic HTML
* Mobile-first responsive design

---

## Browser Support

The website supports all modern evergreen browsers, including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

## License

This project is proprietary software developed exclusively for **Jesus Christ Word Miracles Ministry (JCWMM)**.

Unauthorized reproduction, distribution, or modification of this codebase is prohibited without prior written permission from JCWMM.

---

**Jesus Christ Word Miracles Ministry (JCWMM)**
Hyderabad, Telangana, India
