import { defineConfig } from "vite";
console.log(
  process.env.NODE_ENV === "development"
    ? "Development Mode"
    : "Production Mode"
);
export default defineConfig({
  base: 
  root: "src", // Vite'nin proje kök dizini olarak 'src' klasörünü kullanmasını sağlar
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
