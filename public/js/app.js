$(document).ready(function () {
  // the 'href' attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

// datepicker
$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15 // Creates a dropdown of 15 years to control year
});

/* Funcion para publicar texto */

var title = document.getElementById('modal-chat-title');
var message = document.getElementById('modal-chat-message');
var publications = document.getElementById('content');
var btnPost = document.getElementsByClassName('post');

btnPost[0].addEventListener('click', function() {
  event.preventDefault();
  var titulo = title.value;
  var areaMensaje = message.value;
  var container = document.createElement('div');
  var text = document.createElement('h3');
  text.textContent = titulo;
  var paragraph = document.createElement('p');
  paragraph.textContent = areaMensaje;
  container.appendChild(text);
  container.appendChild(paragraph);
  publications.appendChild(container);
  container.className = 'center-align ' + 'card-panel ' + 'hoverable';
  title.value = ' ';
  message.value = ' ';
});

// Funcion para postear imagenes

var contentTitleImg = document.getElementById('modal-image-title');
var userImage = document.getElementById('image-file');

btnPost[1].addEventListener('click', function(e) {
  event.preventDefault();
  var titleImg = contentTitleImg.value;
  var content = document.createElement('div');
  var textImg = document.createElement('h3');
  textImg.textContent = titleImg;
  // El objeto FileReader permite que las aplicaciones web lean ficheros
  var fileReader = new FileReader();
  // El método readAsDataURL es usado para leer el contenido del especifico del File.
  fileReader.readAsDataURL(userImage.files[0]);

  fileReader.onload = function() {
    // Image crea una nueva HTMLImageElementinstancia, es mas como un document.createElement('img')
    var imagen = new Image();
    imagen.src = fileReader.result;
    imagen.classList.add('responsive-img', 'col', 's12', 'size-image');
    content.className = 'center-align' + 'card-panel ' + 'hoverable';
    content.appendChild(textImg);
    content.appendChild(imagen);
    publications.appendChild(content);
    contentTitleImg.value = ' ';
  };
});


/* Evento y geolocalización*/

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 15
  });
  var infoWindow = new google.maps.InfoWindow({
    map: map
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}