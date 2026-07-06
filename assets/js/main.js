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

  document.querySelectorAll("[data-news-gallery]").forEach(function (gallery) {
    var mainImage = gallery.querySelector("[data-gallery-main-image]");
    var mainCaption = gallery.querySelector("[data-gallery-main-caption]");
    var thumbsContainer = gallery.querySelector("[data-gallery-thumbnails]");
    var thumbs = gallery.querySelectorAll("[data-gallery-thumb]");
    var prevButton = gallery.querySelector("[data-gallery-prev]");
    var nextButton = gallery.querySelector("[data-gallery-next]");

    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        var nextSrc = thumb.getAttribute("data-gallery-src");
        var nextAlt = thumb.getAttribute("data-gallery-alt") || "";
        var nextCaption = thumb.getAttribute("data-gallery-caption") || "";

        if (!nextSrc || !mainImage) return;

        mainImage.setAttribute("src", nextSrc);
        if (nextAlt) {
          mainImage.setAttribute("alt", nextAlt);
        }

        if (mainCaption) {
          mainCaption.textContent = nextCaption;
          mainCaption.hidden = !nextCaption;
        }

        thumbs.forEach(function (item) {
          item.classList.remove("is-active");
        });
        thumb.classList.add("is-active");
      });
    });

    if (prevButton && thumbsContainer) {
      prevButton.addEventListener("click", function () {
        thumbsContainer.scrollBy({
          left: -thumbsContainer.clientWidth,
          behavior: "smooth"
        });
      });
    }

    if (nextButton && thumbsContainer) {
      nextButton.addEventListener("click", function () {
        thumbsContainer.scrollBy({
          left: thumbsContainer.clientWidth,
          behavior: "smooth"
        });
      });
    }
  });
});
