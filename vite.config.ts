import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const routes = [
  "/",
  "/gallery",
  "/about-us",
  "/contact-us",
  "/services/remont-na-banya",
  "/services/remont-na-apartamenti",
  "/services/mazilki",
  "/services/gipsokarton",
  "/services/stalbishta-dvorno-stroitelstvo",
  "/services/vik-instalatsii",
  "/services/boyadjijski-uslugi",
  "/services/polirane-na-estestven-kamak",
  "/services/el-instalatsii",
  "/services/lepene-na-estestven-kamak",
  "/services/lepene-na-plochki",
  "/services/shpaklovane",
];

function createSeoFiles(siteUrl: string | undefined): Plugin {
  return {
    name: "production-seo-files",
    apply: "build",
    closeBundle() {
      if (!siteUrl) {
        return;
      }

      const baseUrl = siteUrl.replace(/\/$/, "");
      const urls = routes
        .map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`)
        .join("\n");
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
      const robots = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;

      writeFileSync(resolve("dist/sitemap.xml"), sitemap, "utf8");
      writeFileSync(resolve("dist/robots.txt"), robots, "utf8");
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss(), createSeoFiles(env.VITE_SITE_URL)],
  };
});
