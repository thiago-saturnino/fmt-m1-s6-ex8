const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});

app.delete("/deleteUser", (req, res) => {
  const user = req.body.deleteUser;
  res.send(`Usuário Deletado`);
});
