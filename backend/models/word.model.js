'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var TrendWordWordSchema = new Schema({
    word: {
        type: String,
        required: 'Enter word'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('TrendWords', TrendWordWordSchema);