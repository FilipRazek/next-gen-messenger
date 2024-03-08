const state = { count: 0 };

function getCount(req, res) {
    res.json({ count: state.count });
}

function isPositiveInteger(value) {
    return value.match(/^[0-9]+$/);
}

function incrementCount(req, res) {
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
}

module.exports = { getCount, incrementCount };
