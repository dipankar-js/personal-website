# Dipankar Barman — Personal Website

A responsive portfolio and résumé website for Dipankar Barman, built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui conventions.

## Features

- Responsive résumé layout for desktop, tablet, and mobile
- Experience timeline covering Deel, Tekion, Better Software, and DXC Technology
- Selected consulting and independent projects
- Highlighted frontend, backend, platform, and delivery expertise
- Education, certifications, contact details, and external profiles
- Optimized typography with self-hosted fonts through `next/font`
- Static rendering, SEO metadata, and accessible semantic markup
- Modular, data-driven portfolio components

## Technology

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [shadcn/ui](https://ui.shadcn.com/) conventions and reusable UI primitives
- [pnpm](https://pnpm.io/)

## Getting started

### Prerequisites

- [NVM](https://github.com/nvm-sh/nvm)
- pnpm 11 or newer

### Installation

```bash
nvm use
pnpm install
```

### Development

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
pnpm run dev    # Start the development server
pnpm run build  # Create an optimized production build
pnpm run start  # Run the production server
pnpm run lint   # Run ESLint
```

## Project structure

```text
app/                  Next.js App Router entry points and global styles
components/portfolio/ Portfolio sections
components/ui/        Reusable shadcn-style UI primitives
lib/                  Shared utilities
public/               Static assets
```

## AI assistant

The résumé experience is implemented first. A Hugging Face-powered portfolio assistant can be integrated as a separate experience later.
