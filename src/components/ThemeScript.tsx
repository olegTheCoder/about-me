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
  var theme = stored === 'dark' || stored === 'light' ? stored : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
})();
`,
      }}
    />
  );
}
