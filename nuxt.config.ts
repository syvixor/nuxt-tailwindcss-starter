import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    future: { compatibilityVersion: 4 },
    vite: { plugins: [tailwindcss()] },
    css: ["~/assets/css/main.css"]
});