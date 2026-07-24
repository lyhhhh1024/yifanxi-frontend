# YIFANXI Deployment Notes

## Recommended low-cost first launch

The first public version can be deployed as a static frontend site.

This is enough for the current business goal:

- Brand presentation
- Product showcase
- Factory capability
- Qualifications
- WhatsApp inquiry
- Instagram QR

The Java backend is optional at this stage. It can be deployed later when the site needs dynamic product management, inquiry records, login, or a CMS.

## Frontend-only deployment

Use this path first.

1. Buy the domain.
2. Put the domain DNS on Cloudflare.
3. Build the frontend from `frontend`.
4. Deploy `frontend/dist` to Cloudflare Pages, Vercel, Netlify, or any static hosting service.
5. Bind the custom domain.
6. Check HTTPS, mobile layout, images, WhatsApp QR, and Instagram QR.

No production environment variable is required for the first static version.

## Cloudflare Pages settings

Because the repository is now a frontend/backend monorepo, Cloudflare Pages
should build the Vue app from the `frontend` folder.

Recommended settings:

```text
Framework preset: None or Vue / Vite
Root directory: leave empty
Build command: npm run build
Build output directory: dist
Node.js version: 20 or 22
```

If Cloudflare does not read the Node version automatically, add an environment
variable in Pages:

```text
NODE_VERSION=22
```

Alternative settings:

```text
Root directory: frontend
Build command: npm run build
Build output directory: dist
```

The root build command copies `frontend/dist` to root `dist` after a successful
Vue build, so Cloudflare Pages can use the simpler root output directory.

## Frontend with backend API

Use this later if the Spring Boot backend is deployed.

Set this frontend environment variable in the hosting platform:

```text
VITE_API_BASE_URL=https://api.example.com
```

The frontend will request:

```text
https://api.example.com/api/home
```

If `VITE_API_BASE_URL` is not set in production, the frontend uses its built-in static data from `frontend/src/data/fallback.ts`.

## Backend deployment

The backend is a Java 21 Spring Boot service.

Current API:

```text
GET /api/home
```

Default local port:

```text
8088
```

Low-cost backend options for later:

- Keep no backend for the first version.
- Use a small VPS when dynamic data is needed.
- Use a managed Java hosting platform if operations should stay simple.

## Current launch recommendation

For the first domain launch, deploy only:

```text
frontend/dist
```

Keep the backend in the repository as a future extension.
