const express = require('express');

const artistRoute = require('./routes/artistRoutes');

const app = express();
const port = 3000;

app.get('/', (res) => {
    res.send('No routes here');
});

app.use('/artists', artistRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});