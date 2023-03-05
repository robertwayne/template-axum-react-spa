# Template: Axum + React SPA

## Backend

- __[Axum](https://github.com/tokio-rs/axum)__
- __[PostgreSQL](https://www.postgresql.org)__

## Frontend

- __[React](https://reactjs.org)__
- __[TypeScript](https://www.typescriptlang.org)__
- __[Tailwind CSS](https://tailwindcss.com)__
- __[Vite](https://vitejs.dev/)__ + __[Vitest](https://vitest.dev/)__
- __[wouter](https://github.com/molefrog/wouter)__

## Getting Started

1. Clone the repository: `git clone
   https://github.com/robertwayne/template-axum-react-spa`
2. Change `.env.TEMPLATE` to `.env` and set your Postgres credentials _(if not
   using defaults)_.
3. Run the server with `cargo run` from inside the `/server` directory.
4. You should build the client initially with `pnpm run build` from inside the
   `/client` directory. After that, you can use `pnpm run dev` for hot
   reloading.
5. If you're serving from the server, visit `http://127.0.0.1:3000` in your
   browser. If you're using npm dev, visit `http://127.0.0.1:8000` in your
   browser.

## Client Notes

- Async, naive prefetch route links by default.
- Scripts use __[pnpm](https://github.com/pnpm/pnpm)__ by default.

## Server Notes

- Caches static files by default: HTML, CSS, JS, WEBP, SVG, and WOFF2.
- Uses tower-http CORS, Compression _(gzip by default)_, and CSP middleware.

## GitHub Action Notes

- Runs _(client)_ tests, eslint, tsc, and prettier on PRs.
- Runs dependabot weekly. You can manually run `combine` to squish all
  dependabot PRs into one PR.
- Server tests/formatting are not run on PR _(yet)_.

## Additional Scripts

| Command | Action |
|---------|--------|
| ./update.sh | Updates the dependencies of both the client and server projects. |
