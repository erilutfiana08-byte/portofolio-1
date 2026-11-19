/**
 * script.js - Logika Interaktif Portofolio Pribadi
 * Sesuai PRD: Vanilla JavaScript tanpa framework, aman, dan aksesibel.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi ikon Lucide jika tersedia
  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }

  // 2. Ambil elemen tombol hamburger, menu navigasi seluler, dan ikon
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Pemeriksaan keberadaan elemen untuk mencegah error bila elemen tidak ditemukan
  if (!mobileMenuButton || !mobileMenu) {
    return;
  }

  /**
   * Fungsi untuk membuka atau menutup menu seluler
   * @param {boolean} shouldOpen - true untuk buka, false untuk tutup
   */
  const toggleMobileMenu = (shouldOpen) => {
    const isOpen = typeof shouldOpen === 'boolean' 
      ? shouldOpen 
      : mobileMenu.classList.contains('hidden');

    if (isOpen) {
      // Buka menu
      mobileMenu.classList.remove('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'true');
      mobileMenuButton.setAttribute('aria-label', 'Tutup menu navigasi');

      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    } else {
      // Tutup menu
      mobileMenu.classList.add('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenuButton.setAttribute('aria-label', 'Buka menu navigasi');

      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  };

  // Event Listener: Klik tombol hamburger
  mobileMenuButton.addEventListener('click', () => {
    const isCurrentlyExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    toggleMobileMenu(!isCurrentlyExpanded);
  });

  // Event Listener: Menutup menu ketika salah satu tautan navigasi diklik
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMobileMenu(false);
    });
  });

  // Event Listener: Menutup menu ketika tombol Escape ditekan
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      const isMenuOpen = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      if (isMenuOpen) {
        toggleMobileMenu(false);
        // Kembalikan fokus ke tombol hamburger untuk aksesibilitas keyboard
        mobileMenuButton.focus();
      }
    }
  });

  // Menutup menu jika ukuran layar diperbesar melewati breakpoint 'md' (768px)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      const isMenuOpen = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      if (isMenuOpen) {
        toggleMobileMenu(false);
      }
    }
  });
});
