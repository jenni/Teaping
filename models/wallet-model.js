const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const walletSchema = mongoose.Schema({
    name: String,
    hash: String,
    quantity: Number
});

walletSchema.plugin(AutoIncrement, { inc_field: 'workerId' });

module.exports = mongoose.model('Wallet', walletSchema);