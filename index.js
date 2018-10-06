const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/database-connection');

const workersModel = require('./models/workers-model');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get('/api', async (req, res) => {
    res.json({ "hello": 'world'});
});

app.get('/api/workers', async (req, res) => {
    const workers = await workersModel.find();

    res.json(workers);
});

app.listen(port, () => {
    console.log(`Teaping server up on port ${port}`);
});