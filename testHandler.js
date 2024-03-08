export function testHandler(req, res) {
    const PREFIX_LENGTH = 6;
    res.json({ msg: req.url.slice(PREFIX_LENGTH) });
}
