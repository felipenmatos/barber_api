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

module.exports = { consulBarbers };
