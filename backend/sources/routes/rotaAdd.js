const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});

app.post("/addUser", (req, res) => {
  const chave = "líder";
  if (req.body.cargo != chave) {
    res.status(406).send("Cargo Inválido");
  }

  res.json(req.body);
  console.log(`Novo Usuário Adicionado`);
});
