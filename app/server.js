const express = require('express');
const redis = require('redis');
const process = require('process');

const PORT = process.env.PORT || 3000;
const REDIS_HOST = process.env.REDIS_HOST || 'cache';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const app = express();

const redisClient = redis.createClient({
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  },
});

redisClient.on('error', (err) => {
  console.error(`[ERROR] Tidak bisa terhubung ke Redis (${REDIS_HOST}:${REDIS_PORT}):`, err.message);
});

redisClient.on('connect', () => {
  console.log(`[INFO] Berhasil terhubung ke Redis di ${REDIS_HOST}:${REDIS_PORT}`);
});

async function connectRedis() {
  try {
    await redisClient.connect();
  } catch (err) {
    console.error('[ERROR] Gagal saat proses connect() Redis:', err.message);
  }
}

connectRedis();

app.get('/', async (req, res) => {
  if (!redisClient.isOpen) {
     console.warn('[WARN] Mencoba akses route / tapi Redis belum terhubung.');
     return res.status(503).send('Layanan cache sedang tidak tersedia, coba lagi nanti.');
  }

  try {
    const visits = await redisClient.incr('visits');

    console.log(`[INFO] Jumlah kunjungan saat ini: ${visits}`);
    res.status(200).send(`Halo Pengunjung! Jumlah kunjungan ke halaman ini: ${visits}`);

  } catch (err) {
    console.error('[ERROR] Gagal melakukan operasi INCR di Redis:', err.message);
    res.status(500).send('Terjadi kesalahan internal saat mengakses data.');
  }
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', redis_connected: redisClient.isOpen });
});


const server = app.listen(PORT, '0.0.0.0', () => { // Dengarkan di 0.0.0.0 agar bisa diakses dari luar kontainer
  console.log(`[INFO] Server berjalan dan mendengarkan di port ${PORT}`);
});

const gracefulShutdown = async (signal) => {
  console.log(`[INFO] Menerima sinyal ${signal}. Memulai graceful shutdown...`);
  server.close(async () => {
    console.log('[INFO] Server HTTP ditutup.');
    if (redisClient.isOpen) {
      try {
        await redisClient.quit();
        console.log('[INFO] Koneksi Redis ditutup.');
      } catch (err) {
        console.error('[ERROR] Gagal menutup koneksi Redis:', err.message);
      }
    }
    process.exit(0); // Keluar dengan sukses
  });

  // Jika server tidak menutup dalam waktu tertentu, paksa keluar
  setTimeout(() => {
    console.error('[ERROR] Tidak bisa menutup koneksi dalam waktu yang ditentukan, keluar paksa.');
    process.exit(1);
  }, 10000); // Timeout 10 detik
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM')); // Sinyal dari Docker/Orkestrator
process.on('SIGINT', () => gracefulShutdown('SIGINT'));  // Sinyal dari Ctrl+C
