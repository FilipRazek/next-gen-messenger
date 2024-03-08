import express from 'express';
import { testHandler } from './testHandler.js';
import { getCount, incrementCount } from './cptHandler.js';
import { getSingleMessage } from './messageHandler.js';
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
app.get('/msg/get/:id', getSingleMessage);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});


