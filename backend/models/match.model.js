'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var MatchSchema = new Schema({
    users: [{ type: ObjectId, ref: 'Users' }]
});
module.exports = mongoose.model('Matches', MatchSchema);