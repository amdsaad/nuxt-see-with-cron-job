# Real-Time Backend Check with Nuxt 3 and SSE

This project demonstrates how to implement real-time backend checks in a Nuxt 3 application using Server-Sent Events (SSE) and cron jobs. The backend regularly checks for updates using a cron job and pushes the updates to all connected clients via SSE in real time.

## Features

- **Server-Sent Events (SSE)**: Clients receive real-time updates from the backend.
- **Cron Job Integration**: The backend performs regular checks (every minute) using a cron job and updates all connected clients.
- **Vue 3 Frontend**: The frontend listens for real-time data updates and displays them to the user.
- **Nuxt 3**: The project leverages Nuxt 3's capabilities for server-side and client-side rendering.

## Technologies Used

- **Nuxt 3**: A modern framework for building Vue.js applications.
- **Server-Sent Events (SSE)**: A technology used for pushing updates from the server to the client in real-time.
- **Cron Jobs**: Used to schedule regular backend checks.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
