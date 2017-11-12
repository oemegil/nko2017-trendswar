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
            global._io.of('/' + req.body.matchId).on('connection', function (socket) {
                console.log('someone connected');
            });
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
                global._io.of('/' + req.body.matchId).emit('matchResult',result2);
            });
    });
}
exports.answer = function (req, res) {
    //TODO: Implement socket.io
    // var nsp = io.of('/' + req.body.matchId);
    // nsp.on('connection', function (socket) {
    //     console.log(req.body.userId + ' connected');
    // });
    Matchs.findById(req.body.matchId, function (err, result) {
        result.answers.push({ answer: req.body.answer, user: req.body.userId });

        result.save(function (err, result2) {
            if (err)
                res.send(err);
            res.json(result2);
            global._io.of('/' + req.body.matchId).emit('matchResult',result2);
        });
    });
}