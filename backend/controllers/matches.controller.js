'use strict';
var mongoose = require('mongoose'),
    Matchs = mongoose.model('Matches'),
    TrendWords = mongoose.model('TrendWords');

exports.findOpponent = function (req, res) {
    Matchs.findOne({ $where: "this.users.length < 2" }, function (err, result) {
        if (err)
            res.send(err);
        if (!result) {
            result = new Matchs;
        }
        //TODO: prevent push same user
        result.users.push(req.body.userId);
        if (!result.isNew) {
            TrendWords
                .aggregate().sample(10)
                .exec(function (err, words) {
                    if (err)
                        res.send(err);
                    words.forEach(w => {
                        result.words.push(w.word);
                    });
                    result.save(function (err, result2) {
                        if (err)
                            res.send(err);
                        res.json(result2);
                    });
                });
        }
        else
            result.save(function (err, result2) {
                if (err)
                    res.send(err);
                res.json(result2);
            });
    });
}
exports.postUser = function (req, res) {
    var newUser = new Users(req.body);
    newUser.save(function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
}