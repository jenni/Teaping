const mongoose = require('mongoose');

const walletSchema = mongoose.Schema({
    name: String,
    hash: String,
    quantity: Number
});

module.exports = mongoose.model('Wallet', walletSchema);