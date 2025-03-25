import { defineConfig } from "vite";

export default defineConfig({
  // Vite'nin proje kök dizinini belirtir ve GitHub Pages'te yayınlamak için gerekli olan alt dizini belirtir
  base: process.env.NODE_ENV === "development" ? "./" : "/simple-library-app/",
  // Vite'nin proje kök dizini olarak 'src' klasörünü kullanmasını sağlar
  root: "src",
  server: {
    // Tarayıcı Başlat
    open: true,
    // Port Ayarla
    port: 9000,
    // Dış Bağlantıları Kabul Et
    cors: true,
  },
  build: {
    // Çıktıyı proje kökünde 'dist' klasörüne alır
    outDir: "../dist",
    emptyOutDir: true,
  },
});
