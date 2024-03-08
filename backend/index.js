import express from 'express';
import { testHandler } from './testHandler.js';
import { getCount, incrementCount } from './cptHandler.js';
import { getSingleMessage, getMessageCount, getAllMessages, addMessage } from './messageHandler.js';
const app = express();

// Pour s'assurer que l'on peut faire des appels AJAX au serveur
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json())

app.get('/test/*', testHandler);
app.get('/cpt/query', getCount);
app.post('/cpt/inc', incrementCount);
app.get('/msg/get/:id', getSingleMessage);
app.get('/msg/nber', getMessageCount);
app.get('/msg/getAll', getAllMessages);
app.post('/msg/post', addMessage);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});


