// Rulează înainte de randare: activează animațiile și cortina de intro (o dată pe sesiune).
(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');
  try {
    if (sessionStorage.getItem('hi-intro')) root.classList.add('no-intro');
    else sessionStorage.setItem('hi-intro', '1');
  } catch (e) {
    root.classList.add('no-intro');
  }
  setTimeout(function () {
    if (!window.__motionReady) root.classList.add('motion-fallback');
  }, 3000);
})();
