/* eslint-disable */
import "bootstrap";
import "./style.css";

//Arrays con elementos
var iconos = ["♦", "♠", "♥", "♣"];
var numero = ["AS", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

//Variables que generan los elementos aleatorios
var randomNumber = numero[Math.floor(Math.random() * numero.length)];
var randomIcono = iconos[Math.floor(Math.random() * iconos.length)];

//Selección de los elementos
var icono = document.querySelectorAll(".icono");
var numero = document.querySelector(".numero");

//Función principal al cargar la página
window.addEventListener("load", function() {
  generaIcono();
  generaNumero();
});

//Funciones asignadas al evento cargar principal
function generaIcono() {
  if (randomIcono == "♦") {
    icono[0].innerHTML = "♦";
    icono[0].classList.add("diamante");
    icono[1].innerHTML = "♦";
    icono[1].classList.add("diamante");
    numero.classList.add("colorNumero");
  } else if (randomIcono == "♠") {
    icono[0].innerHTML = "♠";
    icono[1].innerHTML = "♠";
  } else if (randomIcono == "♥") {
    icono[0].innerHTML = "♥";
    icono[0].classList.add("corazon");
    icono[1].innerHTML = "♥";
    icono[1].classList.add("corazon");
    numero.classList.add("colorNumero");
  } else if (randomIcono == "♣") {
    icono[0].innerHTML = "♣";
    icono[1].innerHTML = "♣";
  }
}

function generaNumero() {
  if (randomNumber >= 2 || randomNumber <= 9) {
    numero.innerHTML = randomNumber;
  } else if (randomNumber == "J") {
    numero.innerHTML = "J";
  } else if (randomNumber == "Q") {
    numero.innerHTML = "Q";
  } else if (randomNumber == "K") {
    numero.innerHTML = "K";
  } else if (randomNumber === "AS") {
    numero.innerHTML = randomIcono;
    numero.classList.add("as");
  }
}
