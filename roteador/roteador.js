const express = require("express");

const barbers = require("../controlador/controlador");

const roteador = express();

roteador.get("/barbers", barbers.consulBarbers);
roteador.get("/barbers/:id", barbers.consultarId);

module.exports = roteador;
