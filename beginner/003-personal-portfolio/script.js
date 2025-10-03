(function () {
    const STORAGE_KEY = 'theme';
    const root = document.documentElement;
    const btn = document.getElementById('themeToggle');

    // Apply saved theme on load
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
    }

    function isDarkActive() {
    // Dark if manual dark OR (no manual and OS preference is dark)
    const manual = root.getAttribute('data-theme');
    return manual ? manual === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function updateButton() {
    const dark = isDarkActive();
    btn.textContent = dark ? '☀️' : '🌙';
    btn.setAttribute('aria-pressed', String(dark));
    }

    btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
    updateButton();
    });

    updateButton();
})();

// Mobile nav toggle
(() => {
  const btn = document.getElementById('navToggle');
  const list = document.querySelector('.nav-links');
  if (!btn || !list) return;

  btn.addEventListener('click', () => {
    const open = list.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });
})();

document.querySelector('.back-to-top')?.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

