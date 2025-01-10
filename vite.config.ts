import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/pwa-offline',
  plugins: [vue(), VitePWA({ registerType: 'autoUpdate', manifest: {
    theme_color: '#ffffff',
  } })],
})
