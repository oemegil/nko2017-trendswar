'use strict';
var mongoose = require('mongoose'),
    Words = mongoose.model('Words');
exports.getRandomWords = function (req, res) {
    Words.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
    //res.json(['nodejs', 'angular', 'vscode', 'expressjs', 'mongodb', 'knockout', 'html5', 'css3', 'es6', 'react']);
}
exports.postWord = function (req, res) {
    var newWord = new Words(req.body);
    newWord.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
}