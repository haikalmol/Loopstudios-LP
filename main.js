const toggleMenuBtn = document.querySelector(".toggle-menu");
const topNav = document.querySelector(".top-nav");

(function () {
  let isNavOpen = false;

  if (toggleMenuBtn) {
    toggleMenuBtn.addEventListener("click", function () {
      if (topNav.classList.contains("show-nav")) {
        topNav.classList.remove("show-nav");
        isNavOpen = false;
      } else {
        topNav.classList.add("show-nav");
        isNavOpen = true;
      }

      if (isNavOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    });
  }

  window.addEventListener("resize", function () {
    /* 
    if resize window to 768px width media query, 
    overflow Y auto (hardcoded value -> bad practice)
    */
    if (this.innerWidth >= 768) {
      document.body.style.overflowY = "auto";
    }
  });
})();
