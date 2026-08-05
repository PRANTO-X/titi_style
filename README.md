# titi-style

Bangladeshi watch e-commerce storefront built with Next.js (App Router), TypeScript and Tailwind CSS v4. Design adapted from the Lushy Shopify theme.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command            | Purpose                    |
| ------------------ | -------------------------- |
| `npm run dev`      | Start development server   |
| `npm run build`    | Production build           |
| `npm run start`    | Serve production build     |
| `npm run lint`     | Run ESLint                 |
| `npm run typecheck`| Run TypeScript type checks |

## Structure

- `src/app` - App Router pages (home, shop) and global styles
- `src/components` - Layout, UI primitives, product and section components
- `src/data` - Typed static data (products, collections, content)
- `src/lib` - Store context and helpers
- `public` - Static assets (logo, product and banner imagery)
