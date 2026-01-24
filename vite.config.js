import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows all hosts
    // OR whitelist your Replit URL
    allowedHosts: [
      'c2ddf0e7-bdfe-47fe-9894-a4adbdbfffb5-00-1nwkd0xoaoas1.kirk.replit.dev'
    ],
    port: 5173 // optional
  }
})