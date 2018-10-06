const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const workersSchema = mongoose.Schema({
    name: String,
    hash: String
});

workersSchema.plugin(AutoIncrement, { inc_field: 'workerId' });

module.exports = mongoose.model('Workers', workersSchema);