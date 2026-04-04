// Click-to-open dropdown; no hover reveal
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dd => {
    const btn = dd.querySelector('.dropbtn');
    const menu = dd.querySelector('.dropdown-content');
    if (!btn || !menu) return;

    function closeMenu(){ dd.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }
    function openMenu(){ dd.classList.add('open'); btn.setAttribute('aria-expanded','true'); }

    btn.addEventListener('click', function(e){
      e.preventDefault();
      const isOpen = dd.classList.contains('open');
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });

    // Keyboard accessibility
    btn.addEventListener('keydown', function(e){
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); openMenu();
        const firstLink = menu.querySelector('a');
        firstLink && firstLink.focus();
      }
    });
    menu.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeMenu(); });
  });

  // Close when clicking outside
  document.addEventListener('click', function(e){
    dropdowns.forEach(dd => {
      if (!dd.contains(e.target)) {
        dd.classList.remove('open');
        const btn = dd.querySelector('.dropbtn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});