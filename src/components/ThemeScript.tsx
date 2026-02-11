/**
 * Inline script to set data-theme before paint to avoid flash of wrong theme.
 */
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  var key = 'about-me-theme';
  var stored = localStorage.getItem(key);
  var theme = stored === 'dark' || stored === 'light' ? stored : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();
`,
      }}
    />
  );
}
