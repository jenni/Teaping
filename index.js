const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/database-connection');

const workersModel = require('./models/workers-model');
const walletModel = require('./models/wallet-model');


const app = express();
const port = process.env.PORT || 5000;

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

app.put('/api/pot/:id', async (req, res) => {
    const pot = await walletModel.findOne({ _id: req.params.id });
    pot.quantity += req.body.quantity;
    pot.save();

	res.json(pot);
});

app.put('/api/pot/:id/distribute', async (req, res) => {
    const wallet = await walletModel.findOne({ _id: req.params.id });
    const workers = await workersModel.find();
    const totalPot = wallet.quantity;
    const countWorkers = workers.length;
    const payment = totalPot / countWorkers;
    const totalPayment = payment * countWorkers;

    if (totalPayment >= totalPot && totalPot > 0) {
        await executePayment(workers, payment);
        wallet.quantity -= totalPayment;
        await wallet.save();
    } else {
        new Error(`There's no sufficient pot`);
    }

    res.json(workers);
});

const executePayment = async (workers, payment, wallet) => {
    for (const worker of workers) {
        worker.quantity += payment;
        await worker.save();
    }
}

app.listen(port, () => {
    console.log(`Teaping server up on port ${port}`);
});