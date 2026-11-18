export default defineConfig({
  base: '/Upsf/',
  plugins: [react(), tailwindcss(), viteSingleFile()],
  // El resto de tu configuración se mantiene igual
});
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
// ... otros imports

export default defineConfig({
  // ... otras configuraciones como server o resolve
  plugins: [react(), tailwindcss(), viteSingleFile()], // Esta línea debe estar dentro del objeto principal
})

