(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'light') {
    root.classList.add('theme-light');
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      root.classList.toggle('theme-light');
      const mode = root.classList.contains('theme-light') ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', mode);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll('.reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3').forEach((el) => {
    observer.observe(el);
  });

  const tabs = document.querySelectorAll('[data-tool-tab]');
  const panels = document.querySelectorAll('[data-tool-panel]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.toolTab;

      tabs.forEach((item) => item.classList.toggle('is-active', item === tab));
      panels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.dataset.toolPanel === target);
      });
    });
  });
})();
