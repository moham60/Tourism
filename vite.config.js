import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbite],
});
