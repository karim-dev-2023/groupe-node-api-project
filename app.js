const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send("siuuuu");
});

app.listen(port, () => {
    console.log(`le serveur est lance sur le port ${port}`);
});
