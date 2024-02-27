import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: '../testReact',

  // Встановлюємо шлях до вихідної папки для збудованих файлів
  outDir: '../dist',

  // Налаштовуємо базовий URL для вашого додатку
  base: '/',

  // Налаштовуємо режим розробки або продакшену
  mode: 'development', // або 'production'

  // Встановлюємо ряд параметрів для сервера розробки
  server: {
    port: 3000,
    open: true, // автоматично відкривати браузер
    proxy: {
      // Приклад налаштування проксі для пересилання запитів на інший сервер
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
})

