// Mobile nav
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
toggle?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(!!open));
});
