const mongoose = require('mongoose');
const { Schema } = mongoose;

const IdSchema = new Schema({
    id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Id', IdSchema);