
## IVANOV STROI

### Commands

```bash
npm run dev
npm run lint
npm run build
```

### Production configuration

Copy `.env.example` to `.env` and set the public production values:

- `VITE_SITE_URL` enables canonical URLs and creates `sitemap.xml` with a matching `robots.txt` during the production build.
- `VITE_CONTACT_FORM_ENDPOINT` is an optional HTTPS endpoint that accepts the form payload as JSON. Without it, the contact forms use the visitor's email application as a fallback.

The production host must rewrite unknown client routes to `index.html`, while continuing to serve existing static assets normally. This is required for direct links to `/services/...`.

### Contact API and database

The contact API is written in JavaScript (Node.js/Express) and is designed for a cloud MongoDB Atlas database. Do not put a MongoDB connection string in a `VITE_` variable or commit it to Git.

1. Create a free MongoDB Atlas cluster and a database user with access only to this database.
2. Put its connection string in `MONGODB_URI` in a server-only `.env` file. Set `ALLOWED_ORIGINS` to the exact public website URL and `NODE_ENV=production`. For a host behind one trusted proxy (such as Render, Railway, or Fly.io), set `TRUST_PROXY=true` so rate limiting uses the visitor IP.
3. Deploy the `server` process to a Node-compatible host (for example Render, Railway, or Fly.io) and run `npm run server:start`.
4. Set `VITE_CONTACT_FORM_ENDPOINT` in the website host to the deployed `/api/contact` HTTPS URL, then rebuild the frontend.

For local development, start the API with `npm run server:dev` after configuring the server environment. The API accepts only JSON requests, validates every field on the server, uses a honeypot field, restricts submissions to three per 15 minutes per IP, enables security headers, and allows only configured browser origins. Before launch, publish a privacy notice that explains how contact data is stored and how long it is retained.
