import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#1B3A8A",  // Deep blue
          700: "#2C5CC3",
          500: "#4A78C2",
        },
        gold: {
          600: "#D4AF37",
          500: "#F1C40F",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
      },
    },
  },
  plugins: [react(), tailwindcss()],
})

