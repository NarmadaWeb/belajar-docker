# Panduan Lengkap Belajar Docker: Dari Nol Hingga Mahir 🐳

[![Lisensi MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Selamat datang di panduan komprehensif untuk mempelajari Docker!**

Dokumen ini dirancang untuk menjadi sumber belajar utama Anda, membawa Anda dari pemahaman dasar tentang apa itu Docker hingga mampu menggunakan fitur-fitur canggihnya untuk pengembangan, pengujian, dan deployment aplikasi modern. Panduan ini ditujukan untuk pengembang perangkat lunak, *sysadmin*, *DevOps engineer*, atau siapa saja yang ingin memahami dan memanfaatkan teknologi kontainerisasi dengan Docker.

**Mengapa README ini Begitu Panjang?**

Tujuan kami adalah menyediakan penjelasan yang **detail**, **jelas**, dan **lengkap** di satu tempat. Kami percaya bahwa kedalaman materi lebih penting daripada keringkasan semata, terutama untuk topik sekompleks dan sepenting Docker. Kami akan membahas konsep, perintah, praktik terbaik, contoh kasus, dan troubleshooting secara mendalam.

**Siapkan Kopi atau Teh Anda, Mari Mulai Petualangan Docker!** ☕

---

## Daftar Isi (Navigasi Cepat)

1.  [Pendahuluan: Apa Itu Docker & Mengapa Penting?](#1-pendahuluan-apa-itu-docker--mengapa-penting)
    *   [Masalah Klasik: "Works on My Machine!"](#masalah-klasik-works-on-my-machine)
    *   [Solusi: Kontainerisasi](#solusi-kontainerisasi)
    *   [Apa Itu Docker?](#apa-itu-docker)
    *   [Docker vs. Virtual Machine (VM)](#docker-vs-virtual-machine-vm)
    *   [Keuntungan Menggunakan Docker](#keuntungan-menggunakan-docker)
2.  [Prasyarat](#2-prasyarat)
3.  [Instalasi Docker](#3-instalasi-docker)
    *   [Docker Desktop (Windows & macOS)](#docker-desktop-windows--macos)
    *   [Docker Engine (Linux)](#docker-engine-linux)
    *   [Verifikasi Instalasi](#verifikasi-instalasi)
    *   [Menjalankan Docker tanpa `sudo` (Linux Post-installation)](#menjalankan-docker-tanpa-sudo-linux-post-installation)
4.  [Konsep Inti Docker](#4-konsep-inti-docker)
    *   [Images (Citra)](#images-citra)
    *   [Containers (Kontainer)](#containers-kontainer)
    *   [Dockerfile](#dockerfile)
    *   [Volumes (Volume)](#volumes-volume)
    *   [Networking (Jaringan)](#networking-jaringan)
    *   [Registry (Registri) & Docker Hub](#registry-registri--docker-hub)
    *   [Docker Engine (Mesin Docker)](#docker-engine-mesin-docker)
    *   [Docker Client (Klien Docker)](#docker-client-klien-docker)
    *   [Docker Compose](#docker-compose)
5.  [Perintah Dasar Docker (CLI)](#5-perintah-dasar-docker-cli)
    *   [Manajemen Kontainer](#manajemen-kontainer)
        *   [`docker run`](#docker-run)
        *   [`docker ps`](#docker-ps)
        *   [`docker stop`](#docker-stop)
        *   [`docker start`](#docker-start)
        *   [`docker restart`](#docker-restart)
        *   [`docker rm`](#docker-rm)
        *   [`docker logs`](#docker-logs)
        *   [`docker exec`](#docker-exec)
        *   [`docker inspect`](#docker-inspect)
    *   [Manajemen Image](#manajemen-image)
        *   [`docker images`](#docker-images)
        *   [`docker pull`](#docker-pull)
        *   [`docker build`](#docker-build)
        *   [`docker rmi`](#docker-rmi)
        *   [`docker tag`](#docker-tag)
        *   [`docker push`](#docker-push)
        *   [`docker history`](#docker-history)
    *   [Perintah Sistem](#perintah-sistem)
        *   [`docker version`](#docker-version)
        *   [`docker info`](#docker-info)
        *   [`docker system prune`](#docker-system-prune)
        *   [`docker login`/`logout`](#docker-login--logout)
    *   [Manajemen Volume](#manajemen-volume)
        *   [`docker volume create`](#docker-volume-create)
        *   [`docker volume ls`](#docker-volume-ls)
        *   [`docker volume inspect`](#docker-volume-inspect)
        *   [`docker volume rm`](#docker-volume-rm)
        *   [`docker volume prune`](#docker-volume-prune)
    *   [Manajemen Jaringan](#manajemen-jaringan)
        *   [`docker network create`](#docker-network-create)
        *   [`docker network ls`](#docker-network-ls)
        *   [`docker network inspect`](#docker-network-inspect)
        *   [`docker network connect`](#docker-network-connect)
        *   [`docker network disconnect`](#docker-network-disconnect)
        *   [`docker network rm`](#docker-network-rm)
        *   [`docker network prune`](#docker-network-prune)
6.  [Dockerfile Mendalam: Membangun Image Anda Sendiri](#6-dockerfile-mendalam-membangun-image-anda-sendiri)
    *   [Struktur Dasar Dockerfile](#struktur-dasar-dockerfile)
    *   [Instruksi Umum Dockerfile](#instruksi-umum-dockerfile)
        *   [`FROM`](#from)
        *   [`LABEL`](#label)
        *   [`RUN`](#run)
        *   [`CMD`](#cmd)
        *   [`ENTRYPOINT`](#entrypoint)
        *   [`WORKDIR`](#workdir)
        *   [`COPY`](#copy)
        *   [`ADD`](#add)
        *   [`EXPOSE`](#expose)
        *   [`ENV`](#env)
        *   [`ARG`](#arg)
        *   [`VOLUME`](#volume-instruction)
        *   [`USER`](#user)
        *   [`HEALTHCHECK`](#healthcheck)
        *   [`SHELL`](#shell)
    *   [Praktik Terbaik Menulis Dockerfile](#praktik-terbaik-menulis-dockerfile)
        *   Gunakan Base Image Spesifik & Minimalis
        *   Manfaatkan Cache Layer Build
        *   Gabungkan Perintah `RUN`
        *   Gunakan `.dockerignore`
        *   Pahami Perbedaan `COPY` vs `ADD`
        *   Pahami Perbedaan `CMD` vs `ENTRYPOINT`
        *   Gunakan `WORKDIR` daripada `RUN cd ...`
        *   Ekspos Port dengan `EXPOSE`
        *   Bersihkan Artefak Build
        *   Gunakan Multi-Stage Builds
    *   [Contoh Dockerfile (Node.js, Python, Java)](#contoh-dockerfile-nodejs-python-java)
    *   [Multi-Stage Builds](#multi-stage-builds)
7.  [Volume & Persistensi Data](#7-volume--persistensi-data)
    *   [Mengapa Persistensi Data Penting?](#mengapa-persistensi-data-penting)
    *   [Jenis Penyimpanan Data di Docker](#jenis-penyimpanan-data-di-docker)
        *   [Volumes (Named Volumes)](#volumes-named-volumes)
        *   [Bind Mounts](#bind-mounts)
        *   [tmpfs Mounts (Linux)](#tmpfs-mounts-linux)
    *   [Kapan Menggunakan Apa?](#kapan-menggunakan-apa)
    *   [Menggunakan Volume dengan `docker run`](#menggunakan-volume-dengan-docker-run)
    *   [Mengelola Volume](#mengelola-volume)
    *   [Backup, Restore, dan Migrasi Volume](#backup-restore-dan-migrasi-volume)
8.  [Jaringan Docker (Networking)](#8-jaringan-docker-networking)
    *   [Konsep Dasar Jaringan Kontainer](#konsep-dasar-jaringan-kontainer)
    *   [Driver Jaringan Bawaan Docker](#driver-jaringan-bawaan-docker)
        *   [`bridge` (Default)](#bridge-default)
        *   [`host`](#host)
        *   [`none`](#none)
        *   [`overlay`](#overlay)
        *   [`macvlan`](#macvlan)
    *   [Jaringan Bridge (User-Defined)](#jaringan-bridge-user-defined)
    *   [Publikasi Port (`-p` atau `--publish`)](#publikasi-port--p-atau---publish)
    *   [Komunikasi Antar Kontainer](#komunikasi-antar-kontainer)
    *   [DNS Internal Docker](#dns-internal-docker)
    *   [Mengelola Jaringan](#mengelola-jaringan)
    *   [Contoh Kasus Jaringan](#contoh-kasus-jaringan)
9.  [Docker Compose: Mengelola Aplikasi Multi-Kontainer](#9-docker-compose-mengelola-aplikasi-multi-kontainer)
    *   [Apa Itu Docker Compose?](#apa-itu-docker-compose)
    *   [Mengapa Menggunakan Docker Compose?](#mengapa-menggunakan-docker-compose)
    *   [Instalasi Docker Compose](#instalasi-docker-compose)
    *   [File `docker-compose.yml`](#file-docker-composeyml)
        *   Struktur Dasar (`version`, `services`, `volumes`, `networks`)
        *   Konfigurasi `services` (`image`, `build`, `ports`, `volumes`, `environment`, `depends_on`, `networks`, dll.)
    *   [Perintah Dasar `docker-compose`](#perintah-dasar-docker-compose)
        *   [`docker-compose up`](#docker-compose-up)
        *   [`docker-compose down`](#docker-compose-down)
        *   [`docker-compose ps`](#docker-compose-ps)
        *   [`docker-compose logs`](#docker-compose-logs)
        *   [`docker-compose exec`](#docker-compose-exec)
        *   [`docker-compose build`](#docker-compose-build)
        *   [`docker-compose pull`](#docker-compose-pull)
        *   [`docker-compose stop`/`start`/`restart`](#docker-compose-stop--start--restart)
        *   [`docker-compose rm`](#docker-compose-rm)
    *   [Contoh Aplikasi Multi-Kontainer (misal: Web App + Database + Cache)](#contoh-aplikasi-multi-kontainer-misal-web-app--database--cache)
    *   [Variabel Lingkungan & File `.env`](#variabel-lingkungan--file-env)
    *   [Menggunakan Profil](#menggunakan-profil)
    *   [Meng-override Konfigurasi](#meng-override-konfigurasi)
10. [Docker Hub & Registry Lainnya](#10-docker-hub--registry-lainnya)
    *   [Apa Itu Registry?](#apa-itu-registry)
    *   [Docker Hub](#docker-hub)
        *   Akun Docker Hub
        *   Repositori Publik & Privat
        *   Mencari Image (`docker search`)
        *   Menarik Image (`docker pull`)
        *   Memberi Tag pada Image (`docker tag`)
        *   Mendorong Image (`docker push`)
        *   Automated Builds (Build Otomatis)
    *   [Registry Privat](#registry-privat)
        *   Mengapa Menggunakan Registry Privat?
        *   Menjalankan Registry Lokal (`docker run registry:2`)
        *   Registry Pihak Ketiga (AWS ECR, Google GCR, Azure ACR, GitLab Container Registry, dll.)
11. [Keamanan Docker (Docker Security)](#11-keamanan-docker-docker-security)
    *   [Prinsip Dasar Keamanan Kontainer](#prinsip-dasar-keamanan-kontainer)
    *   [Keamanan Image](#keamanan-image)
        *   Gunakan Base Image Terpercaya & Minimalis
        *   Jangan Menyimpan Rahasia dalam Image
        *   Pindai Kerentanan (Image Scanning)
        *   Verifikasi Image (Content Trust / Notary)
    *   [Keamanan Kontainer saat Runtime](#keamanan-kontainer-saat-runtime)
        *   Jalankan Kontainer sebagai Non-Root User
        *   Gunakan Sistem File Read-Only
        *   Batasi Resource (CPU, Memori)
        *   Manajemen Kapabilitas Linux (Capabilities)
        *   Profil Keamanan (Seccomp, AppArmor)
    *   [Keamanan Jaringan](#keamanan-jaringan-1)
    *   [Manajemen Rahasia (Secrets Management)](#manajemen-rahasia-secrets-management)
        *   Docker Secrets (untuk Swarm)
        *   Mounting File Rahasia
        *   Variabel Lingkungan (Kurang Aman)
        *   Solusi Pihak Ketiga (HashiCorp Vault)
    *   [Keamanan Docker Daemon](#keamanan-docker-daemon)
    *   [Audit & Logging](#audit--logging)
12. [Tips, Trik, & Praktik Terbaik (Ringkasan)](#12-tips-trik--praktik-terbaik-ringkasan)
13. [Troubleshooting Umum](#13-troubleshooting-umum)
    *   [Kontainer Tidak Mau Start / Langsung Exit](#kontainer-tidak-mau-start--langsung-exit)
    *   [Error "Bind for 0.0.0.0:PORT failed: port is already allocated"](#error-bind-for-0000port-failed-port-is-already-allocated)
    *   [Masalah Konektivitas Jaringan](#masalah-konektivitas-jaringan)
    *   [Masalah Perizinan (Permission Denied) pada Volume/Bind Mount](#masalah-perizinan-permission-denied-pada-volume-bind-mount)
    *   [Build Dockerfile Gagal](#build-dockerfile-gagal)
    *   [Kehabisan Ruang Disk](#kehabisan-ruang-disk)
    *   [Performa Lambat](#performa-lambat)
14. [Topik Lanjutan & Ekosistem Docker](#14-topik-lanjutan--ekosistem-docker)
    *   [Docker Swarm (Orkestrasi Bawaan)](#docker-swarm-orkestrasi-bawaan)
    *   [Kubernetes (K8s) & Docker](#kubernetes-k8s--docker)
    *   [Monitoring & Logging Kontainer (Prometheus, Grafana, ELK/EFK Stack)](#monitoring--logging-kontainer-prometheus-grafana-elk-efk-stack)
    *   [CI/CD dengan Docker](#ci-cd-dengan-docker)
    *   [BuildKit](#buildkit)
    *   [Docker Extensions](#docker-extensions)
15. [Sumber Daya Tambahan](#15-sumber-daya-tambahan)
16. [Kontribusi](#16-kontribusi)
17. [Lisensi](#17-lisensi)

---

## 1. Pendahuluan: Apa Itu Docker & Mengapa Penting?

Sebelum menyelam ke perintah dan konfigurasi, mari kita pahami *mengapa* Docker ada dan masalah apa yang coba dipecahkannya.

### Masalah Klasik: "Works on My Machine!" 🤷‍♀️🤷‍♂️

Setiap pengembang pasti pernah mengalami ini. Anda membuat aplikasi, berjalan sempurna di laptop Anda, tetapi ketika diserahkan ke rekan kerja, tim QA, atau di-*deploy* ke server *staging*/*production*, aplikasi tersebut gagal berjalan atau berperilaku aneh.

Mengapa ini terjadi? Biasanya karena perbedaan lingkungan:
*   Versi sistem operasi yang berbeda.
*   Versi *runtime* (Node.js, Python, Java, PHP) yang berbeda.
*   *Library* atau *dependency* sistem yang hilang atau versinya tidak cocok.
*   Konfigurasi lingkungan (variabel lingkungan, path file) yang berbeda.
*   Perbedaan konfigurasi layanan pendukung (database, message queue, cache).

Perbedaan ini menyebabkan inkonsistensi dan membuang banyak waktu untuk debugging masalah lingkungan, bukan masalah logika aplikasi itu sendiri.

### Solusi: Kontainerisasi

Kontainerisasi adalah sebuah pendekatan untuk membungkus (mengemas) aplikasi beserta semua *dependency*-nya (kode, runtime, library sistem, konfigurasi) ke dalam satu unit standar yang disebut **kontainer**. Kontainer ini terisolasi dari lingkungan luarnya (host OS dan kontainer lain) tetapi berbagi *kernel* OS dengan *host*.

Dengan kontainerisasi:
1.  **Konsistensi Lingkungan:** Aplikasi akan berjalan dengan cara yang sama di mana pun kontainer dijalankan (laptop pengembang, server pengujian, cloud), karena lingkungannya sudah dikemas di dalam kontainer.
2.  **Portabilitas:** Kontainer mudah dipindahkan antar mesin tanpa perlu instalasi ulang dependency.
3.  **Isolasi:** Kontainer berjalan terisolasi satu sama lain dan dari host, meningkatkan keamanan dan stabilitas.
4.  **Efisiensi Resource:** Kontainer lebih ringan daripada Virtual Machine (VM) karena tidak memerlukan OS tamu sendiri; mereka berbagi kernel host. Ini berarti start-up lebih cepat dan penggunaan memori/CPU lebih sedikit per instansi aplikasi.

### Apa Itu Docker?

**Docker** adalah platform *open-source* terdepan untuk mengembangkan, mengirim (ship), dan menjalankan aplikasi menggunakan teknologi kontainerisasi. Docker menyediakan alat dan platform untuk:
*   **Membangun (Build):** Membuat *image* kontainer yang berisi aplikasi Anda dan lingkungannya menggunakan file resep bernama `Dockerfile`.
*   **Menjalankan (Run):** Menjalankan *image* tersebut sebagai *kontainer* yang terisolasi di mesin mana pun yang memiliki Docker terinstal.
*   **Berbagi (Share):** Menyimpan dan mendistribusikan *image* melalui *registry* seperti Docker Hub atau registry privat.
*   **Mengelola (Manage):** Mengelola siklus hidup kontainer, jaringan, dan penyimpanan data.

Docker mempopulerkan kontainerisasi dan membuatnya mudah diakses oleh pengembang dan *sysadmin*.

### Docker vs. Virtual Machine (VM)

Seringkali Docker dibandingkan dengan Virtual Machine (VM). Keduanya menyediakan isolasi, tetapi cara kerjanya berbeda:

| Fitur           | Virtual Machine (VM)                       | Docker Container                      |
| :-------------- | :----------------------------------------- | :------------------------------------ |
| **Isolasi**     | Isolasi **level Hardware**                 | Isolasi **level Proses (OS)**         |
| **OS**          | Setiap VM punya **OS tamu sendiri**        | Berbagi **Kernel OS Host**            |
| **Ukuran**      | Besar (Gigabytes)                          | Kecil (Megabytes)                     |
| **Start-up**    | Lambat (Menit)                             | Cepat (Detik/Milidetik)             |
| **Overhead**    | Tinggi (Memori & CPU untuk OS Tamu)      | Rendah                                |
| **Kepadatan**   | Lebih sedikit VM per Host                  | Lebih banyak Kontainer per Host       |
| **Penggunaan**  | Menjalankan OS berbeda, isolasi penuh      | Mengemas & menjalankan aplikasi       |

**Analogi:**
*   **VM:** Seperti menyewa seluruh **rumah** (lengkap dengan pondasi, struktur, pipa, listrik) untuk setiap aplikasi. Setiap rumah butuh sumber dayanya sendiri.
*   **Docker Container:** Seperti menyewa **apartemen** dalam satu gedung besar. Setiap apartemen terisolasi, tetapi berbagi infrastruktur dasar gedung (pondasi, pipa utama, listrik utama = Kernel OS). Lebih efisien.

### Keuntungan Menggunakan Docker

*   **Pengembangan Cepat & Konsisten:** Pengembang dapat bekerja di lingkungan yang identik dengan produksi.
*   **Deployment Cepat & Andal:** "Build once, run anywhere." Mengurangi masalah terkait lingkungan saat deployment.
*   **Portabilitas:** Aplikasi dalam kontainer dapat berjalan di laptop, server fisik, VM, atau cloud tanpa modifikasi.
*   **Isolasi Aplikasi:** Mencegah konflik antar aplikasi atau dependency.
*   **Skalabilitas Mudah:** Mudah untuk menambah atau mengurangi jumlah kontainer aplikasi sesuai beban.
*   **Efisiensi Resource:** Menjalankan lebih banyak aplikasi di hardware yang sama dibandingkan VM.
*   **Arsitektur Microservices:** Sangat cocok untuk membangun dan mengelola aplikasi berbasis microservices.
*   **CI/CD (Continuous Integration/Continuous Deployment):** Memfasilitasi pipeline build, test, dan deploy yang otomatis dan konsisten.

---

## 2. Prasyarat

Sebelum memulai, pastikan Anda memiliki:

1.  **Pemahaman Dasar Sistem Operasi:** Familiar dengan konsep dasar OS (Linux, macOS, atau Windows).
2.  **Pemahaman Dasar Command Line/Terminal:** Anda harus nyaman menggunakan terminal atau command prompt untuk menjalankan perintah.
3.  **Koneksi Internet:** Diperlukan untuk mengunduh Docker dan image Docker.
4.  **Hak Akses Administrator/Root:** Diperlukan untuk instalasi Docker di sistem Anda.
5.  **(Opsional) Pemahaman Dasar Jaringan:** Konsep seperti IP address, port, DNS akan membantu.
6.  **(Opsional) Pemahaman Dasar Git:** Berguna jika Anda ingin mengelola Dockerfile dan kode aplikasi Anda dalam version control.

---

## 3. Instalasi Docker

Proses instalasi Docker sedikit berbeda tergantung pada sistem operasi Anda.

### Docker Desktop (Windows & macOS)

Cara termudah untuk memulai Docker di Windows dan macOS adalah dengan menginstal **Docker Desktop**. Ini adalah aplikasi *native* yang mencakup Docker Engine, Docker CLI client, Docker Compose, Docker Content Trust, Kubernetes, dan Credential Helper.

1.  **Unduh:** Kunjungi [situs web resmi Docker](https://www.docker.com/products/docker-desktop/) dan unduh installer untuk sistem operasi Anda (Windows atau macOS).
2.  **Persyaratan Sistem:** Pastikan sistem Anda memenuhi persyaratan (misalnya, versi OS, virtualisasi hardware diaktifkan di BIOS/UEFI untuk Windows dengan backend WSL 2 atau Hyper-V).
3.  **Instalasi:** Jalankan installer dan ikuti petunjuk di layar. Proses ini mungkin memerlukan restart.
    *   **Windows:** Anda mungkin akan diminta memilih antara backend WSL 2 (disarankan) atau Hyper-V. WSL 2 umumnya memberikan performa yang lebih baik.
    *   **macOS:** Seret ikon Docker ke folder Aplikasi Anda.
4.  **Jalankan Docker Desktop:** Setelah instalasi, jalankan aplikasi Docker Desktop. Anda akan melihat ikon paus Docker di system tray (Windows) atau menu bar (macOS). Mungkin perlu beberapa saat untuk memulai saat pertama kali dijalankan.

### Docker Engine (Linux)

Untuk lingkungan server Linux atau jika Anda tidak ingin menggunakan Docker Desktop, Anda dapat menginstal **Docker Engine** secara langsung. Prosesnya bervariasi tergantung distribusi Linux Anda (Ubuntu, Debian, CentOS, Fedora, dll.).

**Contoh Instalasi di Ubuntu:**

1.  **Update Apt Index:**
    ```bash
    sudo apt update
    ```
2.  **Instal Paket Prasyarat:**
    ```bash
    sudo apt install -y apt-transport-https ca-certificates curl software-properties-common gnupg lsb-release
    ```
3.  **Tambahkan Kunci GPG Resmi Docker:**
    ```bash
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    ```
4.  **Tambahkan Repositori Docker:**
    ```bash
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```
5.  **Update Apt Index (lagi):**
    ```bash
    sudo apt update
    ```
6.  **Instal Docker Engine, CLI, dan Containerd:**
    ```bash
    sudo apt install -y docker-ce docker-ce-cli containerd.io
    ```
    *   `docker-ce`: Docker Community Edition (Engine).
    *   `docker-ce-cli`: Docker Command Line Interface.
    *   `containerd.io`: Runtime kontainer level rendah.

7.  **Mulai dan Aktifkan Docker Service:**
    ```bash
    sudo systemctl start docker
    sudo systemctl enable docker # Agar otomatis start saat boot
    ```

**Untuk Distribusi Linux Lain:** Silakan merujuk ke [dokumentasi instalasi Docker resmi](https://docs.docker.com/engine/install/) untuk instruksi spesifik distro Anda.

### Verifikasi Instalasi

Setelah instalasi selesai (baik Docker Desktop maupun Docker Engine), buka terminal atau command prompt Anda dan jalankan perintah berikut:

```bash
docker --version
```

Ini akan menampilkan versi Docker CLI yang terinstal. Selanjutnya, coba jalankan kontainer "hello-world" untuk memastikan Docker Engine berjalan dengan benar:

```bash
docker run hello-world
```

Jika instalasi berhasil, Anda akan melihat pesan dari Docker yang menjelaskan bahwa instalasi Anda tampaknya bekerja dengan benar. Docker akan:
1.  Mencari image `hello-world` secara lokal.
2.  Jika tidak ditemukan, mengunduhnya dari Docker Hub (registry default).
3.  Menjalankan image tersebut dalam sebuah kontainer baru.
4.  Kontainer `hello-world` akan mencetak pesan ke terminal Anda dan kemudian keluar.

### Menjalankan Docker tanpa `sudo` (Linux Post-installation)

Secara default di Linux, daemon Docker mengikat ke Unix socket yang dimiliki oleh user `root`, dan group lain tidak dapat mengaksesnya. Oleh karena itu, Anda perlu menggunakan `sudo` untuk setiap perintah `docker`.

Untuk menjalankan `docker` tanpa `sudo`, Anda perlu menambahkan user Anda ke group `docker`:

1.  **Buat Grup `docker` (jika belum ada):**
    ```bash
    sudo groupadd docker
    ```
    (Biasanya grup ini sudah dibuat saat instalasi Docker Engine).

2.  **Tambahkan User Anda ke Grup `docker`:**
    ```bash
    sudo usermod -aG docker $USER
    ```
    Ganti `$USER` dengan username Anda jika perlu (biasanya variabel `$USER` sudah benar).

3.  **Logout dan Login Kembali (atau Reboot):** Agar perubahan keanggotaan grup diterapkan, Anda perlu logout sepenuhnya dari sesi Anda dan login kembali. Cara lain yang lebih cepat adalah menjalankan:
    ```bash
    newgrp docker
    ```
    Perintah ini akan memulai subshell baru dengan keanggotaan grup yang diperbarui. Namun, logout/login adalah cara yang paling pasti.

4.  **Verifikasi:** Setelah login kembali, coba jalankan perintah `docker` tanpa `sudo`:
    ```bash
    docker run hello-world
    ```
    Seharusnya sekarang berjalan tanpa memerlukan `sudo`.

**Peringatan Keamanan:** Menambahkan user ke grup `docker` memberikan hak setara dengan `root`, karena mereka dapat mengontrol Docker daemon. Berhati-hatilah siapa saja yang Anda tambahkan ke grup ini.

---

## 4. Konsep Inti Docker

Memahami konsep-konsep dasar ini sangat penting sebelum Anda mulai menggunakan Docker secara efektif.

### Images (Citra)

*   **Apa itu?** Image adalah *template* read-only (hanya bisa dibaca) yang berisi instruksi untuk membuat kontainer Docker. Image mencakup semua yang diperlukan untuk menjalankan aplikasi: kode, runtime, library, variabel lingkungan, dan file konfigurasi.
*   **Bagaimana dibuat?** Image dibangun berdasarkan instruksi yang ditulis dalam `Dockerfile`.
*   **Struktur:** Image terdiri dari lapisan-lapisan (layers) file sistem yang ditumpuk. Setiap instruksi dalam Dockerfile (seperti `RUN`, `COPY`, `ADD`) biasanya membuat layer baru. Lapisan bersifat read-only.
*   **Sumber:** Anda bisa mendapatkan image dari:
    *   **Docker Hub:** Registry publik default yang berisi ribuan image siap pakai (misalnya, `ubuntu`, `nginx`, `node`, `python`).
    *   **Registry Lain:** Registry privat perusahaan atau penyedia cloud (AWS ECR, GCR, Azure ACR).
    *   **Membangun Sendiri:** Menggunakan perintah `docker build` dan sebuah `Dockerfile`.
*   **Analogi:** Pikirkan Image sebagai **cetak biru (blueprint)** atau **resep** untuk membuat rumah (kontainer).

### Containers (Kontainer)

*   **Apa itu?** Kontainer adalah **instansi yang berjalan (running instance)** dari sebuah image Docker. Kontainer adalah unit yang hidup, bernafas, dan terisolasi tempat aplikasi Anda benar-benar berjalan.
*   **Sifat:**
    *   **Terisolasi:** Memiliki proses, jaringan, dan filesystem-nya sendiri, terpisah dari host dan kontainer lain (secara default).
    *   **Ephemeral (Sementara):** Ketika kontainer dihapus, semua perubahan yang dibuat di dalam filesystem-nya (yang tidak disimpan di volume) akan hilang.
    *   **Berbasis Image:** Dibuat dari image Docker. Anda dapat membuat banyak kontainer dari image yang sama.
*   **Lapisan Tambahan:** Saat kontainer dibuat, Docker menambahkan lapisan tipis yang bisa ditulis (writable layer) di atas lapisan-lapisan image read-only. Semua perubahan (membuat, memodifikasi, menghapus file) terjadi di lapisan ini.
*   **Analogi:** Jika Image adalah cetak biru, maka Kontainer adalah **rumah** yang sebenarnya dibangun berdasarkan cetak biru tersebut. Anda bisa membangun banyak rumah identik dari satu cetak biru.

### Dockerfile

*   **Apa itu?** `Dockerfile` adalah file teks biasa yang berisi serangkaian instruksi langkah demi langkah tentang cara membangun sebuah image Docker. Docker membaca instruksi ini dan menjalankannya secara berurutan untuk merakit image.
*   **Fungsi:** Mengotomatiskan proses pembuatan image, memastikan image selalu dibangun dengan cara yang sama setiap saat (reproducible builds).
*   **Isi:** Terdiri dari instruksi seperti `FROM` (menentukan base image), `RUN` (menjalankan perintah), `COPY` (menyalin file dari host ke image), `WORKDIR` (mengatur direktori kerja), `EXPOSE` (mendokumentasikan port), `CMD` atau `ENTRYPOINT` (perintah default saat kontainer dijalankan).
*   **Analogi:** `Dockerfile` adalah **daftar instruksi rinci** dalam resep (Image) untuk membangun rumah (Kontainer).

### Volumes (Volume)

*   **Apa itu?** Volume adalah mekanisme yang disukai Docker untuk **menyimpan data persisten** yang dihasilkan oleh dan digunakan oleh kontainer Docker.
*   **Mengapa Perlu?** Kontainer bersifat ephemeral. Jika Anda menyimpan data penting (seperti data database, file yang diunggah pengguna) langsung di dalam lapisan writable kontainer, data itu akan hilang saat kontainer dihapus. Volume memungkinkan data untuk "hidup" di luar siklus hidup kontainer.
*   **Cara Kerja:** Volume dikelola oleh Docker (`/var/lib/docker/volumes/` di Linux) dan dapat di-mount (dipasang) ke dalam satu atau lebih kontainer. Docker menangani di mana volume disimpan di host filesystem.
*   **Keuntungan:** Lebih mudah untuk backup, migrasi, dan berbagi data antar kontainer. Performa lebih baik untuk operasi I/O berat dibandingkan bind mount pada beberapa platform.
*   **Jenis Lain (Dibahas Nanti):** Selain *named volumes*, ada juga *bind mounts* (memetakan direktori/file host langsung ke kontainer) dan *tmpfs mounts* (menyimpan data hanya di memori host).
*   **Analogi:** Volume adalah seperti **lemari penyimpanan eksternal** atau **brankas** yang Anda hubungkan ke rumah (kontainer). Isi lemari tetap ada meskipun rumahnya dihancurkan dan dibangun kembali.

### Networking (Jaringan)

*   **Apa itu?** Jaringan Docker memungkinkan kontainer untuk berkomunikasi satu sama lain dan dengan dunia luar (host atau jaringan eksternal).
*   **Fitur:** Docker menyediakan sistem jaringan bawaan yang fleksibel. Secara default, setiap kontainer terisolasi jaringannya.
*   **Driver Jaringan:** Docker menggunakan driver jaringan untuk menyediakan fungsionalitas jaringan yang berbeda:
    *   `bridge`: Jaringan default. Kontainer dalam jaringan bridge yang sama dapat berkomunikasi satu sama lain menggunakan nama kontainer sebagai hostname (di jaringan user-defined). Perlu pemetaan port untuk akses dari luar host.
    *   `host`: Kontainer berbagi namespace jaringan host. Tidak ada isolasi jaringan.
    *   `none`: Menonaktifkan semua jaringan untuk kontainer.
    *   `overlay`: Untuk jaringan multi-host (digunakan dalam Docker Swarm).
    *   `macvlan`: Memberikan alamat MAC ke kontainer, membuatnya tampak seperti perangkat fisik di jaringan.
*   **Komunikasi:** Kontainer dapat diekspos ke jaringan host melalui **pemetaan port (port mapping)**. Kontainer dalam jaringan (user-defined) yang sama dapat saling menemukan menggunakan **DNS internal Docker**.
*   **Analogi:** Jaringan Docker adalah seperti **sistem jalan dan alamat** yang memungkinkan rumah-rumah (kontainer) berkomunikasi satu sama lain dan dengan dunia luar. Anda bisa memiliki jalan privat (jaringan bridge user-defined) atau langsung terhubung ke jalan utama (jaringan host).

### Registry (Registri) & Docker Hub

*   **Apa itu Registry?** Registry adalah sistem penyimpanan dan distribusi untuk image Docker. Ini adalah tempat Anda menyimpan image yang telah Anda bangun dan tempat Anda menarik (pull) image yang dibuat oleh orang lain.
*   **Docker Hub:** Adalah registry **publik** terbesar dan default yang dikelola oleh Docker Inc. Berisi ribuan image resmi dan image yang dibuat oleh komunitas. Anda dapat membuat akun gratis untuk menyimpan image publik Anda sendiri (dan sejumlah image privat terbatas).
*   **Registry Privat:** Organisasi seringkali menggunakan registry privat untuk menyimpan image internal mereka karena alasan keamanan, kepatuhan, atau kontrol. Contohnya termasuk Docker Trusted Registry (bagian dari Docker Enterprise), AWS Elastic Container Registry (ECR), Google Container Registry (GCR), Azure Container Registry (ACR), GitLab Container Registry, Harbor, dll. Anda bahkan dapat menjalankan instance registry Anda sendiri.
*   **Perintah:** `docker pull` (menarik image), `docker push` (mendorong image ke registry), `docker login` (autentikasi ke registry).
*   **Analogi:** Registry adalah seperti **perpustakaan besar** atau **gudang pusat** untuk menyimpan cetak biru (image). Docker Hub adalah perpustakaan umum terbesar, sementara registry privat adalah perpustakaan pribadi atau gudang perusahaan.

### Docker Engine (Mesin Docker)

*   **Apa itu?** Ini adalah "jantung" dari Docker. Docker Engine adalah aplikasi client-server dengan komponen utama:
    *   **Server (Daemon):** Proses latar belakang (`dockerd`) yang berjalan lama. Bertugas membangun dan mengelola image, kontainer, jaringan, dan volume Docker. Daemon mendengarkan permintaan API Docker.
    *   **REST API:** Antarmuka yang digunakan oleh klien untuk berkomunikasi dengan daemon Docker.
    *   **Client (CLI):** Alat command-line (`docker`) yang memungkinkan pengguna berinteraksi dengan daemon Docker melalui API.
*   **Cara Kerja:** Ketika Anda menjalankan perintah seperti `docker run ...`, Docker client mengirimkan instruksi tersebut ke Docker daemon melalui API. Daemon kemudian melakukan pekerjaan sebenarnya (menarik image, membuat, dan menjalankan kontainer).
*   **Lokasi:** Daemon berjalan di mesin host Anda. Client bisa berada di mesin yang sama atau mesin yang berbeda.

### Docker Client (Klien Docker)

*   **Apa itu?** `docker` CLI adalah cara utama pengguna berinteraksi dengan Docker.
*   **Fungsi:** Menerima perintah dari pengguna (misalnya `docker build`, `docker pull`, `docker run`) dan menerjemahkannya menjadi panggilan API ke Docker Daemon.
*   **Interaksi:** Bisa berkomunikasi dengan daemon lokal (melalui Unix socket di Linux/macOS atau named pipe di Windows) atau daemon jarak jauh (melalui TCP).

### Docker Compose

*   **Apa itu?** Docker Compose adalah alat terpisah (sering dibundel dengan Docker Desktop) untuk **mendefinisikan dan menjalankan aplikasi Docker multi-kontainer**.
*   **Mengapa Perlu?** Aplikasi nyata seringkali terdiri dari beberapa layanan yang saling bergantung (misalnya, web server, database, cache, message queue). Mengelola kontainer-kontainer ini satu per satu dengan `docker run` bisa merepotkan.
*   **Cara Kerja:** Anda menggunakan file konfigurasi YAML (`docker-compose.yml`) untuk mendefinisikan layanan, jaringan, dan volume aplikasi Anda. Kemudian, dengan satu perintah (`docker-compose up`), Anda dapat membuat dan memulai semua layanan tersebut.
*   **Manfaat:** Menyederhanakan alur kerja pengembangan dan pengujian untuk aplikasi multi-kontainer.
*   **Analogi:** Jika `docker run` adalah membangun satu rumah, Docker Compose adalah seperti **rencana tata kota** yang mendefinisikan bagaimana beberapa rumah, jalan, dan utilitas (layanan, jaringan, volume) dibangun dan dihubungkan bersama untuk membentuk sebuah kompleks atau lingkungan.

---

## 5. Perintah Dasar Docker (CLI)

Sekarang mari kita pelajari perintah-perintah `docker` yang paling sering digunakan. Buka terminal Anda dan cobalah!

*(Catatan: Banyak perintah memiliki banyak opsi/flag. Gunakan `docker <perintah> --help` untuk melihat semua opsi yang tersedia. Contoh di bawah ini menunjukkan penggunaan umum.)*

### Manajemen Kontainer

Perintah untuk mengelola siklus hidup kontainer Anda.

#### `docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

Perintah paling fundamental. Membuat dan memulai kontainer baru dari sebuah image.

*   **Penggunaan Umum:**
    *   Menjalankan kontainer di latar belakang (detached mode):
        ```bash
        # Jalankan kontainer Nginx di background, petakan port 8080 host ke port 80 kontainer
        docker run -d -p 8080:80 --name mynginx nginx
        ```
        *   `-d`: Detached mode (jalan di background).
        *   `-p host_port:container_port`: Memetakan port.
        *   `--name container_name`: Memberi nama pada kontainer.
        *   `nginx`: Nama image yang digunakan.
    *   Menjalankan kontainer interaktif dengan terminal:
        ```bash
        # Jalankan kontainer Ubuntu, buka sesi bash interaktif
        docker run -it --rm ubuntu bash
        ```
        *   `-i`: Interactive (menjaga STDIN tetap terbuka).
        *   `-t`: Allocate a pseudo-TTY (membuat terminal).
        *   `--rm`: Otomatis hapus kontainer saat keluar.
        *   `ubuntu`: Nama image.
        *   `bash`: Perintah yang dijalankan di dalam kontainer.
    *   Menjalankan kontainer dan me-mount volume:
        ```bash
        # Jalankan kontainer Nginx, mount direktori 'html' saat ini ke '/usr/share/nginx/html' di kontainer
        docker run -d -p 8081:80 -v "$(pwd)/html":/usr/share/nginx/html nginx
        ```
        *   `-v host_path:container_path`: Mount volume (bind mount dalam kasus ini).

#### `docker ps [OPTIONS]`

Menampilkan daftar kontainer yang sedang berjalan.

*   **Penggunaan Umum:**
    *   Tampilkan kontainer yang sedang berjalan:
        ```bash
        docker ps
        ```
    *   Tampilkan semua kontainer (termasuk yang sudah berhenti):
        ```bash
        docker ps -a
        ```
    *   Tampilkan hanya ID kontainer:
        ```bash
        docker ps -q
        ```
    *   Tampilkan kontainer terakhir yang dibuat (berjalan atau tidak):
        ```bash
        docker ps -l
        ```
    *   Filter output (misal, berdasarkan nama):
        ```bash
        docker ps -f "name=mynginx"
        ```

#### `docker stop CONTAINER [CONTAINER...]`

Menghentikan satu atau lebih kontainer yang sedang berjalan (mengirim sinyal SIGTERM, lalu SIGKILL setelah timeout).

*   **Penggunaan:** (Gunakan ID kontainer atau nama kontainer)
    ```bash
    docker stop mynginx
    docker stop container_id_1 container_id_2
    ```

#### `docker start CONTAINER [CONTAINER...]`

Memulai satu atau lebih kontainer yang sudah dihentikan.

*   **Penggunaan:**
    ```bash
    docker start mynginx
    ```

#### `docker restart CONTAINER [CONTAINER...]`

Memulai ulang satu atau lebih kontainer.

*   **Penggunaan:**
    ```bash
    docker restart mynginx
    ```

#### `docker rm CONTAINER [CONTAINER...]`

Menghapus satu atau lebih kontainer yang sudah berhenti. Kontainer harus dihentikan terlebih dahulu sebelum dihapus, kecuali Anda menggunakan flag `-f`.

*   **Penggunaan:**
    *   Hapus kontainer yang sudah berhenti:
        ```bash
        docker rm mynginx_stopped
    ```
    *   Hapus paksa kontainer yang sedang berjalan (hati-hati!):
        ```bash
        docker rm -f mynginx_running
    ```
    *   Hapus semua kontainer yang sudah berhenti:
        ```bash
        docker rm $(docker ps -a -q)
        # Atau cara yang lebih modern dan aman:
        docker container prune
        ```
        (Akan meminta konfirmasi).

#### `docker logs [OPTIONS] CONTAINER`

Mengambil log (output standar & error standar) dari sebuah kontainer.

*   **Penggunaan:**
    *   Tampilkan log:
        ```bash
        docker logs mynginx
        ```
    *   Tampilkan log secara real-time (follow):
        ```bash
        docker logs -f mynginx
    ```
    *   Tampilkan N baris terakhir log:
        ```bash
        docker logs --tail 50 mynginx
    ```
    *   Tampilkan log dengan timestamp:
        ```bash
        docker logs -t mynginx
    ```

#### `docker exec [OPTIONS] CONTAINER COMMAND [ARG...]`

Menjalankan perintah di dalam kontainer yang *sedang berjalan*. Sangat berguna untuk debugging atau inspeksi.

*   **Penggunaan:**
    *   Jalankan shell interaktif di dalam kontainer:
        ```bash
        docker exec -it mynginx bash
        ```
        (Jika image `nginx` tidak punya `bash`, coba `sh`).
    *   Jalankan perintah non-interaktif:
        ```bash
        docker exec mynginx ls /usr/share/nginx/html
        ```

#### `docker inspect CONTAINER|IMAGE|VOLUME|NETWORK [ITEM...]`

Menampilkan informasi detail level rendah tentang objek Docker (kontainer, image, volume, jaringan) dalam format JSON.

*   **Penggunaan:**
    *   Inspeksi kontainer:
        ```bash
        docker inspect mynginx
        ```
    *   Dapatkan alamat IP kontainer:
        ```bash
        docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mynginx
        ```
        *   `-f` atau `--format`: Memformat output menggunakan template Go.

### Manajemen Image

Perintah untuk mengelola image Docker.

#### `docker images [OPTIONS] [REPOSITORY[:TAG]]`

Menampilkan daftar image yang ada di mesin lokal Anda.

*   **Penggunaan Umum:**
    *   Tampilkan semua image:
        ```bash
        docker images
        ```
    *   Tampilkan image tertentu:
        ```bash
        docker images nginx
        docker images ubuntu:20.04
        ```
    *   Tampilkan hanya ID image:
        ```bash
        docker images -q
        ```
    *   Tampilkan image "dangling" (tidak bertag dan tidak digunakan oleh kontainer):
        ```bash
        docker images -f "dangling=true"
        ```

#### `docker pull REPOSITORY[:TAG]`

Mengunduh (menarik) image atau repositori dari registry (default: Docker Hub).

*   **Penggunaan:**
    ```bash
    docker pull python:3.9-slim
    docker pull redis
    docker pull myprivateregistry.com/my-app:latest
    ```
    Jika tag tidak ditentukan, defaultnya adalah `latest`.

#### `docker build [OPTIONS] PATH | URL | -`

Membangun image Docker dari `Dockerfile` dan konteks build.

*   **Penggunaan Umum:**
    *   Build dari Dockerfile di direktori saat ini (`.`):
        ```bash
        # Tag image sebagai 'my-app' versi '1.0'
        docker build -t my-app:1.0 .
        ```
        *   `-t name:tag`: Memberi nama dan tag pada image.
        *   `.`: Path ke konteks build (direktori yang berisi Dockerfile dan file lain yang akan disalin ke image).
    *   Menentukan path Dockerfile yang berbeda:
        ```bash
        docker build -t my-app:dev -f Dockerfile.dev .
        ```
        *   `-f path/to/Dockerfile`: Menentukan lokasi Dockerfile.
    *   Build dari Git repository:
        ```bash
        docker build -t my-app:git git@github.com:user/repo.git#main:subdir
        ```

#### `docker rmi IMAGE [IMAGE...]`

Menghapus satu atau lebih image dari mesin lokal. Anda tidak bisa menghapus image yang sedang digunakan oleh kontainer (berhenti atau berjalan).

*   **Penggunaan:** (Gunakan ID image atau nama:tag)
    *   Hapus image:
        ```bash
        docker rmi my-app:1.0
        docker rmi image_id_1 image_id_2
        ```
    *   Hapus paksa image (hati-hati! akan menghapus kontainer yang menggunakannya juga):
        ```bash
        docker rmi -f image_id
        ```
    *   Hapus semua image dangling:
        ```bash
        docker rmi $(docker images -f "dangling=true" -q)
        # Atau cara yang lebih modern dan aman:
        docker image prune
        ```
        (Akan meminta konfirmasi).
    *   Hapus semua image yang tidak digunakan (tidak terkait dengan kontainer manapun):
        ```bash
        docker image prune -a
        ```

#### `docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]`

Membuat tag (TARGET_IMAGE) yang merujuk ke image sumber (SOURCE_IMAGE). Berguna untuk memberi nama ulang atau mempersiapkan image untuk di-push ke registry tertentu.

*   **Penggunaan:**
    *   Memberi tag pada image lokal:
        ```bash
        docker tag my-app:1.0 my-app:latest
        ```
    *   Memberi tag untuk push ke registry:
        ```bash
        docker tag my-app:1.0 your-dockerhub-username/my-app:1.0
        docker tag my-app:1.0 myprivateregistry.com/my-app:1.0
        ```

#### `docker push NAME[:TAG]`

Mengunggah (mendorong) image ke registry (misalnya Docker Hub atau registry privat). Anda harus memberi tag pada image dengan benar (termasuk nama registry/username jika bukan Docker Hub default) dan login terlebih dahulu.

*   **Penggunaan:**
    ```bash
    # Asumsikan sudah login dan image sudah di-tag dengan benar
    docker push your-dockerhub-username/my-app:1.0
    docker push myprivateregistry.com/my-app:1.0
    ```

#### `docker history [OPTIONS] IMAGE`

Menampilkan "sejarah" atau lapisan-lapisan yang membentuk sebuah image, beserta perintah yang membuatnya.

*   **Penggunaan:**
    ```bash
    docker history nginx:latest
    ```

### Perintah Sistem

Perintah untuk mendapatkan informasi tentang instalasi Docker dan membersihkan resource.

#### `docker version`

Menampilkan informasi versi Docker Client dan Server (Engine).

#### `docker info`

Menampilkan informasi sistem Docker secara luas, termasuk jumlah kontainer, image, konfigurasi driver penyimpanan, driver logging, plugin, dll. Sangat berguna untuk diagnosis.

#### `docker system prune [OPTIONS]`

Membersihkan resource Docker yang tidak terpakai untuk menghemat ruang disk.

*   **Penggunaan:**
    *   Hapus semua kontainer yang berhenti, jaringan yang tidak digunakan, image dangling, dan cache build:
        ```bash
        docker system prune
        ```
        (Akan meminta konfirmasi).
    *   Hapus juga semua image yang tidak digunakan (tidak hanya dangling):
        ```bash
        docker system prune -a
        ```
    *   Hapus juga volume yang tidak digunakan (hati-hati dengan data!):
        ```bash
        docker system prune --volumes
        ```

#### `docker login [SERVER]` / `docker logout [SERVER]`

Login atau logout dari Docker registry.

*   **Penggunaan:**
    ```bash
    # Login ke Docker Hub (default)
    docker login
    # Masukkan username dan password/token saat diminta

    # Login ke registry privat
    docker login myprivateregistry.com

    # Logout
    docker logout
    docker logout myprivateregistry.com
    ```

### Manajemen Volume

Perintah untuk mengelola Docker volumes.

#### `docker volume create [OPTIONS] [VOLUME]`

Membuat volume baru (named volume).

*   **Penggunaan:**
    ```bash
    docker volume create my-data-volume
    ```

#### `docker volume ls [OPTIONS]`

Menampilkan daftar volume yang ada.

*   **Penggunaan:**
    ```bash
    docker volume ls
    ```

#### `docker volume inspect VOLUME [VOLUME...]`

Menampilkan informasi detail tentang satu atau lebih volume.

*   **Penggunaan:**
    ```bash
    docker volume inspect my-data-volume
    ```

#### `docker volume rm VOLUME [VOLUME...]`

Menghapus satu atau lebih volume yang tidak terpakai. Volume yang sedang digunakan oleh kontainer (berhenti atau berjalan) tidak dapat dihapus.

*   **Penggunaan:**
    ```bash
    docker volume rm my-data-volume-unused
    ```

#### `docker volume prune [OPTIONS]`

Menghapus semua volume lokal yang tidak digunakan (tidak terhubung ke setidaknya satu kontainer).

*   **Penggunaan:**
    ```bash
    docker volume prune
    ```
    (Akan meminta konfirmasi).

### Manajemen Jaringan

Perintah untuk mengelola Docker networks.

#### `docker network create [OPTIONS] NETWORK`

Membuat jaringan Docker baru (biasanya tipe `bridge`).

*   **Penggunaan:**
    ```bash
    docker network create my-app-network
    ```

#### `docker network ls [OPTIONS]`

Menampilkan daftar jaringan yang ada.

*   **Penggunaan:**
    ```bash
    docker network ls
    ```

#### `docker network inspect NETWORK [NETWORK...]`

Menampilkan informasi detail tentang satu atau lebih jaringan.

*   **Penggunaan:**
    ```bash
    docker network inspect my-app-network
    docker network inspect bridge # Melihat detail jaringan bridge default
    ```

#### `docker network connect [OPTIONS] NETWORK CONTAINER`

Menghubungkan kontainer yang sedang berjalan ke sebuah jaringan.

*   **Penggunaan:**
    ```bash
    # Asumsikan kontainer 'my-container' sedang berjalan
    docker network connect my-app-network my-container
    ```

#### `docker network disconnect [OPTIONS] NETWORK CONTAINER`

Memutuskan koneksi kontainer dari sebuah jaringan.

*   **Penggunaan:**
    ```bash
    docker network disconnect my-app-network my-container
    ```

#### `docker network rm NETWORK [NETWORK...]`

Menghapus satu atau lebih jaringan kustom. Jaringan bawaan (`bridge`, `host`, `none`) tidak dapat dihapus. Jaringan tidak dapat dihapus jika masih ada kontainer yang terhubung padanya.

*   **Penggunaan:**
    ```bash
    docker network rm my-app-network
    ```

#### `docker network prune [OPTIONS]`

Menghapus semua jaringan kustom yang tidak digunakan (tidak memiliki kontainer yang terhubung).

*   **Penggunaan:**
    ```bash
    docker network prune
    ```
    (Akan meminta konfirmasi).

---

## 6. Dockerfile Mendalam: Membangun Image Anda Sendiri

`Dockerfile` adalah inti dari pembuatan image Docker yang repeatable dan otomatis. Mari kita pelajari cara menulisnya dengan baik.

### Struktur Dasar Dockerfile

Sebuah `Dockerfile` adalah file teks bernama `Dockerfile` (tanpa ekstensi) yang berisi instruksi berurutan.

```dockerfile
# Komentar diawali dengan tanda #

# Instruksi 1: Base Image
FROM ubuntu:20.04

# Instruksi 2: Metadata (Opsional)
LABEL maintainer="Nama Anda <email@anda.com>" description="Contoh Aplikasi Web Sederhana"

# Instruksi 3: Menjalankan perintah untuk setup lingkungan
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Instruksi 4: Mengatur direktori kerja di dalam image
WORKDIR /app

# Instruksi 5: Menyalin file dari host ke image
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Salin seluruh kode aplikasi
COPY . .

# Instruksi 6: Memberi tahu Docker port mana yang akan diekspos oleh kontainer
EXPOSE 5000

# Instruksi 7: Mendefinisikan variabel lingkungan (Opsional)
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Instruksi 8: Perintah yang akan dijalankan saat kontainer dimulai
CMD ["flask", "run"]
```

### Instruksi Umum Dockerfile

Berikut adalah penjelasan instruksi yang paling sering digunakan:

#### `FROM <image>[:<tag>] [AS <name>]`

*   **Wajib ada di awal (kecuali untuk `ARG` pertama).**
*   Menentukan *base image* (image dasar) yang akan digunakan untuk membangun image Anda.
*   Contoh: `FROM python:3.9-slim`, `FROM nginx:stable-alpine`, `FROM scratch` (image kosong).
*   `AS <name>` digunakan dalam multi-stage builds untuk memberi nama pada stage build.

#### `LABEL <key>=<value> [<key>=<value> ...]`

*   Menambahkan metadata ke image (misalnya, informasi maintainer, versi, deskripsi).
*   Tidak mempengaruhi build, tapi berguna untuk organisasi dan informasi.
*   Contoh: `LABEL version="1.0" maintainer="Dev Team <dev@example.com>"`

#### `RUN <command>` (shell form) atau `RUN ["executable", "param1", "param2"]` (exec form)

*   Menjalankan perintah apa pun di dalam *layer baru* di atas image saat ini.
*   Digunakan untuk menginstal paket, membuat direktori, mengompilasi kode, dll.
*   Setiap `RUN` membuat layer baru (penting untuk caching dan ukuran image).
*   **Shell form:** Dijalankan dalam shell (default `/bin/sh -c` di Linux). Contoh: `RUN apt-get update && apt-get install -y curl`
*   **Exec form:** Dijalankan langsung tanpa shell. Berguna untuk menghindari shell string munging. Contoh: `RUN ["apt-get", "update"]`

#### `CMD ["executable","param1","param2"]` (exec form, preferred) atau `CMD command param1 param2` (shell form) atau `CMD ["param1","param2"]` (sebagai parameter default untuk `ENTRYPOINT`)

*   Menentukan **perintah default** yang akan dijalankan saat kontainer dimulai dari image ini.
*   Hanya **satu** `CMD` yang efektif (yang terakhir dalam Dockerfile).
*   Perintah `CMD` dapat **di-override** saat menjalankan kontainer (`docker run <image> <perintah_lain>`).
*   **Exec form disarankan** karena tidak memanggil shell.
*   Jika digunakan bersama `ENTRYPOINT` (exec form), `CMD` menyediakan argumen default untuk `ENTRYPOINT`.
*   Contoh (Exec Form): `CMD ["python", "app.py"]`
*   Contoh (Shell Form): `CMD echo "Hello Docker"`

#### `ENTRYPOINT ["executable", "param1", "param2"]` (exec form, preferred) atau `ENTRYPOINT command param1 param2` (shell form)

*   Mengkonfigurasi kontainer agar berjalan sebagai **executable tertentu**.
*   Mirip `CMD`, tapi **tidak mudah di-override** saat `docker run`. Perintah yang diberikan pada `docker run` akan ditambahkan sebagai argumen ke `ENTRYPOINT`.
*   Berguna untuk membuat image yang berperilaku seperti perintah tunggal.
*   Jika `ENTRYPOINT` (exec form) dan `CMD` (exec form) keduanya ada, `CMD` menjadi argumen default untuk `ENTRYPOINT`.
*   Contoh:
    ```dockerfile
    ENTRYPOINT ["redis-server"]
    CMD ["--loglevel", "verbose"]
    # Kontainer akan menjalankan: redis-server --loglevel verbose
    # Jika dijalankan dengan `docker run <image> --port 6380`, akan menjadi:
    # redis-server --loglevel verbose --port 6380
    ```

#### `WORKDIR /path/to/workdir`

*   Mengatur **direktori kerja** untuk instruksi `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, dan `ADD` berikutnya yang mengikutinya dalam Dockerfile.
*   Jika direktori tidak ada, akan dibuat secara otomatis.
*   Sangat disarankan daripada menggunakan `RUN cd /path`.
*   Contoh: `WORKDIR /app`

#### `COPY [--chown=<user>:<group>] <src>... <dest>`

*   Menyalin file atau direktori dari **konteks build (host)** ke filesystem image.
*   `<src>` adalah path relatif terhadap konteks build.
*   `<dest>` adalah path absolut di dalam image, atau path relatif terhadap `WORKDIR`.
*   Lebih disukai daripada `ADD` untuk sekadar menyalin file lokal karena lebih transparan.
*   `--chown` (opsional): Mengatur kepemilikan file/direktori yang disalin.
*   Contoh: `COPY package.json .`, `COPY ./src /app/src`

#### `ADD [--chown=<user>:<group>] <src>... <dest>`

*   Mirip `COPY`, tetapi dengan **dua fitur tambahan**:
    1.  Jika `<src>` adalah **URL**, `ADD` akan mengunduh file dari URL tersebut ke `<dest>`.
    2.  Jika `<src>` adalah **arsip tar lokal** (gzip, bzip2, xz), `ADD` akan mengekstraknya secara otomatis ke `<dest>`.
*   Karena perilakunya yang "ajaib", umumnya disarankan menggunakan `COPY` kecuali Anda benar-benar membutuhkan fitur URL atau ekstraksi otomatis `ADD`. Untuk URL, lebih baik gunakan `RUN curl ...` atau `RUN wget ...` agar lebih eksplisit dan mudah mengelola cache.
*   Contoh: `ADD https://example.com/file.tar.gz /tmp/` (unduh), `ADD app.tar.gz /app/` (ekstrak)

#### `EXPOSE <port> [<port>/<protocol>...]`

*   **Mendokumentasikan** port mana yang *diharapkan* akan diekspos oleh aplikasi di dalam kontainer.
*   **Tidak secara otomatis mempublikasikan port ke host.** Anda masih perlu menggunakan flag `-p` atau `-P` saat `docker run`.
*   Berguna sebagai informasi bagi pengguna image dan beberapa alat otomatisasi.
*   Protokol default adalah TCP. Bisa juga UDP (`<port>/udp`).
*   Contoh: `EXPOSE 80`, `EXPOSE 5432/tcp`, `EXPOSE 6379`

#### `ENV <key>=<value>` atau `ENV <key1>=<value1> <key2>=<value2> ...`

*   Mengatur **variabel lingkungan (environment variable)**.
*   Variabel ini akan tersedia untuk instruksi `RUN` berikutnya dalam build *dan* akan disetel saat kontainer dijalankan dari image tersebut.
*   Contoh: `ENV VERSION=1.0`, `ENV DB_HOST=database DB_USER=user`

#### `ARG <name>[=<default_value>]`

*   Mendefinisikan **argumen build**. Nilainya dapat diteruskan saat proses build menggunakan flag `--build-arg <name>=<value>` pada perintah `docker build`.
*   `ARG` adalah satu-satunya instruksi yang boleh mendahului `FROM` (kecuali untuk `ARG` global).
*   Argumen build **tidak persisten** di dalam image setelah build selesai (kecuali jika digunakan untuk menetapkan nilai `ENV`). Berbeda dengan `ENV`.
*   Berguna untuk mengkonfigurasi detail build tanpa hardcoding di Dockerfile (misalnya, versi dependensi, kredensial sementara).
*   Contoh:
    ```dockerfile
    ARG USER=guest
    RUN echo "Building as user: $USER" # $USER akan diganti saat build
    ```
    ```bash
    # Menggunakan nilai default 'guest'
    docker build -t my-image .
    # Menggunakan nilai 'admin'
    docker build --build-arg USER=admin -t my-image .
    ```

#### `VOLUME ["/path/to/volume"]` (JSON array form) atau `VOLUME /path/to/volume`

*   Membuat **mount point** dengan nama path yang ditentukan dan menandainya untuk menyimpan data eksternal dari volume host atau kontainer lain.
*   Biasanya digunakan untuk data yang perlu persisten atau dibagikan (misalnya, data database, log, konfigurasi).
*   Jika Anda menjalankan kontainer dari image ini dan me-mount volume ke path ini, data akan disimpan di volume tersebut. Jika tidak ada volume eksternal yang di-mount, Docker akan membuat *anonymous volume* untuk path ini.
*   **Penting:** Konten di path ini *tidak* akan disertakan saat image di-commit. Perubahan pada data di dalam volume tidak akan disimpan ke dalam image.
*   Contoh: `VOLUME /var/lib/mysql`, `VOLUME ["/etc/config", "/var/log"]`

#### `USER <user>[:<group>]` atau `USER <UID>[:<GID>]`

*   Mengatur **user name** atau **UID** (dan opsional group name atau GID) yang akan digunakan untuk menjalankan instruksi `RUN`, `CMD`, dan `ENTRYPOINT` berikutnya, serta saat kontainer dijalankan.
*   Secara default, kontainer berjalan sebagai `root`. Menjalankan sebagai user non-root adalah praktik keamanan yang baik.
*   Pastikan user/group tersebut ada di dalam image (mungkin perlu dibuat dengan `RUN groupadd ... && useradd ...`).
*   Contoh: `RUN useradd -ms /bin/bash myuser`, `USER myuser`

#### `HEALTHCHECK [OPTIONS] CMD <command>` atau `HEALTHCHECK NONE`

*   Memberi tahu Docker cara menguji apakah kontainer masih berfungsi dengan baik (sehat).
*   Docker akan menjalankan `<command>` secara periodik di dalam kontainer. Jika perintah berhasil (exit code 0), kontainer dianggap sehat. Jika gagal (exit code 1), dianggap tidak sehat. Jika masih starting, statusnya starting.
*   Berguna untuk orkestrator (seperti Swarm atau Kubernetes) untuk mengetahui kapan harus me-restart kontainer atau menghentikan traffic ke sana.
*   Opsi: `--interval=DURATION` (default: 30s), `--timeout=DURATION` (default: 30s), `--start-period=DURATION` (default: 0s), `--retries=N` (default: 3).
*   `HEALTHCHECK NONE`: Menonaktifkan health check yang mungkin diwarisi dari base image.
*   Contoh (cek web server): `HEALTHCHECK --interval=5s --timeout=3s CMD curl -f http://localhost:80 || exit 1`

#### `SHELL ["executable", "parameters"]`

*   Mengubah **shell default** yang digunakan untuk *shell form* dari instruksi `RUN`, `CMD`, dan `ENTRYPOINT`.
*   Default di Linux adalah `["/bin/sh", "-c"]`. Di Windows adalah `["cmd", "/S", "/C"]`.
*   Contoh (menggunakan bash): `SHELL ["/bin/bash", "-c"]`

### Praktik Terbaik Menulis Dockerfile

Menulis Dockerfile yang efisien, aman, dan mudah dipelihara adalah seni tersendiri.

1.  **Gunakan Base Image Spesifik & Minimalis:**
    *   Hindari `latest` tag (misal, `ubuntu:latest`). Gunakan tag versi spesifik (misal, `ubuntu:20.04`, `python:3.9.7-slim`) untuk build yang lebih deterministik.
    *   Pilih base image terkecil yang memenuhi kebutuhan Anda (misal, `alpine`, `-slim` variants) untuk mengurangi ukuran image akhir dan potensi permukaan serangan.

2.  **Manfaatkan Cache Layer Build:**
    *   Docker membangun image layer demi layer dan menyimpan cache setiap layer. Jika Dockerfile atau file yang disalin tidak berubah, Docker akan menggunakan cache, mempercepat build berikutnya.
    *   **Urutkan instruksi dari yang paling jarang berubah ke yang paling sering berubah.** Misalnya, instalasi dependensi (jarang berubah) sebaiknya dilakukan *sebelum* menyalin kode aplikasi Anda (sering berubah).
    ```dockerfile
    # Jarang berubah
    FROM python:3.9-slim
    WORKDIR /app
    COPY requirements.txt .
    RUN pip install -r requirements.txt # Layer ini dicache jika requirements.txt tidak berubah

    # Sering berubah
    COPY . . # Salin kode aplikasi terakhir
    CMD ["python", "app.py"]
    ```

3.  **Gabungkan Perintah `RUN`:**
    *   Setiap `RUN` membuat layer baru. Terlalu banyak layer bisa membuat image besar dan build lambat.
    *   Gabungkan perintah terkait (terutama `apt-get update` dan `install`) dalam satu `RUN` menggunakan `&&`. Jangan lupa membersihkan cache setelah instalasi.
    ```dockerfile
    # Kurang optimal (3 layer)
    RUN apt-get update
    RUN apt-get install -y curl
    RUN rm -rf /var/lib/apt/lists/*

    # Lebih optimal (1 layer)
    RUN apt-get update && apt-get install -y --no-install-recommends curl \
        && rm -rf /var/lib/apt/lists/*
    ```
    *   Gunakan `\` untuk melanjutkan baris agar tetap terbaca.

4.  **Gunakan `.dockerignore`:**
    *   Buat file bernama `.dockerignore` di direktori konteks build (tempat Anda menjalankan `docker build`).
    *   Daftar file atau direktori di sini (dengan sintaks mirip `.gitignore`) yang **tidak** akan dikirim ke Docker daemon sebagai bagian dari konteks build.
    *   Ini mencegah file yang tidak perlu (seperti `.git`, `node_modules`, log, file sementara, rahasia) masuk ke dalam image atau membatalkan cache build secara tidak sengaja.
    *   Contoh `.dockerignore`:
        ```
        .git
        .gitignore
        node_modules
        npm-debug.log
        Dockerfile
        *.md
        !README.md # Kecuali README.md
        ```

5.  **Pahami Perbedaan `COPY` vs `ADD`:**
    *   Gunakan `COPY` untuk menyalin file/direktori lokal. Lebih eksplisit.
    *   Gunakan `ADD` hanya jika Anda *benar-benar* perlu fitur unduh URL atau ekstraksi tar otomatis. Untuk URL, `RUN curl/wget` seringkali lebih baik karena kontrol cache dan pembersihan yang lebih baik.

6.  **Pahami Perbedaan `CMD` vs `ENTRYPOINT`:**
    *   `CMD`: Perintah default, mudah di-override. Cocok untuk image yang mungkin ingin dijalankan dengan perintah berbeda oleh pengguna.
    *   `ENTRYPOINT`: Membuat image berperilaku seperti executable, argumen `docker run` ditambahkan ke `ENTRYPOINT`. Cocok untuk image utilitas atau layanan yang selalu menjalankan perintah utama yang sama.
    *   Kombinasi `ENTRYPOINT` (exec) dan `CMD` (exec) adalah pola yang umum untuk menyediakan executable utama dan argumen default.

7.  **Gunakan `WORKDIR` daripada `RUN cd ...`:**
    *   `WORKDIR` lebih jelas, andal, dan menghindari pembuatan layer tambahan hanya untuk berganti direktori.

8.  **Ekspos Port dengan `EXPOSE`:**
    *   Selalu dokumentasikan port yang digunakan aplikasi Anda dengan `EXPOSE`.

9.  **Bersihkan Artefak Build:**
    *   Hapus file sementara, cache paket, atau artefak kompilasi yang tidak diperlukan dalam image akhir dalam *instruksi `RUN` yang sama* tempat mereka dibuat untuk mengurangi ukuran layer. (Lihat contoh `apt-get clean` di atas).

10. **Gunakan Multi-Stage Builds:**
    *   Teknik canggih untuk membuat image akhir yang sangat kecil, terutama untuk bahasa yang dikompilasi (Go, Java, C++) atau saat build memerlukan banyak dependensi yang tidak diperlukan saat runtime (Node.js dengan build step).
    *   Dibahas lebih lanjut di bawah.

### Contoh Dockerfile (Node.js, Python, Java)

**Contoh 1: Aplikasi Node.js Sederhana**

```dockerfile
# Stage 1: Build (jika ada build step, misal TypeScript atau frontend)
# FROM node:16 as builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build # Contoh build step

# Stage 2: Production
FROM node:16-alpine # Gunakan image Alpine yang kecil

LABEL maintainer="Your Name <you@example.com>"

WORKDIR /app

# Salin package.json dan install hanya dependensi produksi
COPY package*.json ./
RUN npm install --only=production --no-package-lock # Hemat ruang & waktu

# Salin kode aplikasi (atau hasil build dari stage sebelumnya)
COPY . .
# COPY --from=builder /app/dist ./dist # Contoh menyalin dari stage build

EXPOSE 3000

# Set user non-root (buat user 'node' jika belum ada di base image)
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# USER appuser
USER node # Image node resmi biasanya sudah punya user 'node'

CMD ["node", "server.js"] # Ganti 'server.js' dengan file entry point Anda
```
*(Catatan: Jalankan `npm install` sebelum `COPY . .` untuk memanfaatkan cache layer.)*

**Contoh 2: Aplikasi Python (Flask/Django)**

```dockerfile
# Gunakan versi Python spesifik dan varian slim
FROM python:3.9-slim

LABEL maintainer="Your Name <you@example.com>"

# Mencegah Python menulis file .pyc
ENV PYTHONDONTWRITEBYTECODE 1
# Memastikan output Python tidak di-buffer (berguna untuk log Docker)
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Instal dependensi sistem jika diperlukan (misal, untuk library C)
# RUN apt-get update && apt-get install -y --no-install-recommends build-essential libpq-dev \
#    && rm -rf /var/lib/apt/lists/*

# Instal dependensi Python (sebelum menyalin kode)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Buat user non-root
RUN useradd -ms /bin/bash appuser
USER appuser

# Salin kode aplikasi
COPY . .

# Ekspos port yang digunakan aplikasi (misal, Flask default 5000)
EXPOSE 5000

# Perintah default untuk menjalankan aplikasi
# Untuk Flask:
# CMD ["flask", "run", "--host=0.0.0.0"]
# Untuk Gunicorn (lebih cocok untuk produksi):
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"] # Ganti wsgi:app sesuai nama file/app Anda
```

**Contoh 3: Aplikasi Java (Spring Boot)**

```dockerfile
# Stage 1: Build dengan Maven/Gradle
FROM maven:3.8-openjdk-17 AS builder

WORKDIR /app
COPY pom.xml .
# Unduh dependensi dulu untuk cache
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Production Image (JRE saja, lebih kecil)
FROM openjdk:17-jre-slim

LABEL maintainer="Your Name <you@example.com>"

WORKDIR /app

# Salin JAR hasil build dari stage builder
COPY --from=builder /app/target/*.jar app.jar

# Buat user non-root
RUN addgroup --system appgroup && adduser --system --group appuser
USER appuser

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
# CMD bisa digunakan untuk argumen default JVM jika perlu
```

### Multi-Stage Builds

Ini adalah fitur yang sangat kuat untuk mengoptimalkan ukuran image akhir. Ide utamanya adalah menggunakan beberapa instruksi `FROM` dalam satu Dockerfile. Setiap `FROM` memulai *stage* build baru. Anda dapat menyalin artefak (file hasil kompilasi, executable, aset statis) dari satu stage ke stage berikutnya, dan image akhir hanya didasarkan pada stage terakhir.

**Mengapa Berguna?**

*   **Build Environment vs Runtime Environment:** Seringkali, untuk mengompilasi atau membangun aplikasi (misal, Go, C++, Java, atau Node.js dengan build step kompleks), Anda memerlukan banyak tool dan library (SDK, kompiler, build tools, `devDependencies`). Tool-tool ini tidak diperlukan saat aplikasi dijalankan (runtime).
*   **Menjaga Image Akhir Tetap Kecil:** Dengan multi-stage build, Anda dapat melakukan kompilasi/build di stage pertama yang "gemuk" dengan semua tool, lalu menyalin *hanya* artefak yang diperlukan (misal, binary Go, JAR Java, direktori `dist` Node.js) ke stage kedua yang didasarkan pada image runtime minimalis (misal, `alpine`, `distroless`, `jre-slim`).

**Struktur Umum:**

```dockerfile
# --- Stage 1: Build ---
FROM golang:1.18 AS builder # Beri nama stage 'builder'
WORKDIR /src
COPY . .
# Set CGO_ENABLED=0 untuk static linking (opsional, tergantung kebutuhan)
RUN CGO_ENABLED=0 go build -o /app .

# --- Stage 2: Final Image ---
FROM alpine:latest # Atau FROM scratch jika memungkinkan
# FROM gcr.io/distroless/static-debian11 # Opsi lain: image Distroless

WORKDIR /root/
# Salin HANYA binary yang sudah dicompile dari stage 'builder'
COPY --from=builder /app .

# (Opsional) Tambahkan user non-root
# RUN adduser -D myuser
# USER myuser

EXPOSE 8080 # Sesuaikan port
CMD ["./app"] # Jalankan binary
```

**Keuntungan:**
*   Image akhir (`alpine` + binary Go) jauh lebih kecil daripada jika Anda membangun di dalam image `golang` yang besar.
*   Lebih aman karena tool build tidak ada di image produksi.
*   Dockerfile tetap satu file, menjaga logika build tetap bersama.

---

## 7. Volume & Persistensi Data

Kontainer dirancang untuk *stateless* dan *ephemeral*. Bagaimana cara mengelola data yang perlu bertahan (seperti database, file upload, konfigurasi)? Jawabannya adalah dengan menggunakan mekanisme penyimpanan persisten Docker: **Volumes** dan **Bind Mounts**.

### Mengapa Persistensi Data Penting?

*   **Data Hilang Saat Kontainer Dihapus:** Jika aplikasi Anda menulis data langsung ke filesystem kontainer (di writable layer), data itu akan hilang selamanya saat kontainer dihentikan dan dihapus (`docker rm`).
*   **Berbagi Data Antar Kontainer:** Anda mungkin perlu berbagi data antar beberapa kontainer (misalnya, kontainer web server perlu mengakses file yang diunggah oleh kontainer aplikasi).
*   **Memisahkan Data dari Kode:** Menjaga data (yang sering berubah dan penting) terpisah dari image aplikasi (yang relatif statis) adalah praktik yang baik.
*   **Backup dan Restore:** Data yang disimpan di luar kontainer (di volume atau host) lebih mudah untuk di-backup dan di-restore.

### Jenis Penyimpanan Data di Docker

Docker menyediakan tiga mekanisme utama untuk memasang (mount) data ke dalam kontainer:

#### 1. Volumes (Named Volumes)

*   **Apa itu?** Volume yang **dikelola sepenuhnya oleh Docker**. Docker membuat dan mengelola area penyimpanan khusus di filesystem *host* (biasanya di dalam direktori Docker, seperti `/var/lib/docker/volumes/` di Linux), tetapi lokasi pastinya tidak perlu Anda khawatirkan.
*   **Cara Penggunaan:** Anda membuat volume dengan nama (`docker volume create my-data`) atau membiarkan Docker membuatnya saat pertama kali kontainer dijalankan dengan mount volume (`docker run -v my-data:/app/data ...`).
*   **Keunggulan:**
    *   **Cara yang Disukai Docker:** Dianggap sebagai cara terbaik untuk persistensi data.
    *   **Portabilitas:** Tidak terikat pada struktur direktori spesifik di host. Bekerja konsisten di Linux, Windows, macOS.
    *   **Manajemen Mudah:** Dapat dibuat, dicantumkan, diperiksa, dan dihapus menggunakan perintah `docker volume ...`.
    *   **Berbagi Antar Kontainer:** Mudah di-mount ke beberapa kontainer secara bersamaan.
    *   **Driver Volume:** Mendukung penggunaan driver volume pihak ketiga untuk menyimpan data di penyimpanan eksternal, cloud storage, dll.
    *   **Performa:** Umumnya memiliki performa I/O native atau mendekati native di Linux.
    *   **Inisialisasi Konten:** Jika Anda me-mount volume *kosong* ke direktori di dalam kontainer yang *sudah berisi data* (dari image), Docker akan menyalin data dari direktori kontainer ke volume saat pertama kali di-mount. Ini berguna untuk mengisi volume dengan data default.
*   **Kekurangan:**
    *   Lokasi fisik di host kurang transparan (meskipun bisa diinspeksi).
    *   Mengakses/memodifikasi data langsung dari host sedikit lebih rumit (perlu tahu path atau menggunakan kontainer lain).

#### 2. Bind Mounts

*   **Apa itu?** Memetakan (mounting) **file atau direktori yang ada di filesystem *host*** langsung ke dalam filesystem kontainer. Anda menentukan path absolut di host.
*   **Cara Penggunaan:** Menggunakan flag `-v` atau `--mount` dengan path absolut di host.
    *   `docker run -v /path/di/host:/path/di/kontainer ...`
    *   `docker run --mount type=bind,source=/path/di/host,target=/path/di/kontainer ...` (sintaks `--mount` lebih eksplisit dan disarankan).
*   **Keunggulan:**
    *   **Akses Langsung dari Host:** Mudah untuk mengakses dan memodifikasi file dari host menggunakan tool atau editor biasa.
    *   **Berbagi Kode Pengembangan:** Sangat umum digunakan selama pengembangan untuk me-mount kode sumber dari host ke kontainer, sehingga perubahan kode di host langsung terlihat di kontainer tanpa perlu rebuild image (misal, dengan hot-reloading).
    *   **Berbagi File Konfigurasi:** Mudah untuk menyediakan file konfigurasi dari host ke kontainer.
*   **Kekurangan:**
    *   **Ketergantungan pada Host:** Terikat pada struktur direktori spesifik di host. Kurang portabel antar lingkungan atau OS.
    *   **Masalah Perizinan:** Seringkali menimbulkan masalah perizinan (permission denied) jika UID/GID user di dalam kontainer tidak cocok dengan kepemilikan file/direktori di host.
    *   **Keamanan:** Kontainer (terutama jika berjalan sebagai root) berpotensi memodifikasi (atau bahkan menghapus) file penting di filesystem host jika path host tidak dipilih dengan hati-hati.
    *   **Performa (di Non-Linux):** Performa I/O bisa lebih lambat daripada named volumes di Docker Desktop (macOS, Windows) karena lapisan virtualisasi/translasi filesystem.
    *   **Tidak Ada Inisialisasi Konten:** Jika Anda me-mount direktori host ke direktori non-kosong di kontainer, konten direktori kontainer akan *tertutup* (obscured) oleh konten dari host.

#### 3. tmpfs Mounts (Linux)

*   **Apa itu?** Menyimpan data **hanya di memori *host***, tidak ditulis ke filesystem host (disk). Data bersifat sementara dan akan hilang saat kontainer berhenti.
*   **Cara Penggunaan (Hanya Linux):** Menggunakan flag `--tmpfs` atau `--mount type=tmpfs`.
    *   `docker run --tmpfs /app/cache ...`
    *   `docker run --mount type=tmpfs,destination=/app/cache,tmpfs-size=100m ...` (bisa membatasi ukuran).
*   **Keunggulan:**
    *   **Sangat Cepat:** Karena disimpan di memori, akses I/O sangat cepat.
    *   **Keamanan:** Data tidak pernah ditulis ke disk.
*   **Kekurangan:**
    *   **Non-Persisten:** Data hilang saat kontainer berhenti.
    *   **Terbatas Memori Host:** Mengkonsumsi RAM host.
    *   **Hanya Linux:** Tidak berfungsi di Docker Desktop (Windows/macOS).
*   **Kasus Penggunaan:** Menyimpan data sementara yang tidak perlu persisten dan sensitif terhadap performa I/O (misalnya, cache internal, file sesi sementara).

### Kapan Menggunakan Apa? (Pedoman Umum)

*   **Gunakan Named Volumes untuk:**
    *   Menyimpan data aplikasi yang perlu persisten (database, file upload, state aplikasi).
    *   Berbagi data antar kontainer secara aman dan terkelola.
    *   Ketika portabilitas antar lingkungan penting.
    *   Ketika Anda ingin Docker mengelola siklus hidup penyimpanan.
*   **Gunakan Bind Mounts untuk:**
    *   **Pengembangan:** Me-mount kode sumber dari host ke kontainer untuk live reloading.
    *   Menyediakan file konfigurasi dari host ke kontainer.
    *   Berbagi artefak build antara host dan kontainer.
    *   Ketika Anda *perlu* akses mudah ke data dari host.
*   **Gunakan tmpfs Mounts (Linux) untuk:**
    *   Menyimpan data non-persisten yang sensitif terhadap performa atau keamanan (misalnya, rahasia sementara, cache).

### Menggunakan Volume dengan `docker run`

Anda dapat me-mount volume atau bind mount menggunakan flag `-v` atau `--mount`. Sintaks `--mount` lebih baru dan lebih eksplisit.

**Sintaks `-v` (lebih tua, sedikit ambigu):**

*   **Named Volume:** `-v <nama_volume>:<path_kontainer>[:ro]`
    ```bash
    docker run -d --name db -v pgdata:/var/lib/postgresql/data postgres:14
    # 'pgdata' adalah nama volume. Jika belum ada, Docker akan membuatnya.
    # '/var/lib/postgresql/data' adalah path di dalam kontainer.
    ```
*   **Bind Mount:** `-v /path/di/host:<path_kontainer>[:ro]`
    ```bash
    docker run -d --name web -p 80:80 -v "$(pwd)/html":/usr/share/nginx/html:ro nginx
    # '$(pwd)/html' adalah path absolut di host (direktori 'html' di pwd).
    # '/usr/share/nginx/html' adalah path di dalam kontainer.
    # ':ro' membuat mount menjadi read-only di dalam kontainer.
    ```
*   **Anonymous Volume:** `-v <path_kontainer>` (Tidak disarankan, sulit dikelola)
    ```bash
    docker run -d -v /app/logs myapp # Docker membuat volume anonim (nama acak)
    ```

**Sintaks `--mount` (lebih baru, lebih eksplisit, disarankan):**

Terdiri dari pasangan key-value yang dipisahkan koma. Key yang umum: `type`, `source` (atau `src`), `target` (atau `destination`, `dst`), `readonly` (atau `ro`).

*   **Named Volume:** `--mount type=volume,source=<nama_volume>,target=<path_kontainer>[,readonly]`
    ```bash
    docker run -d --name db --mount type=volume,source=pgdata,target=/var/lib/postgresql/data postgres:14
    ```
*   **Bind Mount:** `--mount type=bind,source=<path_host>,target=<path_kontainer>[,readonly]`
    ```bash
    docker run -d --name web -p 80:80 --mount type=bind,source="$(pwd)/html",target=/usr/share/nginx/html,readonly nginx
    ```
*   **tmpfs Mount:** `--mount type=tmpfs,destination=<path_kontainer>[,tmpfs-size=<bytes>,tmpfs-mode=<mode>]`
    ```bash
    docker run -it --mount type=tmpfs,destination=/app/cache,tmpfs-size=64m myapp
    ```

### Mengelola Volume

Gunakan perintah `docker volume` untuk mengelola named volumes:

*   `docker volume create myvol`: Membuat volume.
*   `docker volume ls`: Mencantumkan volume.
*   `docker volume inspect myvol`: Melihat detail volume (termasuk path mount di host).
*   `docker volume rm myvol`: Menghapus volume (hanya jika tidak digunakan).
*   `docker volume prune`: Menghapus semua volume yang tidak digunakan.

### Backup, Restore, dan Migrasi Volume

Karena named volumes dikelola oleh Docker, bagaimana cara mem-backup atau memindahkannya?

**Metode Umum:** Jalankan kontainer baru yang me-mount volume yang ingin Anda backup, dan juga me-mount direktori lokal (bind mount) sebagai tujuan backup. Kemudian gunakan perintah seperti `tar` di dalam kontainer tersebut.

**Contoh Backup Volume `mydata` ke file `backup.tar.gz` di direktori saat ini:**

```bash
docker run --rm \
  -v mydata:/data \  # Mount volume sumber
  -v $(pwd):/backup \ # Mount direktori host tujuan
  ubuntu \          # Gunakan image utilitas seperti ubuntu
  tar czvf /backup/backup.tar.gz -C /data .
  # Perintah tar: c=create, z=gzip, v=verbose, f=file, -C=change directory
```

**Contoh Restore dari `backup.tar.gz` ke Volume baru `newdata`:**

1.  Buat volume baru (jika perlu): `docker volume create newdata`
2.  Jalankan kontainer untuk restore:
    ```bash
    docker run --rm \
      -v newdata:/data \  # Mount volume tujuan
      -v $(pwd):/backup \ # Mount direktori host sumber backup
      ubuntu \
      tar xzvf /backup/backup.tar.gz -C /data
      # Perintah tar: x=extract, z=gzip, v=verbose, f=file, -C=change directory
    ```

Metode ini menjaga data tetap terisolasi dan tidak bergantung pada detail implementasi penyimpanan Docker di host.

---

## 8. Jaringan Docker (Networking)

Kontainer perlu berkomunikasi. Docker menyediakan sistem jaringan yang kuat dan fleksibel untuk memungkinkan komunikasi antar kontainer, antara kontainer dan host, serta dengan jaringan eksternal.

### Konsep Dasar Jaringan Kontainer

*   **Namespace Jaringan:** Setiap kontainer (secara default) mendapatkan *namespace jaringan* sendiri yang terisolasi. Ini berarti setiap kontainer memiliki tumpukan jaringannya sendiri (antarmuka jaringan, tabel routing, tabel iptables, dll.), terpisah dari host dan kontainer lain.
*   **Antarmuka Virtual Ethernet (veth):** Untuk menghubungkan namespace jaringan kontainer ke jaringan Docker (seperti bridge), Docker biasanya menggunakan pasangan `veth`. Satu ujung pasangan berada di namespace kontainer (misalnya, `eth0`), dan ujung lainnya terhubung ke jaringan Docker di namespace host.
*   **Jembatan (Bridge) Linux:** Jaringan `bridge` default Docker menggunakan jembatan Linux (`docker0` secara tradisional) di host. Pasangan `veth` dari setiap kontainer di jaringan ini terhubung ke jembatan ini, memungkinkan mereka berkomunikasi satu sama lain.
*   **Pemetaan Port:** Untuk mengizinkan koneksi dari luar host ke layanan yang berjalan di dalam kontainer, Anda perlu *memetakan* port pada antarmuka jaringan host ke port di dalam kontainer. Docker mengelola aturan `iptables` (di Linux) atau mekanisme serupa untuk melakukan penerusan (forwarding) ini.
*   **DNS Internal:** Docker menyediakan server DNS internal yang memungkinkan kontainer dalam jaringan *user-defined* yang sama untuk saling menemukan dan berkomunikasi menggunakan **nama kontainer** mereka sebagai hostname.

### Driver Jaringan Bawaan Docker

Docker hadir dengan beberapa driver jaringan bawaan. Anda memilih driver saat membuat jaringan (`docker network create -d <driver> ...`) atau saat menjalankan kontainer (`docker run --network <network_name> ...`).

#### `bridge` (Default)

*   **Cara Kerja:** Ini adalah driver default jika Anda tidak menentukan jaringan saat menjalankan kontainer (`docker run ...`). Docker secara otomatis membuat jaringan bernama `bridge` saat daemon dimulai (biasanya menggunakan jembatan `docker0`). Semua kontainer yang dijalankan tanpa `--network` akan terhubung ke jaringan `bridge` default ini.
*   **Komunikasi:**
    *   Kontainer di jaringan `bridge` default dapat berkomunikasi satu sama lain menggunakan **alamat IP internal** mereka.
    *   **PENTING:** Secara default (atau dalam versi Docker yang lebih lama), resolusi nama kontainer melalui DNS **tidak berfungsi** di jaringan `bridge` default. Anda harus menggunakan alamat IP atau *legacy container links* (`--link`, sekarang dianggap usang).
    *   Untuk mengizinkan komunikasi dari luar host, Anda perlu menggunakan pemetaan port (`-p` atau `-P`).
*   **Isolasi:** Menyediakan isolasi jaringan dari host.
*   **Kapan Digunakan:** Cocok untuk aplikasi mandiri yang perlu diekspos melalui port, atau untuk setup pengembangan sederhana di mana resolusi nama kontainer tidak kritis (atau Anda menggunakan jaringan user-defined).

#### `host`

*   **Cara Kerja:** Menonaktifkan isolasi jaringan. Kontainer **berbagi namespace jaringan host**. Artinya, kontainer tidak mendapatkan IP sendiri; ia menggunakan antarmuka jaringan host secara langsung.
*   **Komunikasi:**
    *   Jika Anda menjalankan layanan di port 80 dalam kontainer dengan `--network host`, layanan itu akan langsung tersedia di port 80 *host* (jika tidak ada yang lain menggunakan port itu). Tidak perlu pemetaan port (`-p`).
    *   Kontainer dapat mengakses layanan jaringan lain yang berjalan di host (termasuk kontainer lain di jaringan host) melalui `localhost` atau alamat IP host.
*   **Isolasi:** **Tidak ada** isolasi jaringan. Ini bisa menjadi risiko keamanan dan dapat menyebabkan konflik port.
*   **Kapan Digunakan:**
    *   Ketika performa jaringan sangat kritis dan overhead bridge/NAT tidak diinginkan.
    *   Ketika kontainer perlu memonitor atau mengelola tumpukan jaringan host itu sendiri.
    *   Hati-hati saat menggunakannya.

#### `none`

*   **Cara Kerja:** Menempatkan kontainer dalam namespace jaringannya sendiri tetapi **tidak mengkonfigurasi antarmuka jaringan apa pun** selain antarmuka loopback (`lo`).
*   **Komunikasi:** Kontainer sepenuhnya terisolasi dari jaringan. Tidak dapat berkomunikasi dengan kontainer lain atau host, atau dunia luar.
*   **Kapan Digunakan:**
    *   Untuk kontainer yang hanya melakukan pemrosesan data tanpa perlu jaringan.
    *   Untuk tugas keamanan di mana isolasi jaringan total diperlukan.
    *   Ketika Anda ingin mengkonfigurasi jaringan kustom sepenuhnya di dalam kontainer.

#### `overlay`

*   **Cara Kerja:** Dirancang untuk **jaringan multi-host**. Memungkinkan kontainer yang berjalan di host Docker yang berbeda untuk berkomunikasi seolah-olah mereka berada di jaringan yang sama. Menggunakan teknologi enkapsulasi VXLAN.
*   **Komunikasi:** Kontainer dapat berkomunikasi langsung satu sama lain di seluruh cluster host.
*   **Isolasi:** Menyediakan jaringan virtual terisolasi yang membentang di beberapa host.
*   **Kapan Digunakan:** Terutama digunakan dengan **Docker Swarm** (mode orkestrasi bawaan Docker) atau Kubernetes (dengan plugin jaringan yang sesuai) untuk memungkinkan komunikasi layanan antar node dalam cluster.

#### `macvlan`

*   **Cara Kerja:** Memungkinkan Anda menetapkan **alamat MAC** ke kontainer, membuatnya tampak sebagai **perangkat fisik** di jaringan Anda, terhubung langsung ke switch fisik.
*   **Komunikasi:** Kontainer mendapatkan alamat IP dari subnet jaringan fisik Anda (biasanya melalui DHCP eksternal) dan dapat berkomunikasi langsung dengan perangkat lain di jaringan fisik tersebut.
*   **Isolasi:** Kontainer terisolasi satu sama lain secara default (memerlukan konfigurasi router/switch eksternal untuk komunikasi). Komunikasi antara kontainer macvlan dan hostnya sendiri memerlukan konfigurasi tambahan (antarmuka macvlan tambahan di host).
*   **Kapan Digunakan:**
    *   Ketika aplikasi legacy mengharapkan untuk terhubung langsung ke jaringan fisik.
    *   Untuk memonitor lalu lintas jaringan (kontainer terlihat seperti host terpisah).
    *   Ketika Anda perlu mengelola alamat IP kontainer dari infrastruktur jaringan yang ada.

### Jaringan Bridge (User-Defined)

Selain jaringan `bridge` default, Anda dapat (dan **sangat disarankan**) membuat jaringan `bridge` kustom Anda sendiri menggunakan `docker network create`.

```bash
docker network create my-app-net
```

**Keunggulan Jaringan Bridge User-Defined:**

1.  **Resolusi Nama Kontainer Otomatis:** Kontainer dalam jaringan user-defined yang sama dapat saling menemukan dan berkomunikasi menggunakan **nama kontainer** mereka sebagai hostname. Docker menyediakan DNS internal untuk ini. Ini jauh lebih baik daripada menggunakan IP atau link legacy.
    ```bash
    # Jalankan kontainer 'db' di jaringan 'my-app-net'
    docker run -d --name db --network my-app-net postgres:14

    # Jalankan kontainer 'app' di jaringan yang sama
    # Di dalam kode aplikasi 'app', Anda bisa terhubung ke 'db' menggunakan hostname 'db'
    docker run -d --name app --network my-app-net -e DB_HOST=db my-app-image
    ```
2.  **Isolasi Jaringan yang Lebih Baik:** Secara default, jaringan user-defined menyediakan isolasi antar jaringan. Kontainer di `my-app-net` tidak dapat berkomunikasi langsung dengan kontainer di `another-app-net` (kecuali jika satu kontainer terhubung ke kedua jaringan). Jaringan `bridge` default lebih terbuka.
3.  **Koneksi Dinamis:** Anda dapat menghubungkan (`docker network connect`) dan memutuskan (`docker network disconnect`) kontainer yang sedang berjalan dari jaringan user-defined tanpa perlu me-restart kontainer tersebut.

**Kapan Digunakan:** **Hampir selalu** saat Anda memiliki lebih dari satu kontainer yang perlu berkomunikasi (misalnya, aplikasi web dan database). Gunakan jaringan user-defined daripada jaringan `bridge` default. Docker Compose secara otomatis membuat jaringan bridge user-defined untuk setiap proyek secara default.

### Publikasi Port (`-p` atau `--publish`)

Untuk membuat layanan yang berjalan di dalam kontainer dapat diakses dari *luar* host Docker, Anda perlu mempublikasikan port kontainer ke port host.

**Sintaks:**

*   `-p <host_port>:<container_port>`: Memetakan port TCP spesifik di *semua* antarmuka host ke port kontainer.
    ```bash
    # Akses Nginx via http://<host_ip>:8080
    docker run -d -p 8080:80 nginx
    ```
*   `-p <ip_host>:<host_port>:<container_port>`: Memetakan hanya pada IP host tertentu.
    ```bash
    # Akses Nginx hanya via http://192.168.1.100:8080
    docker run -d -p 192.168.1.100:8080:80 nginx
    ```
*   `-p <container_port>`: Memetakan port kontainer ke *port acak* yang tersedia di host. Berguna jika Anda tidak peduli port host mana yang digunakan. Gunakan `docker ps` untuk melihat port mana yang dipilih.
    ```bash
    docker run -d -p 80 nginx
    # Jalankan 'docker ps' untuk melihat pemetaan, misal 0.0.0.0:32768->80/tcp
    ```
*   `-p <host_port>:<container_port>/udp`: Memetakan port UDP.
    ```bash
    docker run -d -p 53:53/udp dns-server-image
    ```
*   `-P` atau `--publish-all`: Memublikasikan **semua** port yang di-*expose* (`EXPOSE` di Dockerfile) ke port acak di host. Kurang umum digunakan karena kurang kontrol.

**Penting:** Publikasi port hanya relevan untuk jaringan `bridge` (default atau user-defined) dan `overlay`. Tidak diperlukan (dan biasanya diabaikan) untuk jaringan `host`.

### Komunikasi Antar Kontainer

*   **Dalam Jaringan User-Defined yang Sama:** Cukup gunakan **nama kontainer** sebagai hostname. Docker DNS akan menanganinya. Ini adalah metode yang disukai.
    ```yaml
    # Contoh di docker-compose.yml
    version: '3.8'
    services:
      web:
        image: my-web-app
        networks:
          - app-net
        environment:
          - DB_HOST=db # Menggunakan nama service 'db'
      db:
        image: postgres:14
        networks:
          - app-net
    networks:
      app-net:
        driver: bridge
    ```
*   **Dalam Jaringan `bridge` Default:** Gunakan **alamat IP internal** kontainer (dapat ditemukan dengan `docker inspect <container_name>`). Kurang ideal karena IP bisa berubah jika kontainer dibuat ulang. (Link legacy (`--link`) adalah cara lama untuk alias nama, tapi sekarang tidak disarankan).
*   **Antar Jaringan Berbeda:** Secara default tidak bisa. Sebuah kontainer harus terhubung ke *kedua* jaringan (`docker network connect`) untuk dapat berkomunikasi dengan kontainer di jaringan lain. Atau, Anda dapat mempublikasikan port satu kontainer ke host dan membuat kontainer lain terhubung melalui port host tersebut (kurang efisien).

### DNS Internal Docker

*   Daemon Docker menjalankan server DNS internal (biasanya di `127.0.0.11`).
*   Ketika kontainer dibuat, Docker memodifikasi file `/etc/resolv.conf` di dalam kontainer untuk menunjuk ke server DNS internal ini.
*   Server DNS ini bertanggung jawab untuk menerjemahkan nama kontainer menjadi alamat IP internal *hanya untuk kontainer yang berada di jaringan user-defined yang sama*.
*   Untuk query DNS eksternal, server DNS internal Docker akan meneruskannya ke resolver DNS yang dikonfigurasi di host.

### Mengelola Jaringan

Gunakan perintah `docker network` untuk mengelola jaringan:

*   `docker network create mynet`: Membuat jaringan (default bridge).
*   `docker network create --driver overlay my-overlay-net`: Membuat jaringan overlay.
*   `docker network ls`: Mencantumkan jaringan.
*   `docker network inspect mynet`: Melihat detail jaringan dan kontainer yang terhubung.
*   `docker network connect mynet mycontainer`: Menghubungkan kontainer ke jaringan.
*   `docker network disconnect mynet mycontainer`: Memutuskan kontainer dari jaringan.
*   `docker network rm mynet`: Menghapus jaringan (hanya jika tidak ada kontainer yang terhubung).
*   `docker network prune`: Menghapus semua jaringan user-defined yang tidak digunakan.

### Contoh Kasus Jaringan

**Kasus 1: Aplikasi Web Sederhana (Frontend + Backend)**

1.  Buat jaringan kustom: `docker network create webapp-net`
2.  Jalankan kontainer backend (misal, API Node.js) di jaringan:
    ```bash
    docker run -d --name backend --network webapp-net my-backend-image
    ```
3.  Jalankan kontainer frontend (misal, Nginx/React) di jaringan yang sama, konfigurasikan untuk berkomunikasi dengan backend menggunakan nama `backend`:
    ```bash
    # Konfigurasi Nginx mungkin perlu proxy_pass http://backend:port_backend;
    docker run -d --name frontend --network webapp-net -p 80:80 my-frontend-image
    ```
    Pengguna mengakses frontend melalui port 80 host. Frontend berkomunikasi dengan backend melalui nama `backend` di dalam jaringan `webapp-net`.

**Kasus 2: Menjalankan Database Terpisah**

1.  Buat jaringan: `docker network create db-net`
2.  Jalankan kontainer database:
    ```bash
    docker run -d --name mydb --network db-net -e POSTGRES_PASSWORD=secret -v dbdata:/var/lib/postgresql/data postgres:14
    ```
3.  Jalankan kontainer aplikasi yang perlu terhubung ke database:
    ```bash
    docker run -d --name myapp --network db-net -e DB_HOST=mydb -e DB_PASS=secret my-app-image
    ```
    Aplikasi `myapp` terhubung ke database menggunakan hostname `mydb`. Database tidak perlu diekspos ke host sama sekali jika hanya diakses oleh kontainer lain di jaringan yang sama.

---

## 9. Docker Compose: Mengelola Aplikasi Multi-Kontainer

Mengelola beberapa kontainer yang saling terkait (seperti web server, API, database, cache) menggunakan perintah `docker run` satu per satu bisa menjadi rumit dan rentan kesalahan. Di sinilah **Docker Compose** berperan.

### Apa Itu Docker Compose?

Docker Compose adalah **alat** untuk **mendefinisikan dan menjalankan aplikasi Docker multi-kontainer**. Anda menggunakan file konfigurasi YAML (biasanya `docker-compose.yml`) untuk mengkonfigurasi layanan, jaringan, dan volume aplikasi Anda. Kemudian, dengan satu perintah (`docker-compose up`), Anda dapat membuat, memulai, dan menghubungkan semua layanan tersebut.

### Mengapa Menggunakan Docker Compose?

*   **Manajemen Terpusat:** Semua konfigurasi layanan, jaringan, dan volume ada dalam satu file YAML, membuatnya mudah dibaca, dipahami, dan dikelola.
*   **Reproducibility:** Memastikan lingkungan multi-kontainer Anda konsisten di berbagai mesin (pengembangan, pengujian, dll.).
*   **Penyederhanaan Alur Kerja:** Mengurangi kebutuhan untuk mengetik perintah `docker run` yang panjang dan kompleks berulang kali.
*   **Jaringan Otomatis:** Secara default, Compose membuat jaringan bridge user-defined tunggal untuk aplikasi Anda, memungkinkan layanan saling menemukan menggunakan nama layanan sebagai hostname.
*   **Manajemen Siklus Hidup:** Mudah untuk memulai (`up`), menghentikan (`down`), melihat status (`ps`), dan melihat log (`logs`) dari semua layanan secara bersamaan.
*   **Ideal untuk Pengembangan & Pengujian:** Sangat populer untuk menyiapkan lingkungan pengembangan lokal yang mencerminkan arsitektur produksi.

### Instalasi Docker Compose

*   **Docker Desktop (Windows & macOS):** Docker Compose sudah **termasuk** dan siap digunakan. Anda menggunakan perintah `docker compose` (dengan spasi).
*   **Linux:**
    *   **Plugin Docker Compose V2 (Disarankan):** Cara modern adalah menginstal plugin Compose V2, yang terintegrasi dengan Docker CLI (`docker compose`). Ikuti [instruksi instalasi plugin Docker Compose resmi](https://docs.docker.com/compose/install/linux/). Ini biasanya melibatkan pengunduhan biner dari rilis GitHub dan menempatkannya di direktori plugin Docker (misalnya, `~/.docker/cli-plugins` atau `/usr/local/lib/docker/cli-plugins`).
    *   **Standalone `docker-compose` V1 (Legacy):** Versi lama adalah biner Python mandiri (`docker-compose`, dengan tanda hubung). Ini masih berfungsi tetapi tidak lagi dikembangkan secara aktif. Jika Anda perlu menginstalnya (misalnya, karena kompatibilitas), Anda biasanya mengunduh biner dari rilis GitHub dan membuatnya executable.

**Verifikasi Instalasi:**
```bash
docker compose version
# atau (untuk V1 legacy)
docker-compose --version
```
*(Panduan ini akan fokus pada sintaks `docker compose` V2, tetapi sebagian besar perintah V1 serupa dengan mengganti spasi dengan tanda hubung.)*

### File `docker-compose.yml`

Ini adalah inti dari Docker Compose. File YAML ini mendefinisikan bagaimana aplikasi multi-kontainer Anda akan dibangun dan dijalankan.

**Struktur Dasar:**

```yaml
# Versi skema file Compose. '3.8' adalah versi yang umum dan stabil.
version: '3.8'

# Mendefinisikan layanan (kontainer) yang membentuk aplikasi Anda
services:
  # Nama layanan (misalnya, 'web', 'api', 'db', 'cache')
  # Nama ini juga berfungsi sebagai hostname dalam jaringan default Compose.
  web:
    # Cara membangun image: menggunakan Dockerfile di direktori saat ini
    build: .
    # Atau, gunakan image yang sudah ada dari registry
    # image: nginx:alpine
    # Memetakan port host ke port kontainer
    ports:
      - "8080:80" # host_port:container_port
    # Me-mount volume
    volumes:
      # Bind mount kode sumber untuk pengembangan
      - ./src:/app/src
      # Named volume untuk data persisten
      - webdata:/var/www/data
    # Menentukan jaringan yang akan dihubungkan (opsional jika hanya default)
    networks:
      - front-tier
      - back-tier
    # Mengatur variabel lingkungan
    environment:
      - NODE_ENV=development
      - API_HOST=api # Menggunakan nama layanan lain sebagai hostname
    # Bergantung pada layanan lain (mengontrol urutan start-up)
    depends_on:
      - api
      - db

  api:
    image: my-api-image:latest
    networks:
      - back-tier
    environment:
      - DB_HOST=db
      - DB_USER=user
      - DB_PASSWORD=secret
      - REDIS_HOST=cache
    depends_on:
      - db
      - cache

  db:
    image: postgres:14-alpine
    networks:
      - back-tier
    volumes:
      # Named volume untuk data PostgreSQL
      - dbdata:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=appdb

  cache:
    image: redis:6-alpine
    networks:
      - back-tier

# Mendefinisikan named volumes yang digunakan oleh layanan
volumes:
  webdata: # Nama volume cocok dengan yang digunakan di services.web.volumes
    # Driver atau opsi lain bisa ditambahkan di sini jika perlu
    # driver: local
  dbdata:

# Mendefinisikan jaringan kustom (opsional, Compose membuat default jika tidak ada)
networks:
  front-tier:
    driver: bridge
  back-tier:
    driver: bridge
```

**Konfigurasi `services` yang Umum:**

*   `image: <nama_image>[:<tag>]`: Menentukan image yang akan digunakan. Akan menarik dari Docker Hub jika tidak ditemukan secara lokal.
*   `build: <path_konteks>` atau `build: { context: <path>, dockerfile: <nama_dockerfile>, args: { <arg_name>: <value> } }`: Membangun image dari Dockerfile.
*   `ports: ["<host_port>:<container_port>", ...]`: Memetakan port.
*   `volumes: ["<volume_atau_bind_mount>", ...]`: Me-mount volume atau bind mount.
    *   Named Volume: `mydata:/path/in/container`
    *   Bind Mount: `./local/path:/path/in/container`
    *   Read-only: `./local/path:/path/in/container:ro`
*   `environment: { <key>: <value>, ... }` atau `environment: [ "<key>=<value>", ... ]`: Mengatur variabel lingkungan.
*   `networks: [<nama_jaringan>, ...]`: Menghubungkan layanan ke jaringan tertentu. Jika tidak ditentukan, terhubung ke jaringan default proyek.
*   `depends_on: [<nama_layanan>, ...]`: Menentukan dependensi antar layanan. Compose akan memulai dependensi *sebelum* layanan yang bergantung. **Penting:** `depends_on` hanya menunggu kontainer dependensi *dimulai*, bukan sampai layanan di dalamnya *siap* (misal, database siap menerima koneksi). Untuk itu, Anda mungkin perlu mekanisme health check atau skrip wait-for-it.
*   `command: <perintah>` atau `command: ["executable", "arg1", ...]` : Meng-override `CMD` default dari image.
*   `entrypoint: <perintah>` atau `entrypoint: ["executable", "arg1", ...]` : Meng-override `ENTRYPOINT` default dari image.
*   `container_name: <nama_kustom>`: Memberi nama spesifik pada kontainer (secara default Compose membuat nama seperti `proyek_layanan_1`). Biasanya tidak diperlukan kecuali untuk integrasi dengan alat eksternal.
*   `restart: <policy>`: Kebijakan restart kontainer (misal, `no`, `always`, `on-failure`, `unless-stopped`).
*   `healthcheck: { test: ["CMD", "curl", ...], interval: 10s, ... }`: Mendefinisikan health check untuk layanan.
*   `secrets: [<nama_secret>]`: Menggunakan Docker secrets (lebih relevan untuk Swarm).
*   `configs: [<nama_config>]`: Menggunakan Docker configs (lebih relevan untuk Swarm).
*   `deploy: {...}`: Konfigurasi terkait deployment (terutama untuk Swarm mode).

### Perintah Dasar `docker compose`

Jalankan perintah ini dari direktori yang berisi file `docker-compose.yml` Anda.

#### `docker compose up [OPTIONS] [SERVICE...]`

Membangun (jika perlu), membuat, memulai, dan melampirkan (attach) ke kontainer untuk semua layanan yang didefinisikan dalam `docker-compose.yml`.

*   `docker compose up`: Memulai semua layanan di latar depan (log ditampilkan di terminal). Tekan `Ctrl+C` untuk menghentikan.
*   `docker compose up -d`: Memulai semua layanan di latar belakang (detached mode). Ini yang paling umum digunakan.
*   `docker compose up --build`: Memaksa build ulang image sebelum memulai layanan, bahkan jika image sudah ada.
*   `docker compose up --no-deps`: Hanya memulai layanan yang ditentukan, tanpa memulai dependensinya.
*   `docker compose up <nama_layanan_1> <nama_layanan_2>`: Hanya memulai layanan tertentu (dan dependensinya secara default).

#### `docker compose down [OPTIONS]`

Menghentikan dan menghapus kontainer, jaringan, dan (opsional) volume yang dibuat oleh `docker compose up`.

*   `docker compose down`: Menghentikan dan menghapus kontainer dan jaringan default.
*   `docker compose down -v` atau `--volumes`: Menghapus juga *named volumes* yang didefinisikan di blok `volumes` di `docker-compose.yml`. **Hati-hati dengan data Anda!**
*   `docker compose down --rmi all`: Menghapus image yang digunakan oleh layanan.
*   `docker compose down --rmi local`: Menghapus image yang dibangun secara lokal.

#### `docker compose ps [OPTIONS] [SERVICE...]`

Menampilkan status kontainer untuk layanan dalam proyek Compose.

#### `docker compose logs [OPTIONS] [SERVICE...]`

Menampilkan log dari layanan.

*   `docker compose logs`: Tampilkan log dari semua layanan.
*   `docker compose logs -f` atau `--follow`: Ikuti output log secara real-time.
*   `docker compose logs --tail 50`: Tampilkan 50 baris terakhir.
*   `docker compose logs <nama_layanan>`: Tampilkan log hanya dari layanan tertentu.

#### `docker compose exec [OPTIONS] SERVICE COMMAND [ARG...]`

Menjalankan perintah di dalam kontainer layanan yang *sedang berjalan*. Mirip `docker exec`.

*   `docker compose exec web bash`: Membuka shell bash interaktif di kontainer layanan `web`.
*   `docker compose exec db psql -U user -d appdb`: Menjalankan `psql` di kontainer layanan `db`.

#### `docker compose build [OPTIONS] [SERVICE...]`

Membangun atau membangun ulang image untuk layanan yang memiliki definisi `build`.

#### `docker compose pull [OPTIONS] [SERVICE...]`

Menarik (pull) image yang diperlukan untuk layanan dari registry.

#### `docker compose stop [OPTIONS] [SERVICE...]` / `start [SERVICE...]` / `restart [SERVICE...]`

Menghentikan, memulai, atau memulai ulang kontainer layanan tanpa menghapusnya.


#### `docker compose rm [OPTIONS] [SERVICE...]`

Menghapus kontainer layanan yang *sudah berhenti*.

### Contoh Aplikasi Multi-Kontainer (Web App + Redis Cache)

**Direktori Proyek:**

```
my-node-redis-app/
├── docker-compose.yml
├── app/                 # Direktori aplikasi Node.js
│   ├── server.js
│   ├── package.json
│   └── Dockerfile       # Dockerfile untuk aplikasi Node.js
└── README.md
```

**`app/Dockerfile`:**

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

**`app/package.json` (contoh):**

```json
{
  "name": "node-redis-app",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
    "express": "^4.17.1",
    "redis": "^4.0.0" # Versi redis client mungkin perlu disesuaikan
  }
}
```

**`app/server.js` (contoh sangat sederhana):**

```javascript
const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();

// Hubungkan ke Redis menggunakan nama layanan 'cache' dari Compose
// dan port default Redis 6379
const redisClient = redis.createClient({
  // Gunakan 'legacyMode: true' jika menggunakan redis v4 dengan callback gaya lama
  // url: 'redis://cache:6379' // Format URL lebih modern
  socket: {
    host: process.env.REDIS_HOST || 'cache', // Ambil dari env atau default 'cache'
    port: process.env.REDIS_PORT || 6379
  }
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await redisClient.connect(); // Harus connect di v4
  console.log('Terhubung ke Redis');

  // Inisialisasi counter jika belum ada
  const exists = await redisClient.exists('visits');
  if (!exists) {
    await redisClient.set('visits', 0);
  }
})();


app.get('/', async (req, res) => {
  try {
    const visits = await redisClient.incr('visits'); // Increment counter 'visits'
    res.send(`Jumlah kunjungan: ${visits}`);
  } catch (err) {
    console.error('Error saat mengakses Redis:', err);
    res.status(500).send('Error terhubung ke cache');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});

// Handle graceful shutdown (opsional tapi bagus)
process.on('SIGINT', async () => {
  console.log('Menutup koneksi Redis...');
  await redisClient.quit();
  process.exit(0);
});
process.on('SIGTERM', async () => {
  console.log('Menutup koneksi Redis...');
  await redisClient.quit();
  process.exit(0);
});

```

**`docker-compose.yml`:**

```yaml
version: '3.8'

services:
  # Layanan aplikasi Node.js
  app:
    # Membangun dari Dockerfile di direktori ./app
    build: ./app
    ports:
      # Memetakan port 3000 host ke port 3000 kontainer
      - "3000:3000"
    # Me-mount kode sumber untuk pengembangan (opsional)
    # volumes:
    #   - ./app:/app
    #   - /app/node_modules # Mencegah node_modules host menimpa yg di kontainer
    networks:
      - app-network
    # Bergantung pada layanan 'cache' untuk dimulai terlebih dahulu
    depends_on:
      - cache
    environment:
      # Bisa override host redis jika perlu
      - REDIS_HOST=cache
      - REDIS_PORT=6379
      - PORT=3000
    # Kebijakan restart jika gagal
    restart: on-failure

  # Layanan cache Redis
  cache:
    image: "redis:6-alpine"
    networks:
      - app-network
    # Bisa menambahkan volume untuk persistensi Redis jika diperlukan
    # volumes:
    #  - redis-data:/data

# Mendefinisikan jaringan kustom
networks:
  app-network:
    driver: bridge

# Mendefinisikan volume (jika digunakan)
# volumes:
#   redis-data:
```

**Menjalankan:**

1.  Buka terminal di direktori `my-node-redis-app`.
2.  Jalankan: `docker compose up -d`
3.  Buka browser atau gunakan `curl` ke `http://localhost:3000`. Setiap kali Anda refresh, counter kunjungan harus bertambah, menunjukkan komunikasi antara layanan `app` dan `cache` (Redis).
4.  Untuk menghentikan dan membersihkan: `docker compose down`

### Variabel Lingkungan & File `.env`

Seringkali Anda perlu mengkonfigurasi layanan menggunakan variabel lingkungan (misalnya, kunci API, kredensial database, mode aplikasi).

*   **Langsung di `docker-compose.yml`:** Seperti contoh di atas (`environment:`). Cocok untuk nilai non-sensitif atau nilai default.
*   **Menggunakan File `.env`:** Docker Compose secara otomatis mencari file bernama `.env` di direktori yang sama dengan `docker-compose.yml` (atau direktori induk). Variabel yang didefinisikan di file `.env` ini dapat digunakan di dalam `docker-compose.yml` menggunakan sintaks `${VARIABLE_NAME}`.
    *   **Contoh `.env`:**
        ```env
        # Konfigurasi Database
        POSTGRES_USER=admin
        POSTGRES_PASSWORD=supersecret
        POSTGRES_DB=prod_db

        # Port Aplikasi
        APP_PORT=8000
        ```
    *   **Contoh penggunaan di `docker-compose.yml`:**
        ```yaml
        services:
          db:
            image: postgres:14
            environment:
              - POSTGRES_USER=${POSTGRES_USER}
              - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
              - POSTGRES_DB=${POSTGRES_DB}
          app:
            build: .
            ports:
              - "${APP_PORT}:80" # Menggunakan variabel dari .env
            environment:
              - DB_USER=${POSTGRES_USER} # Bisa digunakan di beberapa tempat
              # ...
        ```
    *   **PENTING:** Jangan memasukkan file `.env` yang berisi rahasia ke dalam version control (Git). Tambahkan `.env` ke file `.gitignore` Anda.

*   **Menggunakan `env_file`:** Anda dapat menentukan satu atau lebih file environment kustom per layanan.
    ```yaml
    services:
      api:
        image: my-api
        env_file:
          - ./config/api.env # Path relatif terhadap compose file
          - ./config/common.env
    ```

### Menggunakan Profil

Fitur yang berguna untuk mengaktifkan/menonaktifkan grup layanan tertentu. Misalnya, Anda mungkin hanya ingin menjalankan layanan inti saat pengembangan, tetapi menjalankan layanan tambahan (seperti monitoring atau debugging tools) di lingkungan lain.

```yaml
version: '3.8'
services:
  web:
    image: nginx
    ports: ["80:80"]
    profiles: ["core"] # Layanan ini bagian dari profil 'core'

  db:
    image: postgres
    profiles: ["core", "database"] # Bisa di beberapa profil

  prometheus:
    image: prom/prometheus
    profiles: ["monitoring"] # Hanya aktif jika profil 'monitoring' dipilih

  grafana:
    image: grafana/grafana
    profiles: ["monitoring"]
    depends_on: [prometheus]

# Tidak ada profil = selalu aktif
# profiles: ["*"] = selalu aktif (eksplisit)
```

**Menjalankan dengan Profil:**

*   `docker compose up`: Hanya memulai layanan *tanpa* profil atau dengan profil `core` (jika ada, `core` sering dianggap default implisit jika tidak ada profil lain yang ditentukan). Dalam contoh di atas, hanya `web` dan `db` yang mungkin dimulai (perilaku default bisa bervariasi sedikit antar versi Compose).
*   `docker compose --profile monitoring up -d`: Memulai layanan *tanpa* profil DAN layanan dengan profil `monitoring` (`prometheus`, `grafana`). Layanan `web` dan `db` tidak akan dimulai.
*   `docker compose --profile core --profile monitoring up -d`: Memulai layanan *tanpa* profil, profil `core`, DAN profil `monitoring`. Semua layanan akan dimulai.

### Meng-override Konfigurasi

Anda dapat memiliki beberapa file Compose dan menggabungkannya. File yang disebutkan terakhir akan meng-override atau menambahkan konfigurasi dari file sebelumnya. Ini berguna untuk menyesuaikan konfigurasi dasar untuk lingkungan yang berbeda (pengembangan, produksi, pengujian).

Secara default, Compose mencari `docker-compose.yml` dan `docker-compose.override.yml`. Override file biasanya digunakan untuk penyesuaian lokal (misalnya, port yang berbeda, bind mount kode sumber untuk pengembangan).

```bash
# Compose akan membaca docker-compose.yml lalu docker-compose.override.yml
docker compose up

# Menggunakan file kustom secara eksplisit
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

**Contoh `docker-compose.override.yml` (untuk pengembangan):**

```yaml
# docker-compose.override.yml
version: '3.8'
services:
  web:
    # Tambahkan bind mount untuk live reload
    volumes:
      - ./frontend/src:/app/src
    # Ganti perintah untuk menjalankan server dev
    command: npm run dev
    # Ekspos port yang berbeda untuk dev
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
```

Ketika Anda menjalankan `docker compose up`, konfigurasi dari `docker-compose.yml` akan digabungkan dengan `docker-compose.override.yml`.

---

## 10. Docker Hub & Registry Lainnya

Image Docker perlu disimpan di suatu tempat agar bisa dibagikan dan digunakan kembali. Tempat penyimpanan ini disebut **Registry**.

### Apa Itu Registry?

Registry Docker adalah layanan (atau server) yang menyimpan dan mendistribusikan image Docker. Ini berfungsi seperti Git repository (misalnya GitHub, GitLab) tetapi untuk image Docker.

*   **Repositori:** Di dalam registry, image diorganisir ke dalam *repositori*. Setiap repositori berisi satu atau lebih image yang terkait, biasanya versi berbeda dari aplikasi atau layanan yang sama (misalnya, repositori `nginx` berisi image `nginx:latest`, `nginx:1.21`, `nginx:stable-alpine`).
*   **Tag:** Setiap image dalam repositori diidentifikasi oleh *tag* (mirip tag Git). Tag biasanya menunjukkan versi (misalnya, `1.21`, `3.9.7`) atau varian (misalnya, `latest`, `alpine`, `slim`). Jika tag tidak ditentukan, Docker mengasumsikan tag `latest`.
*   **Nama Image Lengkap:** Formatnya adalah `[nama_registry[:port]/][nama_user_atau_org/]<nama_repositori>[:<tag>]`.
    *   `nginx` (Registry default Docker Hub, repositori resmi `nginx`, tag `latest`)
    *   `python:3.9-slim` (Registry default Docker Hub, repositori resmi `python`, tag `3.9-slim`)
    *   `johndoe/my-app:v2` (Registry default Docker Hub, repositori `my-app` milik user `johndoe`, tag `v2`)
    *   `gcr.io/my-google-project/my-api:prod` (Registry Google GCR, project `my-google-project`, repositori `my-api`, tag `prod`)
    *   `localhost:5000/my-local-image:test` (Registry berjalan di `localhost` port 5000, repositori `my-local-image`, tag `test`)

### Docker Hub

*   **Registry Publik Default:** [Docker Hub](https://hub.docker.com/) adalah registry terbesar dan default yang dikelola oleh Docker Inc.
*   **Image Resmi:** Menyediakan "Official Images" untuk banyak perangkat lunak populer (OS, bahasa, database, dll.). Ini adalah image yang dikelola dan divalidasi oleh Docker dan komunitas upstream, dianggap sebagai titik awal yang baik dan terpercaya.
*   **Repositori Komunitas & Pribadi:** Siapa pun dapat membuat akun (gratis atau berbayar) dan mengunggah (push) image mereka sendiri ke repositori publik atau privat.
    *   **Akun Gratis:** Biasanya memiliki batasan jumlah repositori privat dan batasan rate limit penarikan (pull).
    *   **Akun Berbayar (Pro, Team, Business):** Menawarkan lebih banyak repositori privat, anggota tim, fitur keamanan (pemindaian kerentanan), build otomatis, dan rate limit yang lebih tinggi.

**Interaksi dengan Docker Hub:**

1.  **Mencari Image (`docker search`)**:
    ```bash
    docker search nginx
    docker search python --filter is-official=true
    ```
    (Lebih mudah mencari langsung di situs web Docker Hub).

2.  **Menarik Image (`docker pull`)**: Mengunduh image dari Docker Hub ke mesin lokal Anda.
    ```bash
    docker pull ubuntu:20.04
    docker pull redis:alpine
    docker pull yourusername/your-repo:tag # Jika menarik repo Anda sendiri
    ```

3.  **Login (`docker login`)**: Diperlukan untuk mendorong (push) image atau menarik image dari repositori *privat*.
    ```bash
    docker login
    # Masukkan username dan password (atau Access Token) Docker Hub Anda
    ```
    (Untuk keamanan, disarankan membuat [Access Token](https://docs.docker.com/docker-hub/access-tokens/) di pengaturan akun Docker Hub Anda dan menggunakannya sebagai pengganti password saat login dari CLI).

4.  **Memberi Tag pada Image (`docker tag`)**: Sebelum mendorong image Anda ke Docker Hub, Anda perlu memberinya tag dengan format yang benar (`<dockerhub_username>/<repo_name>:<tag>`).
    ```bash
    # Asumsikan Anda sudah build image 'my-app:1.0' secara lokal
    docker tag my-app:1.0 yourusername/my-app:1.0
    docker tag my-app:1.0 yourusername/my-app:latest # Tag tambahan
    ```

5.  **Mendorong Image (`docker push`)**: Mengunggah image yang sudah di-tag ke Docker Hub (harus sudah login).
    ```bash
    docker push yourusername/my-app:1.0
    docker push yourusername/my-app:latest
    ```

6.  **Logout (`docker logout`)**: Keluar dari sesi login Docker Hub.
    ```bash
    docker logout
    ```

7.  **Automated Builds (Build Otomatis):** Docker Hub dapat terhubung ke repositori kode Anda (GitHub, Bitbucket) dan secara otomatis membangun image Docker setiap kali Anda melakukan push ke branch tertentu atau membuat tag Git. Ini adalah fitur CI/CD dasar yang terintegrasi.

### Registry Privat

Meskipun Docker Hub bagus untuk image publik dan memulai, organisasi seringkali memerlukan registry privat karena alasan:

*   **Keamanan:** Menyimpan image internal yang berisi kode proprietary atau konfigurasi sensitif.
*   **Kontrol Akses:** Mengelola siapa yang dapat menarik (pull) atau mendorong (push) image.
*   **Kepatuhan (Compliance):** Memenuhi persyaratan peraturan tertentu.
*   **Ketersediaan & Performa:** Menghosting registry lebih dekat dengan infrastruktur Anda untuk pull yang lebih cepat dan andal.
*   **Menghindari Rate Limit:** Menghindari batasan rate limit Docker Hub publik.

**Pilihan Registry Privat:**

1.  **Menjalankan Registry Sendiri (`docker run registry:2`)**: Docker menyediakan image `registry` resmi yang memungkinkan Anda menjalankan instance registry dasar dengan mudah di infrastruktur Anda sendiri.
    ```bash
    docker run -d -p 5000:5000 --restart=always --name my-local-registry registry:2
    ```
    *   **Peringatan:** Registry ini secara default tidak aman (HTTP) dan tidak memiliki UI atau manajemen pengguna bawaan. Untuk penggunaan produksi, Anda perlu mengamankannya dengan TLS (HTTPS) dan kemungkinan menambahkan otentikasi. Solusi seperti [Harbor](https://goharbor.io/) adalah proyek open-source yang menyediakan registry privat yang lebih lengkap dengan fitur keamanan, UI, RBAC, dll.
    *   **Menggunakan Registry Lokal:**
        ```bash
        # 1. Tag image Anda
        docker tag my-app:1.0 localhost:5000/my-app:1.0
        # 2. Push
        docker push localhost:5000/my-app:1.0
        # 3. Pull (dari mesin lain yang bisa akses localhost:5000, atau mesin yg sama)
        #    Mungkin perlu konfigurasi Docker daemon untuk mempercayai registry insecure ini
        docker pull localhost:5000/my-app:1.0
        ```

2.  **Layanan Registry Cloud Terkelola:** Penyedia cloud besar menawarkan layanan registry terkelola yang terintegrasi dengan ekosistem mereka:
    *   **Amazon Elastic Container Registry (AWS ECR):** Terintegrasi erat dengan AWS IAM, ECS, EKS. Sangat skalabel dan aman.
    *   **Google Container Registry (GCR) / Artifact Registry:** Terintegrasi dengan Google Cloud IAM, GKE, Cloud Build. Artifact Registry adalah penerus GCR yang lebih baru dan mendukung format artefak lain selain image Docker.
    *   **Azure Container Registry (ACR):** Terintegrasi dengan Azure AD, AKS, Azure DevOps. Menawarkan geo-replikasi, pemindaian keamanan.

3.  **Platform DevOps Lainnya:**
    *   **GitLab Container Registry:** Terintegrasi dalam platform GitLab. Setiap proyek GitLab bisa memiliki registry container sendiri.
    *   **GitHub Container Registry (ghcr.io):** Terintegrasi dengan GitHub Packages dan Actions.
    *   **JFrog Artifactory:** Manajer repositori artefak universal yang mendukung image Docker dan banyak format lainnya.

**Menggunakan Registry Privat (Umum):**

1.  **Login:** Gunakan `docker login <nama_registry>` (misalnya, `docker login myprivateregistry.com`, `docker login <aws_account_id>.dkr.ecr.<region>.amazonaws.com`). Mekanisme autentikasi bervariasi (username/password, token, helper kredensial cloud).
2.  **Tag:** Tag image Anda dengan nama registry lengkap: `docker tag my-app:1.0 myprivateregistry.com/my-org/my-app:1.0`.
3.  **Push:** `docker push myprivateregistry.com/my-org/my-app:1.0`.
4.  **Pull:** `docker pull myprivateregistry.com/my-org/my-app:1.0`.

---

## 11. Keamanan Docker (Docker Security)

Kontainer menawarkan isolasi, tetapi bukan berarti aman secara otomatis. Mengamankan lingkungan Docker melibatkan perhatian pada seluruh siklus hidup: membangun image, mengkonfigurasi registry, menjalankan kontainer, dan mengamankan host Docker itu sendiri.

### Prinsip Dasar Keamanan Kontainer

*   **Least Privilege:** Berikan kontainer dan proses di dalamnya hanya izin yang benar-benar diperlukan untuk berfungsi.
*   **Defense in Depth:** Terapkan beberapa lapisan keamanan. Jangan hanya mengandalkan satu mekanisme.
*   **Minimalkan Attack Surface:** Jaga image tetap kecil, hapus tool yang tidak perlu, dan ekspos hanya port yang diperlukan.
*   **Immutable Infrastructure:** Perlakukan kontainer sebagai unit yang tidak dapat diubah. Jika perlu pembaruan, bangun image baru dan deploy ulang, jangan memodifikasi kontainer yang sedang berjalan.
*   **Pindai & Patch:** Pindai kerentanan secara teratur dan terapkan patch keamanan.

### Keamanan Image

Keamanan dimulai dari cara Anda membangun image.

1.  **Gunakan Base Image Terpercaya & Minimalis:**
    *   Mulai dari image resmi jika memungkinkan, atau image yang dikelola oleh sumber tepercaya.
    *   Pilih varian terkecil (misalnya, `alpine`, `slim`, `distroless`) untuk mengurangi jumlah paket dan potensi kerentanan.
    *   Hindari image acak dari Docker Hub yang tidak jelas asal-usul atau pemeliharaannya.

2.  **Jangan Menyimpan Rahasia dalam Image:**
    *   **SANGAT PENTING:** Hindari menyalin kunci API, password, token, sertifikat, atau kredensial lainnya langsung ke dalam Dockerfile atau layer image. Image dapat diinspeksi, dan rahasia ini akan terekspos.
    *   Gunakan mekanisme manajemen rahasia saat runtime (dibahas di bawah).

3.  **Pindai Kerentanan (Image Scanning):**
    *   Gunakan alat pemindaian image untuk mendeteksi kerentanan keamanan yang diketahui (CVEs) dalam paket OS dan dependensi aplikasi di dalam image Anda.
    *   **Alat:** Docker Scout (terintegrasi dengan Docker Hub/Desktop), Trivy (Open Source), Clair (Open Source), Snyk, Aqua Security, Qualys, dll.
    *   Integrasikan pemindaian ke dalam pipeline CI/CD Anda untuk menangkap kerentanan sebelum image di-deploy.

4.  **Verifikasi Image (Docker Content Trust / Notary):**
    *   Docker Content Trust (DCT) menggunakan tanda tangan digital (Notary) untuk memverifikasi integritas dan penerbit image.
    *   Memungkinkan Anda memastikan bahwa image yang Anda tarik (pull) atau jalankan adalah persis seperti yang ditandatangani oleh penerbit tepercaya dan belum dimodifikasi.
    *   Aktifkan dengan `export DOCKER_CONTENT_TRUST=1`. Docker CLI kemudian hanya akan mengizinkan operasi pada image yang ditandatangani dan terverifikasi.

5.  **Update Dependensi & Base Image Secara Teratur:**
    *   Jadwalkan build ulang image secara berkala untuk mengambil patch keamanan terbaru dari base image dan dependensi aplikasi. Gunakan tag base image spesifik, tetapi perbarui tag itu secara teratur.

6.  **Gunakan Multi-Stage Builds:**
    *   Seperti dibahas sebelumnya, ini menghilangkan tool build, kompiler, dan dependensi pengembangan dari image produksi akhir, secara signifikan mengurangi permukaan serangan.

7.  **Jalankan sebagai Non-Root User (`USER` di Dockerfile):**
    *   Hindari menjalankan proses di dalam kontainer sebagai `root` (UID 0) jika memungkinkan.
    *   Buat user khusus non-root di Dockerfile (`RUN useradd ...`) dan beralih ke user tersebut (`USER myuser`) sebelum `CMD` atau `ENTRYPOINT`.
    *   Jika proses di dalam kontainer disusupi, dampaknya akan terbatas karena tidak memiliki hak root.

### Keamanan Kontainer saat Runtime

Setelah image dibangun, amankan cara Anda menjalankan kontainer.

1.  **Jalankan Kontainer sebagai Non-Root:** Ini adalah tindak lanjut dari praktik keamanan image. Bahkan jika image tidak diatur untuk berjalan sebagai non-root, Anda dapat mencoba memaksanya saat runtime (meskipun mungkin menyebabkan masalah izin jika aplikasi tidak dirancang untuk itu):
    ```bash
    docker run -u <UID>:<GID> ... # Jalankan sebagai UID/GID tertentu
    docker run --user nobody ...   # Coba jalankan sebagai user 'nobody'
    ```
    Cara terbaik adalah mengaturnya di Dockerfile.

2.  **Gunakan Sistem File Read-Only (`--read-only`):**
    *   Jika memungkinkan, jalankan kontainer dengan filesystem root read-only. Ini mencegah penyerang (atau proses yang salah) menulis ke filesystem kontainer di luar volume yang di-mount secara eksplisit.
    *   Memerlukan perencanaan yang cermat karena aplikasi mungkin perlu menulis ke direktori sementara atau log. Anda perlu me-mount volume (atau `tmpfs`) untuk path-path tersebut.
    ```bash
    docker run --read-only --tmpfs /tmp -v logs:/var/log my-app
    ```

3.  **Batasi Resource (`--memory`, `--cpus`, dll.):**
    *   Mencegah kontainer tunggal menghabiskan semua resource host (DoS).
    *   Gunakan flag `docker run` seperti `--memory`, `--memory-swap`, `--cpus`, `--pids-limit`.
    ```bash
    docker run -d --memory=512m --cpus="0.5" my-app
    ```

4.  **Manajemen Kapabilitas Linux (Capabilities):**
    *   Secara default, Docker menjalankan kontainer dengan subset terbatas dari kapabilitas Linux (hak istimewa root yang dipecah).
    *   Hindari memberikan kapabilitas tambahan kecuali benar-benar diperlukan. Jangan gunakan `--privileged` kecuali mutlak diperlukan (memberikan hampir semua kapabilitas host ke kontainer, sangat berbahaya).
    *   Gunakan `--cap-drop` untuk menghapus kapabilitas yang tidak perlu dan `--cap-add` untuk menambahkan hanya yang diperlukan.
    ```bash
    # Hapus semua kapabilitas, tambahkan hanya NET_BIND_SERVICE (untuk binding ke port < 1024)
    docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE ...
    ```

5.  **Profil Keamanan (Seccomp, AppArmor, SELinux):**
    *   Mekanisme keamanan Linux tingkat lanjut untuk membatasi panggilan sistem (syscalls) atau akses file/jaringan yang dapat dilakukan oleh proses kontainer.
    *   Docker menggunakan profil `seccomp` default yang memblokir beberapa syscalls berbahaya. Anda dapat menyediakan profil kustom (`--security-opt seccomp=<profil.json>`).
    *   AppArmor dan SELinux adalah Modul Keamanan Linux (LSM) yang menyediakan kontrol akses mandatory (MAC). Docker dapat berintegrasi dengan profil AppArmor/SELinux yang ada di host (`--security-opt apparmor=<profil>`, `--security-opt label=...` untuk SELinux).
    *   Mengkonfigurasi profil ini membutuhkan pemahaman mendalam tentang Linux dan aplikasi Anda.

6.  **Jangan Me-mount Socket Docker (`docker.sock`) ke Dalam Kontainer:**
    *   File `/var/run/docker.sock` adalah Unix socket yang digunakan Docker client untuk berkomunikasi dengan daemon. Me-mount socket ini ke dalam kontainer (`-v /var/run/docker.sock:/var/run/docker.sock`) memberikan kontainer tersebut **kontrol penuh atas Docker daemon host**, setara dengan hak root penuh di host.
    *   Hanya lakukan ini jika Anda benar-benar mempercayai image tersebut dan memahami risikonya (misalnya, untuk alat manajemen Docker seperti Portainer, atau dalam CI/CD runners yang terisolasi).

7.  **Gunakan Jaringan User-Defined:** Seperti dibahas sebelumnya, ini memberikan segmentasi jaringan yang lebih baik daripada jaringan `bridge` default.

### Keamanan Jaringan

*   **Ekspos Hanya Port yang Diperlukan:** Gunakan `-p` hanya untuk port yang benar-benar perlu diakses dari luar.
*   **Jangan Gunakan `--network host` Kecuali Diperlukan:** Hindari menonaktifkan isolasi jaringan.
*   **Gunakan Firewall Host:** Konfigurasikan firewall di host Docker (misalnya, `iptables`, `ufw`, `firewalld`) untuk membatasi lalu lintas masuk/keluar ke/dari host dan kontainer. Docker memanipulasi `iptables`, jadi pastikan konfigurasi Anda tidak konflik.
*   **Pertimbangkan Jaringan Overlay Terenkripsi:** Jika menggunakan Docker Swarm dan memerlukan komunikasi aman antar node, aktifkan enkripsi untuk jaringan overlay.

### Manajemen Rahasia (Secrets Management)

Cara aman untuk menyediakan data sensitif (password, token, kunci API) ke kontainer saat runtime, tanpa menyimpannya di image.

1.  **Docker Secrets (untuk Docker Swarm):**
    *   Fitur bawaan Docker Swarm. Rahasia disimpan secara terenkripsi di Raft store manager Swarm.
    *   Saat layanan dideploy, rahasia di-mount ke dalam kontainer sebagai **file** di `/run/secrets/<nama_secret>` (dalam `tmpfs`, jadi hanya di memori).
    *   Aplikasi di dalam kontainer perlu membaca rahasia dari file ini.
    *   Ini adalah metode yang disukai saat menggunakan Swarm.

2.  **Mounting File Rahasia (Bind Mount atau Volume):**
    *   Simpan rahasia dalam file di host Docker yang aman (dengan izin terbatas).
    *   Mount file ini ke dalam kontainer menggunakan bind mount (`-v /path/host/secret.txt:/path/container/secret.txt:ro`) atau salin ke named volume yang aman.
    *   Pastikan mount bersifat read-only (`:ro`).
    *   Metode ini lebih sederhana untuk setup non-Swarm, tetapi memerlukan manajemen file rahasia di host.

3.  **Variabel Lingkungan (Kurang Aman):**
    *   Menyediakan rahasia melalui variabel lingkungan (`-e SECRET_KEY=...` atau via `env_file` di Compose) adalah praktik yang **umum tetapi kurang aman**.
    *   Variabel lingkungan dapat **terlihat** melalui `docker inspect`, log, atau jika proses child mewarisinya.
    *   Hindari ini untuk rahasia yang sangat sensitif jika memungkinkan. Gunakan hanya jika metode lain tidak praktis dan Anda memahami risikonya.

4.  **Solusi Manajemen Rahasia Eksternal (Pihak Ketiga):**
    *   Untuk manajemen rahasia yang lebih canggih, terpusat, dan aman, gunakan alat seperti:
        *   **HashiCorp Vault:** Solusi manajemen rahasia open-source yang sangat populer dan kuat. Memiliki integrasi dengan Docker dan orkestrator lain.
        *   Layanan Manajemen Rahasia Cloud (AWS Secrets Manager, Google Secret Manager, Azure Key Vault).
    *   Kontainer biasanya memerlukan agen atau library khusus untuk mengambil rahasia dari sistem ini saat startup atau runtime.

### Keamanan Docker Daemon

Daemon Docker itu sendiri perlu diamankan.

*   **Amankan Akses ke Daemon Socket:** Secara default, `docker.sock` dimiliki oleh `root` dan grup `docker`. Seperti disebutkan, anggota grup `docker` memiliki hak setara root. Batasi keanggotaan grup ini seminimal mungkin.
*   **Gunakan TLS untuk Remote Access:** Jika Anda perlu mengizinkan akses ke Docker daemon dari jarak jauh (melalui TCP), **selalu** amankan koneksi menggunakan TLS (HTTPS) dengan otentikasi klien dan server. Jangan pernah mengekspos daemon tanpa enkripsi dan otentikasi.
*   **Jaga Host Tetap Aman:** Keamanan kontainer bergantung pada keamanan host OS di bawahnya. Jaga host tetap ter-patch, gunakan firewall, batasi akses SSH/remote, dan ikuti praktik keamanan host standar.

### Audit & Logging

*   **Log Kontainer:** Konfigurasikan driver logging Docker (`docker run --log-driver ...` atau di `daemon.json`) untuk mengirim log kontainer ke sistem logging terpusat (misalnya, Syslog, Splunk, ELK/EFK Stack, Fluentd) untuk analisis dan pemantauan.
*   **Log Daemon Docker:** Pantau log daemon Docker itu sendiri (biasanya dikelola oleh systemd journal atau di `/var/log`) untuk event penting atau error.
*   **Audit:** Gunakan alat audit Linux (`auditd`) di host untuk mencatat event terkait Docker (misalnya, pembuatan/penghapusan kontainer, akses ke daemon socket).

---

## 12. Tips, Trik, & Praktik Terbaik (Ringkasan)

Berikut adalah ringkasan poin-poin penting dan praktik terbaik yang telah dibahas:

**Dockerfile & Image Building:**

1.  **Base Image:** Gunakan image resmi, spesifik tag, dan minimalis (`alpine`, `slim`).
2.  **Cache Layers:** Urutkan instruksi dari jarang -> sering berubah (instal deps -> copy kode).
3.  **Gabungkan `RUN`:** Kurangi jumlah layer dengan `&&` dan bersihkan cache (`apt-get clean`, `rm -rf /tmp/*`).
4.  **.dockerignore:** Cegah file tidak perlu masuk konteks build.
5.  **`COPY` > `ADD`:** Gunakan `COPY` kecuali perlu fitur `ADD` (URL/ekstrak tar).
6.  **`CMD` vs `ENTRYPOINT`:** Pahami perbedaannya; `ENTRYPOINT` + `CMD` (exec form) adalah pola umum.
7.  **`WORKDIR`:** Gunakan untuk mengatur direktori kerja.
8.  **`USER`:** Jalankan sebagai non-root user.
9.  **Multi-Stage Builds:** Jaga image produksi tetap kecil dan aman.
10. **No Secrets:** Jangan pernah hardcode rahasia dalam image.
11. **Scan Images:** Pindai kerentanan secara teratur.
12. **Content Trust:** Verifikasi integritas image (jika perlu).

**Containers & Runtime:**

13. **Least Privilege:** Jalankan sebagai non-root, batasi kapabilitas (`--cap-drop`), jangan `--privileged`.
14. **Read-Only Filesystem:** Gunakan `--read-only` jika memungkinkan, mount volume/tmpfs untuk data writable.
15. **Resource Limits:** Batasi memori (`--memory`) dan CPU (`--cpus`).
16. **Secrets Management:** Gunakan Docker Secrets (Swarm), volume mount file, atau Vault (hindari env var untuk data sensitif).
17. **Docker Socket:** Jangan mount `docker.sock` ke kontainer kecuali mutlak perlu dan terpercaya.
18. **Logging:** Konfigurasikan driver logging untuk mengirim log ke sistem terpusat.

**Data Persistence:**

19. **Named Volumes > Bind Mounts:** Gunakan named volumes untuk data persisten aplikasi (portabel, terkelola Docker).
20. **Bind Mounts for Dev:** Gunakan bind mounts untuk kode sumber saat pengembangan atau file konfigurasi dari host. Waspadai isu izin.

**Networking:**

21. **User-Defined Networks:** Selalu gunakan jaringan bridge user-defined (`docker network create`) untuk komunikasi antar kontainer (memberikan DNS resolution by name).
22. **Hindari Default Bridge:** Jangan andalkan jaringan `bridge` default untuk komunikasi antar kontainer.
23. **Expose/Publish Sparingly:** Hanya ekspos (`EXPOSE`) dan publikasikan (`-p`) port yang benar-benar diperlukan.
24. **Hindari Host Network:** Jangan gunakan `--network host` kecuali ada alasan kuat terkait performa atau fungsi.

**Docker Compose:**

25. **Gunakan Compose for Multi-Container:** Definisikan dan jalankan aplikasi multi-kontainer dengan `docker-compose.yml`.
26. **`depends_on` != Readiness:** `depends_on` hanya menunggu start, bukan kesiapan layanan. Gunakan healthcheck atau skrip wait.
27. **`.env` File:** Kelola konfigurasi per lingkungan menggunakan file `.env` (jangan commit rahasia!).
28. **Override Files:** Gunakan `docker-compose.override.yml` untuk penyesuaian lokal/pengembangan.
29. **Profiles:** Aktifkan/nonaktifkan grup layanan untuk skenario berbeda.

**General:**

30. **Keep Docker Updated:** Jaga Docker Engine dan Compose tetap up-to-date.
31. **Prune Regularly:** Bersihkan kontainer, image, volume, dan jaringan yang tidak terpakai (`docker system prune`, `docker volume prune`, dll.) untuk menghemat ruang disk.
32. **Understand the Host:** Keamanan dan performa kontainer bergantung pada host OS.

---

## 13. Troubleshooting Umum

Saat bekerja dengan Docker, Anda pasti akan menemui masalah. Berikut beberapa masalah umum dan cara mengatasinya:

1.  **Kontainer Tidak Mau Start / Langsung Exit:**
    *   **Penyebab:** Perintah utama (`CMD`/`ENTRYPOINT`) selesai atau gagal dieksekusi. Kontainer hanya berjalan selama proses utamanya berjalan.
    *   **Solusi:**
        *   Periksa log kontainer: `docker logs <container_id_or_name>`. Ini biasanya memberikan petunjuk error.
        *   Jalankan kontainer di foreground (tanpa `-d`) untuk melihat output langsung: `docker run -it <image> [command]`
        *   Override entrypoint untuk debugging: `docker run -it --entrypoint bash <image>` (atau `sh`) untuk masuk ke shell dan memeriksa lingkungan atau mencoba menjalankan perintah secara manual.
        *   Pastikan perintah `CMD`/`ENTRYPOINT` Anda benar dan merupakan proses yang berjalan lama (misalnya, server web, bukan perintah one-shot seperti `echo`).

2.  **Error "Bind for 0.0.0.0:PORT failed: port is already allocated" atau "Address already in use":**
    *   **Penyebab:** Port host yang Anda coba petakan (`-p <host_port>:...`) sudah digunakan oleh proses lain di mesin host Anda (bisa kontainer lain atau aplikasi non-Docker).
    *   **Solusi:**
        *   Hentikan proses/kontainer yang menggunakan port tersebut. Gunakan `netstat -tulnp | grep <host_port>` (Linux) atau `lsof -i :<host_port>` (macOS) atau `Get-Process -Id (Get-NetTCPConnection -LocalPort <host_port>).OwningProcess` (Windows PowerShell) untuk menemukan prosesnya.
        *   Gunakan port host yang berbeda: `-p <host_port_lain>:<container_port>`.
        *   Biarkan Docker memilih port host acak: `-p <container_port>`.

3.  **Masalah Konektivitas Jaringan:**
    *   **Kontainer tidak bisa reach kontainer lain:**
        *   Pastikan kedua kontainer berada di **jaringan user-defined yang sama** (bukan `bridge` default). Periksa dengan `docker network inspect <network_name>`.
        *   Gunakan **nama kontainer/layanan** sebagai hostname, bukan IP (jika di jaringan user-defined).
        *   Periksa firewall *di dalam* kontainer (jarang, tapi mungkin).
        *   Gunakan `docker exec <container_name> ping <nama_kontainer_lain>` atau `curl <nama_kontainer_lain>:<port>` untuk tes konektivitas dasar dari dalam kontainer.
    *   **Kontainer tidak bisa reach internet/host:**
        *   Periksa konfigurasi DNS di dalam kontainer: `docker exec <container_name> cat /etc/resolv.conf`. Seharusnya menunjuk ke DNS internal Docker (`127.0.0.11`) atau DNS host.
        *   Periksa konfigurasi firewall *host*. Pastikan forwarding IP diaktifkan dan aturan firewall tidak memblokir lalu lintas Docker.
        *   Periksa konfigurasi jaringan Docker daemon (misalnya, jika Anda mengkonfigurasi `bip` atau `fixed-cidr` di `daemon.json`).
        *   Restart Docker daemon (`sudo systemctl restart docker`).

4.  **Masalah Perizinan (Permission Denied) pada Volume/Bind Mount:**
    *   **Penyebab:** UID/GID proses yang berjalan *di dalam* kontainer tidak cocok dengan kepemilikan file/direktori yang di-mount dari *host* (terutama pada bind mounts di Linux).
    *   **Solusi:**
        *   **Jalankan Kontainer dengan UID/GID Host:** `docker run -u $(id -u):$(id -g) ...`. Ini membuat proses di kontainer berjalan sebagai user Anda di host. Pastikan user tersebut ada di `/etc/passwd` image atau gunakan UID/GID numerik.
        *   **Ubah Kepemilikan di Host:** `sudo chown -R <UID>:<GID> /path/di/host`. Sesuaikan `<UID>:<GID>` agar cocok dengan user di dalam kontainer (bisa didapatkan dengan `docker exec <container> id -u` dan `id -g`). Hati-hati mengubah kepemilikan file sistem.
        *   **Gunakan Named Volumes:** Named volumes seringkali menangani masalah izin dengan lebih baik karena dikelola oleh Docker.
        *   **Konfigurasi Aplikasi:** Beberapa aplikasi (misalnya, database) memungkinkan konfigurasi user/group atau direktori data melalui variabel lingkungan.
        *   **Entrypoint Script:** Buat skrip entrypoint kustom yang memperbaiki izin pada volume saat kontainer dimulai.

5.  **Build Dockerfile Gagal:**
    *   **Penyebab:** Kesalahan sintaks di Dockerfile, perintah `RUN` gagal (misalnya, paket tidak ditemukan, URL mati, error kompilasi), file tidak ditemukan saat `COPY`/`ADD`, masalah jaringan saat build.
    *   **Solusi:**
        *   Baca output error build dengan cermat. Docker menunjukkan langkah mana yang gagal.
        *   Periksa sintaks Dockerfile.
        *   Untuk `RUN` yang gagal, coba jalankan perintah secara manual di base image (`docker run -it <base_image> bash`) untuk debugging.
        *   Pastikan path file untuk `COPY`/`ADD` benar relatif terhadap konteks build dan tidak ada di `.dockerignore`.
        *   Pastikan koneksi internet stabil saat build jika perlu mengunduh paket/file.
        *   Periksa log Docker daemon untuk error yang lebih detail.

6.  **Kehabisan Ruang Disk:**
    *   **Penyebab:** Terlalu banyak image, kontainer berhenti, volume tidak terpakai, dan cache build menumpuk.
    *   **Solusi:**
        *   Gunakan `docker system df` untuk melihat penggunaan disk oleh Docker.
        *   Gunakan `docker system prune -a --volumes` (hati-hati dengan `--volumes`) untuk membersihkan resource yang tidak terpakai secara agresif.
        *   Hapus image atau volume spesifik yang tidak lagi dibutuhkan (`docker rmi ...`, `docker volume rm ...`).
        *   Batasi ukuran log kontainer (gunakan `--log-opt max-size=... --log-opt max-file=...` saat `docker run` atau di `daemon.json`).
        *   Analisis image besar (`docker history <image>`) dan optimalkan Dockerfile (multi-stage, bersihkan layer).

7.  **Performa Lambat (Terutama di Docker Desktop):**
    *   **Penyebab (Docker Desktop):** Overhead I/O filesystem pada bind mounts antara host dan VM Linux (WSL 2 atau Hyper-V). Sinkronisasi file bisa lambat.
    *   **Solusi (Docker Desktop):**
        *   **Gunakan Named Volumes:** Untuk data I/O-intensive, named volumes biasanya memiliki performa lebih baik daripada bind mounts dari filesystem host (misalnya, `C:\` di Windows, `/Users` di macOS).
        *   **Simpan Kode di Filesystem Linux (WSL 2):** Jika menggunakan backend WSL 2 di Windows, simpan kode proyek Anda di dalam filesystem distro WSL 2 (misalnya, di bawah `\\wsl$\Ubuntu\home\<user>\projects`) daripada di `C:\`. Bind mount dari dalam WSL 2 ke kontainer jauh lebih cepat.
        *   **Tuning Resource Docker Desktop:** Alokasikan lebih banyak CPU/Memori ke VM Docker Desktop di Settings > Resources (jika perlu).
        *   **Gunakan `.dockerignore`:** Pastikan Anda tidak menyalin file besar yang tidak perlu (seperti `node_modules`) saat build atau mengamati perubahan pada file tersebut saat bind mount.
        *   **Pertimbangkan Alat Sinkronisasi:** Untuk pengembangan, alat seperti Mutagen dapat menyinkronkan file antara host dan kontainer dengan lebih efisien daripada bind mount murni pada beberapa kasus.

---

## 14. Topik Lanjutan & Ekosistem Docker

Panduan ini mencakup dasar-dasar hingga penggunaan menengah Docker. Ekosistem Docker sangat luas, dan berikut adalah beberapa area lanjutan untuk dijelajahi:

### Docker Swarm (Orkestrasi Bawaan)

*   **Apa itu?** Mode orkestrasi kontainer bawaan Docker. Memungkinkan Anda mengelola *cluster* dari beberapa host Docker (node) sebagai satu sistem virtual.
*   **Fitur Utama:**
    *   **Clustering:** Menggabungkan beberapa mesin Docker menjadi satu "swarm".
    *   **Declarative Services:** Mendefinisikan state yang diinginkan dari aplikasi Anda (misalnya, jalankan 3 replika layanan web `nginx`) menggunakan file stack (mirip `docker-compose.yml`). Swarm akan berusaha mempertahankan state tersebut.
    *   **Scaling:** Mudah untuk menaikkan/menurunkan jumlah replika layanan (`docker service scale ...`).
    *   **Load Balancing:** Menyediakan load balancing internal (routing mesh) untuk layanan yang dipublikasikan.
    *   **Rolling Updates:** Mendukung pembaruan layanan tanpa downtime.
    *   **Security:** Menggunakan TLS bersama untuk komunikasi antar node dan manajemen rahasia bawaan (`docker secret`).
*   **Kapan Digunakan:** Pilihan yang baik untuk orkestrasi jika Anda ingin tetap dalam ekosistem Docker, relatif lebih sederhana untuk disiapkan dan dikelola dibandingkan Kubernetes, dan kebutuhan orkestrasi Anda tidak terlalu kompleks.

### Kubernetes (K8s) & Docker

*   **Apa itu?** Platform orkestrasi kontainer open-source yang dominan di industri saat ini. Awalnya dikembangkan oleh Google. Sangat kuat, fleksibel, dan memiliki ekosistem yang besar.
*   **Hubungan dengan Docker:**
    *   Kubernetes **mengorkestrasi kontainer**. Secara historis, runtime kontainer yang paling umum digunakan oleh Kubernetes adalah **Docker Engine**.
    *   Meskipun K8s sekarang mendukung runtime lain yang sesuai dengan Container Runtime Interface (CRI) seperti `containerd` (yang juga digunakan oleh Docker di bawah kap) dan `CRI-O`, image yang dibuat dengan `docker build` (format OCI) sepenuhnya kompatibel dengan Kubernetes.
    *   Anda masih menggunakan Docker (atau alat build OCI lainnya seperti Buildah) untuk **membangun image** Anda, lalu mendeploy dan mengelola kontainer berdasarkan image tersebut menggunakan **Kubernetes**.
*   **Konsep K8s:** Pods (unit deployment terkecil, bisa berisi >1 kontainer), Services (abstraksi jaringan/load balancing), Deployments (mengelola replika Pods), ConfigMaps & Secrets (manajemen konfigurasi & rahasia), Ingress (manajemen traffic HTTP/S eksternal), dll.
*   **Kapan Digunakan:** Untuk aplikasi skala besar, kompleks, membutuhkan ketersediaan tinggi, skalabilitas otomatis tingkat lanjut, dan memanfaatkan ekosistem cloud-native yang luas. Kurva belajarnya lebih curam daripada Swarm. Docker Desktop bahkan menyertakan opsi untuk menjalankan cluster Kubernetes lokal kecil untuk pengembangan.

### Monitoring & Logging Kontainer (Prometheus, Grafana, ELK/EFK Stack)

*   Menjalankan aplikasi dalam kontainer memerlukan strategi monitoring dan logging yang sesuai.
*   **Monitoring:**
    *   **cAdvisor (Container Advisor):** Alat Google (sering terintegrasi di K8s) yang mengumpulkan metrik resource (CPU, memori, jaringan, disk) dari kontainer.
    *   **Prometheus:** Sistem monitoring dan alerting open-source yang sangat populer. Bekerja dengan model *pull*, mengambil metrik dari *exporter* (seperti cAdvisor atau exporter aplikasi kustom).
    *   **Grafana:** Platform visualisasi open-source yang populer. Digunakan untuk membuat dashboard interaktif dari data metrik (misalnya, dari Prometheus).
*   **Logging:**
    *   **Docker Logging Drivers:** Konfigurasi Docker daemon atau kontainer untuk mengirim log ke tujuan selain file JSON default (misalnya, `syslog`, `journald`, `fluentd`, `splunk`, `awslogs`, `gcplogs`).
    *   **ELK Stack:** Elasticsearch (pencarian & analisis), Logstash (pengumpulan & pemrosesan log), Kibana (visualisasi log).
    *   **EFK Stack:** Elasticsearch, Fluentd (agen pengumpul log yang lebih ringan dari Logstash), Kibana.
    *   Pola umum adalah menjalankan agen logging (seperti Fluentd atau Filebeat) sebagai kontainer di setiap node untuk mengumpulkan log dari kontainer lain dan mengirimkannya ke backend terpusat (Elasticsearch, Splunk, dll.).

### CI/CD dengan Docker

Docker sangat fundamental dalam pipeline Continuous Integration dan Continuous Deployment (CI/CD) modern.

*   **Build Konsisten:** Membangun aplikasi di dalam kontainer Docker memastikan lingkungan build selalu sama, menghilangkan masalah "works on my machine" dalam proses CI.
*   **Testing dalam Kontainer:** Menjalankan unit test, integration test, dan end-to-end test terhadap aplikasi yang berjalan di dalam kontainer yang identik dengan produksi.
*   **Artefak Deployment:** Image Docker menjadi artefak utama yang dihasilkan oleh pipeline CI. Image yang lulus pengujian kemudian didorong ke registry.
*   **Deployment Cepat & Andal:** Pipeline CD menarik image dari registry dan mendeploynya ke lingkungan (staging, production) menggunakan orkestrator (Swarm, K8s) atau skrip deployment.
*   **Tools:** Jenkins (dengan Docker plugin), GitLab CI/CD (dukungan Docker bawaan), GitHub Actions (dukungan Docker), CircleCI, Travis CI, Azure DevOps, Google Cloud Build, AWS CodePipeline/CodeBuild, dll. semuanya memiliki integrasi yang kuat dengan Docker.

### BuildKit

*   Backend generasi baru untuk `docker build`. Menawarkan performa build yang jauh lebih baik, manajemen cache yang lebih canggih, dan fitur-fitur baru.
*   Diaktifkan secara default di versi Docker yang lebih baru. Anda dapat mengontrolnya dengan variabel lingkungan `DOCKER_BUILDKIT=1` atau `DOCKER_BUILDKIT=0`.
*   **Fitur:** Build paralel, skipping stage yang tidak digunakan, mount cache build, mount secret build.

### Docker Extensions

*   Fitur di Docker Desktop yang memungkinkan pengembang pihak ketiga menambahkan fungsionalitas baru langsung ke dashboard Docker Desktop.
*   Contoh ekstensi: Disk Usage, Log Explorer, Portainer, Trivy (scan), Snyk, dll.
*   Temukan dan kelola ekstensi dari tab "Extensions" di Docker Desktop.

---

## 15. Sumber Daya Tambahan

Perjalanan belajar Docker Anda tidak berhenti di sini. Berikut adalah beberapa sumber daya untuk memperdalam pemahaman Anda:

*   **Dokumentasi Resmi Docker:** [https://docs.docker.com/](https://docs.docker.com/) - Sumber terlengkap dan paling akurat. Mulailah dari "Get Started".
*   **Docker Hub:** [https://hub.docker.com/](https://hub.docker.com/) - Jelajahi image yang tersedia.
*   **Play with Docker (PWD):** [https://labs.play-with-docker.com/](https://labs.play-with-docker.com/) - Lingkungan Docker online gratis untuk bereksperimen langsung di browser Anda.
*   **Docker Curriculum:** [https://docker-curriculum.com/](https://docker-curriculum.com/) - Tutorial langkah demi langkah yang bagus untuk pemula.
*   **Awesome Docker (GitHub):** [https://github.com/veggiemonk/awesome-docker](https://github.com/veggiemonk/awesome-docker) - Daftar terkurasi berisi sumber daya, alat, dan proyek terkait Docker.
*   **Blog Docker:** [https://www.docker.com/blog/](https://www.docker.com/blog/) - Pengumuman fitur baru, studi kasus, dan artikel teknis.
*   **Stack Overflow (Tag Docker):** [https://stackoverflow.com/questions/tagged/docker](https://stackoverflow.com/questions/tagged/docker) - Tempat bertanya dan mencari solusi untuk masalah spesifik.
*   **Komunitas Docker (Forum, Slack):** Cari tautan komunitas di situs web Docker untuk berinteraksi dengan pengguna lain.
*   **Buku:** Banyak buku bagus tentang Docker, dari pengantar hingga topik lanjutan dan Kubernetes. Cari judul-judul terkini.
*   **Kursus Online:** Platform seperti Udemy, Coursera, Pluralsight, A Cloud Guru menawarkan kursus video Docker.

---

## 16. Kontribusi

Jika Anda menemukan kesalahan, ketidakakuratan, atau memiliki saran untuk perbaikan pada panduan ini, jangan ragu untuk:

1.  Membuka **Issue** di repositori ini.
2.  Membuat **Pull Request** dengan perubahan yang diusulkan.

Kontribusi Anda sangat dihargai untuk membuat panduan ini menjadi lebih baik!

---

## 17. Lisensi

Dokumen ini dilisensikan di bawah [Lisensi MIT](LICENSE).

---

**Terima kasih telah mengikuti panduan ini! Semoga bermanfaat dalam perjalanan Anda menguasai Docker. Selamat ber-kontainerisasi!** 🚀
