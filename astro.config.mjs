import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://artbrains.ru",
  trailingSlash: "always",

  // adapter: netlify(),
  adapter: node({
    mode: 'standalone',
  }),
});
