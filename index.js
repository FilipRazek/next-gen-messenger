const express = require('express');
const app = express();

// Pour s'assurer que l'on peut faire des appels AJAX au serveur
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/test/*', function(req, res) {
  const PREFIX_LENGTH = 6;
  res.json({ msg: req.url.slice(PREFIX_LENGTH) });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});


