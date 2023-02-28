const nav = document.querySelector("nav");
const mousemove = document.querySelector(".mousemove");
const resa = document.querySelector(".resa");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const adress = document.querySelector(".adress");
const textIntro = document.querySelector(".textIntro");

window.addEventListener("scroll", () => {
  if (window.scrollY > 25 /*en px*/) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-60px";
  }
});

resa.addEventListener("mouseover", () => {
  resa.style.background = "white";
});
resa.addEventListener("mouseout", () => {
  resa.style.background = "beige";
});

about.addEventListener("mouseover", () => {
  about.style.background = "white";
});
about.addEventListener("mouseout", () => {
  about.style.background = "beige";
});

contact.addEventListener("mouseover", () => {
  contact.style.background = "white";
});
contact.addEventListener("mouseout", () => {
  contact.style.background = "beige";
});

adress.addEventListener("mouseover", () => {
  adress.style.background = "white";
});
adress.addEventListener("mouseout", () => {
  adress.style.background = "beige";
});

/*----------Resa---------*/

/*--------------jQuery------------

$(function () {
  let titlecontent = $(".logo > p").text();

  $(".logo > p").text("le cul antique").css("color", "red");
});
*/

$(".galerie button").click(function () {
  alert("Vous allez accéder à la galerie");
});
