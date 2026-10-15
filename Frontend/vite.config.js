import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Whisperly - Anonymous Messages",
        short_name: "Whisperly",

        description:
          "A simple place for honest conversations. Receive anonymous messages with your personal Whisperly link.",

        theme_color: "#064E3B",
        background_color: "#FDFBF5",

        display: "standalone",
        start_url: "/",

        icons: [
          {
            src: "/whisperly-icon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any",
          },
        ],
      },
    }),
  ],
});