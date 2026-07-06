document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".mobile-menu-toggle");
  var navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var submenuToggles = document.querySelectorAll(".mobile-submenu-toggle");

  submenuToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var parent = toggle.closest(".has-submenu");
      var submenu = parent ? parent.querySelector(".nav-submenu") : null;

      if (!parent || !submenu) return;

      var isOpen = parent.classList.toggle("is-open");
      submenu.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });
});
