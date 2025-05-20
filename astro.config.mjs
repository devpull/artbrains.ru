import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://artbrains.ru",
  trailingSlash: "always",

  adapter: node({
    mode: "standalone",
  }),
});