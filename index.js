const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.get('/', (_req, res) => res.send('Hello, Sailor...'));

server.enable('trust proxy');

server.use(cors());
server.use(helmet());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/:id', (req, res) => res.send(`GET route : /${req.params.id}<br>Query : ${JSON.stringify(req.query)}`));

server.use((_req, _res, next) => {
    const err = new Error('Something went wrong...');
    err['status'] = 404;
    next(err);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, err => {
    if (err) console.error(err);
    else console.log('Server running at', `http://localhost:${PORT}`);
});