(function () {
  var yearEl = document.getElementById('js-current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

(function () {
  var hero = document.getElementById('top');
  var floatingContact = document.querySelector('.c-floating-contact');
  if (!hero || !floatingContact || !('IntersectionObserver' in window)) {
    if (floatingContact) floatingContact.classList.add('is-visible');
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      floatingContact.classList.toggle('is-visible', !entry.isIntersecting);
    });
  });
  observer.observe(hero);
})();
