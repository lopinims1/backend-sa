const express = require('express');

const musicsRoute = require('./routes/musicRoutes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('No routes here');
});

app.use('/my-musics', musicsRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});