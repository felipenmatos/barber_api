const barbers = require("../dados/barbers");

const especialidade = [
  "Cabelo",
  "Barba",
  "Sobrancelha",
  "Cabelo/Barba/Sobrancelha",
  "Cabelo/Barba",
  "Cabelo/Sobrancelha",
  "Barba/Sobrancelha",
];

function consulBarbers(req, res) {
  res.json(barbers);
}

function consultarId(req, res) {
  const barber = barbers.find((barber) => barber.id === Number(req.params.id));

  if (!barber) {
    res.status(404);
    res.send({ Erro: `o id ${req.params.id} não foi encontrado` });
    return;
  }

  res.json(barber);
}

module.exports = { consulBarbers, consultarId };
