const express = require('express');
const { testHandler } = require('./testHandler');
const { getCount, incrementCount } = require('./cptHandler');
const app = express();

// Pour s'assurer que l'on peut faire des appels AJAX au serveur
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/test/*', testHandler);
app.get('/cpt/query', getCount);
app.post('/cpt/inc', incrementCount);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});


