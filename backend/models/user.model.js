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
    },
	point:{
		type:Number,
		default:0
	}
});
module.exports = mongoose.model('Users', UserSchema);