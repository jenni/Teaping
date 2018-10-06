require('./database-connection');
const mongoose = require('mongoose');

const Worker = require('../models/workers-model');

const worker1 = new Worker({ name: 'Jen', hash: '2312234234234234' });
const worker2 = new Worker({ name: 'Masa', hash: '56756767867789' });
const worker3 = new Worker({ name: 'Annes', hash: '8797889089098' });
const worker4 = new Worker({ name: 'Gosia', hash: '345345435435435' });
const worker5 = new Worker({ name: 'Emsoft', hash: '3253544534646546' });
const worker6 = new Worker({ name: 'Melanie', hash: '3253544534646546' });

const Wallet = require('../models/wallet-model');

const wallet1 = new Wallet({ name: 'main-wallet', hash: '23122342ddaafba', quantity: 0 });




const starterSeed = async () => {
    const workers = [worker1, worker2, worker3, worker4, worker5, worker6];

    for (const worker of workers) await Worker.create(worker);
    await Wallet.create(wallet1);
}

mongoose.connection.on('open', async () => {
    console.log('Dropping database...');
    await mongoose.connection.db.dropDatabase();
    console.log(`Seeding...`);
    await starterSeed();
    console.log('Finished!');
    process.exit();
});