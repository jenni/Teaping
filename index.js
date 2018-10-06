const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/database-connection');

const workersModel = require('./models/workers-model');
const walletModel = require('./models/wallet-model');


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

app.get('/api/pot', async (req, res) => {
    const pot = await walletModel.find();

	res.json(pot);
});

app.post('/api/pot/:id', async (req, res) => {
    const pot = await walletModel.findOne({ _id: req.params.id });
    pot.quantity += req.body.quantity;
    pot.save();

	res.json(pot);
});

app.listen(port, () => {
    console.log(`Teaping server up on port ${port}`);
});