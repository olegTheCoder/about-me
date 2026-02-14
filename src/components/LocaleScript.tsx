export function LocaleScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  var key = 'about-me-locale';
  var stored = localStorage.getItem(key);
  var locale = (stored === 'ru' || stored === 'en') ? stored : 'ru';
  document.documentElement.lang = locale;
})();
`,
      }}
    />
  );
}
