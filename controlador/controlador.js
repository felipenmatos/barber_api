const barbers = require("../dados/barbers");

const especialidadeValida = [
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

function validateRegistration(register) {
  if (!register.nome) {
    return "O campo nome é obrigatório";
  }

  if (!register.idade) {
    return "O campo idade é obrigatório";
  }

  if (typeof register.nome !== "string") {
    return "O campo nome deve ser preenchido como um texto";
  }

  if (!register.idade) {
    return "O campo idade é obrigatório";
  }

  if (register.idade < 18) {
    return "O barbeiro deve ser maior de idade";
  }

  if (typeof register.idade !== "number") {
    return "O campo idade deve ser preenchido como um texto";
  }

  if (!register.especialidade) {
    return "O campo especialidade é obrigatório";
  }

  if (typeof register.especialidade !== "string") {
    return "O campo especialidade deve ser preenchido como um texto";
  }

  if (!especialidadeValida.includes(register.especialidade)) {
    return "Área de especialidade informada é invalida.";
  }
}

let proximoId = 3;

function createBarber(req, res) {
  const erro = validateRegistration(req.body);

  if (erro) {
    res.status(400);
    res.json({ erro });
    return;
  }

  const newBarber = {
    id: proximoId,
    nome: req.body.nome,
    idade: req.body.idade,
    especialidade: req.body.especialidade,
  };

  barbers.push(newBarber);

  proximoId += 1;

  res.json(newBarber);
}

function editarBarbeiro(req, res) {
  const barbeiro = barbers.find((b) => b.id === Number(req.params.id));

  if (!barbeiro) {
    res.status(404);
    res.json({ erro: "Berbeiro(a)" + req.params.idFilter + "não existe" });
    return;
  }

  const erro = validateRegistration({
    nome: req.body.nome ?? barbeiro.nome,
    idade: req.body.idade ?? barbeiro.idade,
    especialidade: req.body.especialidade ?? barbeiro.especialidade,
  });

  if (erro) {
    res.status(400);
    res.json({ erro });
    return;
  }

  if (req.body.nome !== undefined) {
    barbeiro.nome = req.body.nome;
  }

  if (req.body.idade !== undefined) {
    barbeiro.idade = req.body.idade;
  }

  if (req.body.areaDeAtuacao !== undefined) {
    barbeiro.especialidade = req.body.especialidade;
  }

  res.json(barbeiro);
}

module.exports = { consulBarbers, consultarId, createBarber, editarBarbeiro };
