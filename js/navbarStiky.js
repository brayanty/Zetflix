// Cuando el usuario se desplaza por la página, ejecuta myFunction
window.onscroll = function() {myFunction()};

// Obtener la barra de navegación
const navbar = document.querySelector(".nav");

// Obtener la posición de desplazamiento de la barra de navegación
var sticky = navbar.offsetTop;
// Agrega la clase fija a la barra de navegación cuando llegues a su posición de desplazamiento. Elimina "stiky" 
// cuando sales de la posición de desplazamiento

function myFunction() {

  if (window.scrollY >= 200) {
    
    navbar.classList.add("nav--stiky-black")
  } else {
    navbar.classList.remove("nav--stiky-black");
  }
}