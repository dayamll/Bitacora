const express = require('express');
const app = express();
const server = app.listen(4848, encender);

function encender() {
  console.log('Servidor encendido');
}

app.use(express.static('public'));