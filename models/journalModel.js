const mongoose = require('mongoose');

//1) Schema = Specify a schema to our data, specify and do validation
const journalSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please, provide a First Name']
    },
    lastName: {
        type: String,
        required: [true, 'Please, provide a Last Name']
    },
    title: {
        type: String,
        required: [true, 'Please, provide a Title']
    },
    text: {
        type: String,
        required: [true, 'Please, provide some content']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

//2) Model created from our Schema
const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;