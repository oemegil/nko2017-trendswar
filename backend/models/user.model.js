'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var UserSchema = new Schema({
    name: {
        type: String,
        required: 'Enter name'
    },
    avatar: {
        type: String,
        required: 'Select avatar'
    },
    email: {
        type: String,
        unique: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Users', UserSchema);