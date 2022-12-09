// https://astro.build/config
import react from "@astrojs/react";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react()],
  site:
    import.meta.env.NODE_ENV === "production"
      ? "https://broadency.com"
      : "http://localhost:3000",
  adapter: vercel(),
});
