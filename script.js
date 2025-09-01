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

const questios = document.querySelectorAll(".ques-text");
const answers = document.querySelectorAll(".answer");

questios.forEach(function (thisE) {
  thisE.onclick = function () {
    if (thisE.classList.contains("active")) {
      thisE.classList.remove("active");
    } else {
      questios.forEach(function (restE) {
        restE.classList.remove("active");
      });
      thisE.classList.add("active");
    }
  };
});

let inpCont = document.querySelector(".inp");
let emailInp = document.querySelector('[name="emailInp"]');
let contactBtn = document.getElementById("contactBtn");
const re = /^[^\s@]+@[^\s@]+\.[^\s@]{1,}$/;

emailInp.onblur = function () {
  const emailValue = emailInp.value.trim();

  if (!re.test(emailValue)) {
    inpCont.classList.add("error");
    contactBtn.classList.remove("able");
  } else {
    inpCont.classList.remove("error");
    contactBtn.classList.add("able");
  }
};

emailInp.oninput = function () {
  const email = emailInp.value.trim();

  if (inpCont.classList.contains("error")) {
    if (re.test(email)) {
      inpCont.classList.remove("error");
      contactBtn.classList.add("able");
    }
  }
};
