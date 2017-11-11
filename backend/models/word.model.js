'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WordSchema = new Schema({
    name: {
        type: String,
        required: 'Enter name'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Words', WordSchema);