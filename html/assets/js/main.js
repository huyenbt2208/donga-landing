(function () {
  var yearEl = document.getElementById('js-current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
