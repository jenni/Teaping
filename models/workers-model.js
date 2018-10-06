const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const workersSchema = mongoose.Schema({
    name: String,
    hash: String,
    quantity: Number
});

module.exports = mongoose.model('Workers', workersSchema);