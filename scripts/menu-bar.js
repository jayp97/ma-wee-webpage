// A script that allows me to resize the nav bar to a menu bar for mobile. 

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

let openBtn = document.querySelector(".menu-bars");
openBtn.addEventListener("click", () => {
   showNav();
});
let closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
hideNav();
});
function showNav() {
   document.querySelector(".mobile-menu").style.width = "100%";
}
function hideNav() {
   document.querySelector(".mobile-menu").style.width = "0";
}
