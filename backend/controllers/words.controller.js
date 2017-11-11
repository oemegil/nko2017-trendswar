'use strict';
var mongoose = require('mongoose'),
    TrendWords = mongoose.model('TrendWords'),
    limitrecords = 5;

exports.getRandomWords = function (req, res) {
    TrendWords
        .aggregate().sample(limitrecords)
        .exec(function (err, result) {
            if (err)
                res.send(err);
            res.json(result);
        });
}
exports.postWord = function (req, res) {
    var newWord = new TrendWords(req.body);
    newWord.save(function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
}