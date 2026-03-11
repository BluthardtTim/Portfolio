export function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function applyTheme(theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem('theme', theme);
  } catch {}
}

export function toggleTheme() {
  if (typeof document === 'undefined') return 'light';
  const root = document.documentElement;
  const current = root.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  // Add short-lived transition class for smooth fade
  root.classList.add('theme-transition');
  applyTheme(next);
  // Remove transition after animation completes
  setTimeout(() => {
    root.classList.remove('theme-transition');
  }, 280);
  return next;
}
