// https://astro.build/config
import react from "@astrojs/react";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react()],
  site: "http://localhost:3000",
});
