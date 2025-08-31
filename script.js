const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const logoImage = document.querySelector(".logo img");
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

hamburger.onclick = function () {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
};

mobileNavLinks.forEach((e) => {
  e.onclick = function () {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
    document.body.classList.remove("no-scroll");
  };
});

const taps = document.querySelectorAll(".taps li");
const contents = document.querySelectorAll(".taps-content .tap");

taps.forEach((tap) => {
  tap.onclick = function () {
    taps.forEach((t) => {
      t.classList.remove("active");
    });

    this.classList.add("active");

    contents.forEach((c) => c.classList.remove("active"));

    let activeTapId = tap.getAttribute("data-target");
    let targetContent = document.getElementById(activeTapId);
    targetContent.classList.add("active");
  };
});
