# Personal Portfolio Website

A modern, responsive portfolio website built with **Next.js 15**, **TypeScript** and **Tailwind CSS**. Features a clean and minimal design with dark/light mode support and **dynamic content management** through **MDX**.

## Features

- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 📝 MDX-based blog posts and projects
- 🔍 Search functionality for posts
- 📬 Contact form with email integration
- 🎨 Clean, minimal UI with Tailwind CSS
- ⚡ Fast page loads with Next.js App Router

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX with gray-matter
- **Email:** Resend
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form + Zod
- **Notifications:** Sonner

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file with required environment variables:

```bash
RESEND_API_KEY=your_resend_api_key
```

4. Run the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/app/*` - App router pages and layouts
- `/src/components/*` - React components
- `/src/content/*` - MDX content (posts and projects)
- `/src/lib/*` - Utility functions and type definitions
- `/src/emails/*` - Email templates
- `/public/*` - Static assets

## Content Management

Posts and projects are managed through MDX files in the `/src/content` directory. Each content piece includes frontmatter for metadata:

```yaml
---
author: Your Name
title: Post Title
date: YYYY-MM-DD
image: /images/posts/image.jpg
summary: Brief description
---
```

## License

MIT License
