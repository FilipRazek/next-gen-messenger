const express = require('express');
const app = express();

// Pour s'assurer que l'on peut faire des appels AJAX au serveur
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});


