import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslintPlugin from "vite-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      react(),
      eslintPlugin({ lintOnStart: true, include: "src" }),
      VitePWA({
         registerType: "autoUpdate",
         devOptions: {
            enabled: true,
         },
         injectRegister: "auto",
         manifest: {
            name: "Awesome React",
            short_name: "Awesome React",
            description: "Awesome React - ...",
            theme_color: "#FFFFFF",
            icons: [
               {
                  src: "logo.png",
                  sizes: "192x192",
                  type: "image/png",
               },
               {
                  src: "logo.png",
                  sizes: "512x512",
                  type: "image/png",
               },
            ],
         },
      }),
   ],
});
