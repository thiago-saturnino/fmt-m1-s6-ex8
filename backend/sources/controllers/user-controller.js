const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});

app.post(
  "/verification/",
  [
    (req, res, next) => {
      const user = req.body.nome;

      if (user === undefined) {
        res
          .status(406)
          .send({ mensagem: "Está faltando dados para concluir a operação" });
        console.log({
          mensagem: "Está faltando dados para concluir a operação",
        });
      }
      next();
    },
  ],
  [
    (req, res) => {
      const idade = req.body.idade;
      console.log(idade);

      if (idade >= 21) {
        res.status(200).send({ mensagem: "Criado com Sucesso!" });
      } else {
        res
          .status(400)
          .send({ mensagem: "Usuário não possui idade suficiente" });
        console.log(`{“mensagem”: “Usuário não possui idade suficiente”}`);
      }
    },
  ]
);

app.delete("/verification/del/:id", (req, res) => {
  const idCode = req.params.id;

  if (idCode === null) {
    res
      .status(406)
      .send({ mensagem: "Está faltando dados para concluir a operação" });
  } else {
    console.log(idCode);
    res.status(200).send({ mensagem: "Deletado com sucesso" });
  }
});
