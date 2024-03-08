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

const state = { count: 0 };

app.get('/cpt/query', function(req, res) {
    res.json({ count: state.count });
});

function isPositiveInteger(value) {
    return value.match(/^[0-9]+$/);
}
app.post('/cpt/inc', function(req, res) {
    const { v: value } = req.query;
    if (value) {
        if (isPositiveInteger(value)) {
            state.count += Number.parseInt(value, 10);
            res.json({ code: 0 });
        } else {
            res.json({ code: -1 });
        }
    }
    else {
        state.count++;
        res.json({ code: 0 });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});


