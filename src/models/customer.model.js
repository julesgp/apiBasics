let mongoose = require('mongoose');
require('dotenv').config()

//Simplified database connection 
mongoose.connect(`${process.env.DATABASE}`);

let CustomerSchema = new mongoose.Schema({
    name: String, 
    email: {
        type: String, 
        required: true, 
        unique: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);