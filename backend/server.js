const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.get('/', (req, res) => {
    res.json({ msg: 'Hello World'});
});

app.listen(4000, () => {
    console.log('listening on port 4000');
});