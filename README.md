# LGL Metal Website

Single-page industrial company website built with Next.js, TypeScript, and Tailwind CSS, with reusable sections and deployment-ready defaults for Vercel.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Next metadata, sitemap, robots, and Open Graph image routes

## Local Development

```bash
npm install
npm run dev
```

## Production Checks

```bash
npm run lint
npm run build
```

## Notes

- The contact form posts to a local `/api/contact` route that is ready to be replaced with a CRM, email service, or server-side workflow.
- `proxy.ts` does not redirect to another company domain.
- Footer legal links point to placeholder routes that can be replaced with company-approved policy language before launch.
