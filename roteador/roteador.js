const express = require("express");

const barbers = require("../controlador/controlador");

const roteador = express();

roteador.get("/barbers", barbers.consulBarbers);
roteador.get("/barbers/:id", barbers.consultarId);
roteador.post("/barbers", barbers.createBarber);
roteador.patch("/barbers/:id", barbers.editarBarbeiro);

module.exports = roteador;
