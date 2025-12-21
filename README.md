# Inventory Management Dashboard

A full‑stack inventory and business insights application with a Next.js client and a TypeScript/Express API backed by Prisma and PostgreSQL.

## Abstract
This project delivers a lightweight, demo‑ready Inventory Management Dashboard that visualizes sales, purchases, expenses, and popular products while enabling basic product CRUD. It showcases a modern React/Next.js frontend, a typed Express API, and a relational data layer powered by Prisma ORM over PostgreSQL. The goal is to provide a clean starting point for inventory analytics and operational visibility with a codebase that is easy to extend.

## Overview
- Monorepo structure:
  - `client` — Next.js 14 app (React 18, Tailwind CSS, MUI, Redux Toolkit + RTK Query)
  - `server` — Express + TypeScript + Prisma over PostgreSQL
- Core features:
  - Dashboard KPIs: sales summary, purchase summary, expense summary, expenses by category
  - Products listing, search, and creation
  - Users listing
  - Demo seed data for quick start
- API routes (server):
  - `GET /dashboard` — aggregated dashboard data
  - `GET /products` — list/search products
  - `POST /products` — create product
  - `GET /users` — list users
  - `GET /expenses` — expenses by category summary

## Description
This application demonstrates a practical pattern for building a data‑driven dashboard:
- Frontend
  - Next.js 14 with App Router
  - UI via Tailwind CSS and MUI components
  - State and data fetching via Redux Toolkit + RTK Query
  - Charts via Recharts; maps/social components available
- Backend
  - Express + TypeScript, secured with Helmet and CORS
  - Prisma schema modeling users, products, sales, purchases, and expenses
  - Seed data to quickly populate demo entities and summaries
- Communication
  - The client consumes the API through `NEXT_PUBLIC_API_BASE_URL`
  - Endpoints return typed data matching the client models (see `client/src/app/redux/state/api.ts`)

### Tech Stack
- Client: Next.js 14, React 18, Tailwind CSS, MUI, RTK Query, Recharts
- Server: Node.js/Express, TypeScript, Prisma, PostgreSQL

## Project Description
The repository is split into two workspaces: `client` for the web UI and `server` for the REST API and database layer.

### Repository Layout
- `client/` — Next.js app and UI components
- `server/` — Express API server, Prisma schema, seed data, and build artifacts
- `server/prisma/schema.prisma` — database schema
- `server/prisma/seedData/*` — JSON used to seed demo data

### Getting Started

Prerequisites:
- Node.js 18+
- PostgreSQL database

1) Clone and install
```
# From repository root
cd server && npm install
cd ../client && npm install
```

2) Configure environment variables
- Server (`server/.env`)
```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB_NAME
PORT=3001
```
- Client (`client/.env.local`)
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

3) Database migration and seed
```
# From server/
npx prisma migrate deploy
# Option A: build then run compiled seeder
npm run build
node dist/prisma/seedData.js
# Option B: run TypeScript directly (if ts-node is available)
npx ts-node prisma/seedData.ts
```

4) Run the servers
```
# Terminal 1 (server/)
npm run dev
# or
npm start

# Terminal 2 (client/)
npm run dev
```
- Client: http://localhost:3000 (default Next.js dev port)
- API: http://localhost:3001

### API Summary
- `GET /dashboard` — returns: popular products, sale/purchase/expense summaries, expenses by category, and users
- `GET /products?search=...` — list products with optional search query
- `POST /products` — create a product with body `{ name, price, rating, stockQuantity }`
- `GET /users` — list users
- `GET /expenses` — expenses by category summary

### Development Notes
- Client types and endpoints are defined in `client/src/app/redux/state/api.ts`
- Server entrypoint: `server/src/index.ts`
- Prisma schema: `server/prisma/schema.prisma`
- To adjust demo data, edit files under `server/prisma/seedData/` and rerun the seeder

### Scripts
- Client
  - `npm run dev` — start Next.js dev server
  - `npm run build` — production build
  - `npm start` — start production server
- Server
  - `npm run dev` — watch mode (tsc + nodemon)
  - `npm run build` — compile TypeScript to `dist/`
  - `npm start` — build then run `dist/index.js`

### Notes & Caveats
- Ensure `NEXT_PUBLIC_API_BASE_URL` matches your server host/port.
- The provided seed script in this README references `prisma/seedData.ts` and the built artifact `dist/prisma/seedData.js`, which align with files present in the repo. If you add or rename seed scripts, update the commands accordingly.
- Default ports: client 3000, server 3001 (configurable).

---

Maintained on: 2025-12-21
