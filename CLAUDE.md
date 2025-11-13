# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Dokpamine Factory** - A productivity-focused SaaS platform providing various tools to increase user efficiency.

This is a Next.js 16 application using React 19, TypeScript, and Tailwind CSS v4. The project uses the App Router architecture (not Pages Router) and was bootstrapped with `create-next-app`.

**For detailed technical specifications, architecture, and implementation guidelines, see [SPEC.md](SPEC.md).**

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev
# or
bun dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x with strict mode enabled
- **Styling**: Tailwind CSS v4 (using new `@tailwindcss/postcss` plugin)
- **State Management**: Zustand (global state for tool data)
- **Image Processing**: html-to-image (PNG generation from DOM)
- **Package Manager**: Bun (lockfile present)
- **Fonts**: Geist Sans and Geist Mono (loaded via `next/font/google`)
- **Icons**: lucide-react

## Architecture

### App Router Structure

- Uses Next.js App Router (`app/` directory)
- Root layout at [app/layout.tsx](app/layout.tsx) configures fonts and metadata
- Homepage at [app/page.tsx](app/page.tsx)
- Global styles in [app/globals.css](app/globals.css)

### TypeScript Configuration

- Path alias `@/*` maps to root directory (e.g., `@/app/...`)
- Compiler target: ES2017
- Strict mode enabled
- Module resolution: bundler

### Tailwind CSS v4

This project uses **Tailwind CSS v4**, which has a different setup than v3:

- No `tailwind.config.js` file - configuration is done via CSS `@theme` directive
- Uses `@import "tailwindcss"` in CSS instead of `@tailwind` directives
- PostCSS plugin is `@tailwindcss/postcss` (not the old `tailwindcss` plugin)
- Theme configuration in [app/globals.css](app/globals.css) using `@theme inline { ... }`
- Custom CSS variables for colors: `--background`, `--foreground`
- Font variables from Geist fonts: `--font-geist-sans`, `--font-geist-mono`

### Styling System

- CSS variables defined in `:root` for light/dark mode theming
- Dark mode via `@media (prefers-color-scheme: dark)`
- Custom theme tokens mapped via `@theme inline` block

## ESLint Configuration

- Uses flat config format ([eslint.config.mjs](eslint.config.mjs))
- Applies Next.js recommended configs: `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignores: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`

## State Management with Zustand

This project uses Zustand for global state management. Key patterns:

- **Multiple small stores**: Separate stores for different concerns (e.g., `thumbnailStore`, `uiStore`)
- **Atomic selectors**: Always use selectors to subscribe to specific state slices
  ```typescript
  // Good - subscribes to specific value
  const title = useThumbnailStore((state) => state.title);

  // Bad - subscribes to entire store
  const store = useThumbnailStore();
  ```
- **Custom hooks**: Export specialized hooks for commonly used state combinations
- **Type safety**: All stores are fully typed with TypeScript interfaces

See [SPEC.md](SPEC.md) for detailed store structures and patterns.

## Image Generation

Uses `html-to-image` library to convert React components to PNG:

- Render component to DOM
- Use `toPng()` to generate image data URL
- Trigger download with `file-saver` library
- Configure quality and pixel ratio for output
- See [SPEC.md](SPEC.md) Section 6.7 for implementation details

## Project Structure

```
dokpamin-factory/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home dashboard
│   └── thumbnail-creator/ # Thumbnail tool route
├── components/            # React components
│   ├── layout/           # Header, Sidebar, Navigation
│   ├── thumbnail/        # Thumbnail creator components
│   └── ui/               # Reusable UI components
├── store/                # Zustand stores
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── types/                # TypeScript type definitions
```

## Important Notes

- Path alias `@/*` maps to project root
- All client components must use `'use client'` directive
- Zustand stores are client-side only (not compatible with Server Components)
- Preview generation happens client-side (no server processing)
- Responsive design: mobile-first approach with Tailwind breakpoints
