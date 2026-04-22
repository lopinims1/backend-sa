import express from 'express';
import route from './routes/artistRoutes.js';

const app = express();
const port = 3000;

app.use(express.json()); 

app.get('/', (req, res) => {
    res.json('No routes here');
});

app.use('/artists', route);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});