var burgerButton = document.querySelector("#burger__btn");
var overlay = document.querySelector("#overlay");
var body = document.querySelector("body");
var mobileMenu = document.querySelector("#mobile__menu")

burgerButton.addEventListener("click", function(e){
  e.preventDefault();

  this.classList.toggle("crossed");
  overlay.classList.toggle("visible");
  body.classList.toggle("no-scroll");
  mobileMenu.classList.toggle("opened");
});

overlay.addEventListener("click", function(e){
  e.preventDefault();

  overlay.classList.toggle("visible");
});



