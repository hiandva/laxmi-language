const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.getElementById("year");
const profilePhoto = document.querySelector(".about-photo-img");
const profileFallback = document.querySelector(".about-photo-placeholder");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (profilePhoto && profileFallback) {
  profilePhoto.addEventListener("error", () => {
    profilePhoto.hidden = true;
    profileFallback.hidden = false;
  });
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "メニューを開く");
    });
  });
}
