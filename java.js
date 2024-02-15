window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var logo = document.getElementById("logo");
  var navContainer = document.querySelector(".nav-container");


  if (window.scrollY > 80) {
      navbar.style.padding = "0";
      navbar.style.margin = "0";
      logo.style.width = "80px";  
      navContainer.style.backdropFilter = "blur(10px)";

  } else {
      navbar.style.padding = "";
      navbar.style.margin = "";
      logo.style.width = "145px"
      navContainer.style.backdropFilter = "";
  }
}
