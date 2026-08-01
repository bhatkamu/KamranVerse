# Kamu — 3D Creator Portfolio

A modern, animated portfolio built with **React + Vite + TypeScript + Tailwind CSS**, featuring WebGL aurora effects, GSAP animations, and Framer Motion.

## ⚠️ Important: "Go Live" vs. the Dev Server

This is a **Vite + React + TypeScript** project. The VS Code **"Go Live"** button (Live Server extension) serves raw files from disk — it **cannot** process `.tsx` / `.jsx` / Tailwind files, which is why you see a **white blank screen**.

### ✅ The correct way to run this project

Use the **Vite dev server** instead of "Go Live":

```bash
npm run dev
```

Then open **http://localhost:5173** in your browser.

### VS Code shortcuts (already configured)

- **`Ctrl+Shift+B`** (or `Cmd+Shift+B`) → Starts the Vite dev server (task: "Start Vite Dev Server")
- **Run & Debug panel** → "Launch Chrome against Vite Dev Server" — starts the server and opens Chrome automatically
- The Live Server "Go Live" button is configured to **proxy to the Vite dev server** on port 5173, so it will also work **if the Vite dev server is already running** in another terminal.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server (hot reload) |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Preview the production build locally |

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 6** — dev server & bundler
- **Tailwind CSS 3** — styling
- **Framer Motion** — scroll & layout animations
- **GSAP + ScrollTrigger** — menu & text animations
- **OGL** — WebGL aurora background

## Project Structure

```
src/
├── App.tsx                 # Root: lazy-loads sections, wraps in ErrorBoundary
├── main.tsx                # Entry: mounts React, removes bootstrap loader
├── index.css               # Tailwind + global styles
├── components/
│   ├── Aurora.tsx          # WebGL animated background
│   ├── HeroSection.tsx     # Hero with TextPressure + StaggeredMenu
│   ├── MarqueeSection.tsx  # Scroll-driven image marquee
│   ├── ServicesSection.tsx # Services list with ScrollFloat
│   ├── ProjectsSection.tsx # Sticky stacked project cards
│   ├── AboutSection.tsx    # About with scroll-reveal text
│   ├── SoftwareSkills.tsx  # Skill bars
│   ├── ContactSection.tsx  # Contact + WhatsApp QR
│   ├── ErrorBoundary.tsx   # Catches runtime errors (no more white screen)
│   ├── LoadingScreen.tsx   # Suspense fallback spinner
│   └── ...                 # Animation primitives (FadeIn, ShinyText, etc.)