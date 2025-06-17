// Mise en place code express API
const express = require("express");
const app = express();
const port = 3000;

const users = [
  { id: 1, name: "Rimk" },
  { id: 2, name: "Jouli" },
  { id: 3, name: "Imen" },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", (req, res) => {
  res.json(users);
});

// On gère la gestion d'erreur lorsque la route n'existe pas
app.use((req, res) => {
  res.status(404).send("Cette page n'existe pas ");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
