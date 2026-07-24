# YIFANXI Furniture Website

High-end overseas furniture website for YIFANXI / Foshan Nuoyuan Furniture.

The current launch version is a Vue frontend with built-in static content, plus
an optional Java 21 Spring Boot backend for future dynamic product data.

## Project Shape

```text
package.json   Monorepo entry for Cloudflare/root builds
frontend/      Vue 3 + Vite website
backend/       Java 21 + Spring Boot API
tools/         Local asset-processing helpers
```

The current production site can be deployed as a static frontend. The backend is
kept in the repository for later dynamic APIs and does not need to be deployed
for the first launch.

## Root Commands

These commands are intended for Cloudflare Pages or any CI system that builds
from the repository root:

```bash
npm run build
```

This installs missing frontend dependencies and builds the Vue app under
`frontend/`, then outputs:

```text
frontend/dist
```

## Frontend

```bash
cd frontend
npm install
npm run dev
npm run build
```

The static production build is generated in:

```text
frontend/dist
```

For the low-cost first launch, deploy only `frontend/dist` to Cloudflare Pages,
Vercel, Netlify, or another static hosting service.

## Backend

```bash
cd backend
mvn spring-boot:run
```

Current local API:

```text
GET http://localhost:8088/api/home
```

The frontend works without the backend in production. If the backend is deployed
later, set:

```text
VITE_API_BASE_URL=https://api.example.com
```

## Notes

- Public website text is English-first.
- WhatsApp is the primary inquiry channel.
- Product prices are intentionally hidden for the current inquiry-based version.
- The backend can be added later for product management, inquiries, CMS, or admin workflows.
