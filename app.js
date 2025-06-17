// Mise en place code express API
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

// On gère la gestion d'erreur lorsque la route n'existe pas
app.use((req, res) => {
  res.status(404).send("Cette page n'existe pas ");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
