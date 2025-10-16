import { useRef } from "react";



export const ModalUser = () => {

  const sidebarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-full font-inter bg-neutral-50 text-neutral-800">
      {/* Sidebar kiri */}
      <div
        ref={sidebarRef}
        className="border-r border-neutral-200 bg-white p-6 overflow-y-auto"
      >
        <h2 className="text-2xl font-semibold mb-4">Dokumentasi</h2>
        <nav className="space-y-3 text-neutral-600 font-sans">
          <a
            href="#overview"
            className="block hover:text-neutral-900 font-sans transition-colors"
          >
            Overview
          </a>
          <a
            href="#sistem-user"
            className="block hover:text-neutral-900 transition-colors"
          >
            Sistem User
          </a>
          <a
            href="#pengaturan"
            className="block hover:text-neutral-900 transition-colors"
          >
            Pengaturan Akun
          </a>
          <a
            href="#faq"
            className="block hover:text-neutral-900 transition-colors"
          >
            FAQ
          </a>
        </nav>
      </div>

      {/* Konten kanan */}
      <div
        ref={contentRef}
        className="overflow-y-auto p-10 space-y-20 scroll-smooth"
      >
        <section id="overview">
          <h1 className="text-3xl font-bold mb-3">Overview</h1>
          <p className="leading-relaxed text-neutral-700">
            Sistem dokumentasi Burung 2025 dirancang untuk memudahkan pengguna
            memahami fitur, struktur data, dan cara kerja aplikasi. Semua modul
            user, sistem autentikasi, dan data integrasi disusun secara modular.
          </p>
        </section>

        <section id="sistem-user">
          <h1 className="text-3xl font-bold mb-3">Sistem User</h1>
          <p className="leading-relaxed text-neutral-700">
            Modul User di Burung 2025 mencakup manajemen login, otentikasi
            token, dan pembagian peran (admin, user, dan guest). Sistem ini
            terhubung langsung ke API utama untuk memastikan data konsisten.
          </p>
        </section>

        <section id="pengaturan">
          <h1 className="text-3xl font-bold mb-3">Pengaturan Akun</h1>
          <p className="leading-relaxed text-neutral-700">
            Pengguna dapat mengubah profil, mengganti password, dan mengelola
            notifikasi dari menu pengaturan akun. Semua perubahan disimpan secara
            real-time menggunakan sistem event-driven.
          </p>
        </section>

        <section id="faq">
          <h1 className="text-3xl font-bold mb-3">FAQ</h1>
          <p className="leading-relaxed text-neutral-700">
            Pertanyaan umum seperti cara login, lupa password, dan kendala
            integrasi API dapat ditemukan di bagian ini.
          </p>
        </section>
      </div>
    </div>
  );
};
