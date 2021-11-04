let mongoose = require('mongoose');
require('dotenv').config()

const db = 'freecode'

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fkymc.mongodb.net/${db}`);

let CustomerSchema = new mongoose.Schema({
    name: String, 
    email: {
        type: String, 
        required: true, 
        unique: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);