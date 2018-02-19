$(document).ready(function () {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

// datepicker
$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15 // Creates a dropdown of 15 years to control year
});

/* Funciones para publicar texto */

var areaTitulo = document.getElementById("modal-chat-title");
var areaMensaje = document.getElementById("modal-chat-message");
var areaPublicacion = document.getElementById("content");
var botonPublicar = document.getElementsByClassName("post");

botonPublicar[0].addEventListener("click", function () {
  var titulo = areaTitulo.value;
  var mensaje = areaMensaje.value;
  var div = document.createElement("div");
  var h5 = document.createElement("h5");
  h5.textContent = titulo;
  var parrafo = document.createElement("p");
  parrafo.textContent = mensaje;
  div.appendChild(h5);
  div.appendChild(parrafo);
  areaPublicacion.appendChild(div);
  div.className = "container " + "center " + "card-panel " + "hoverable";
  areaTitulo.value = " ";
  areaMensaje.value = " ";
  // fondoModal[0].style.display = "none";
  modal[0].style.display = "none";
});


