// Rulează înainte de randare: activează animațiile, cu plasă de siguranță dacă scriptul nu pornește.
(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');
  setTimeout(function () {
    if (!window.__motionReady) root.classList.add('motion-fallback');
  }, 3000);
})();
