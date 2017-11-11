module.exports = function (app) {
    var matches = require('../controllers/matches.controller');
    app.post('/matches', matches.findOpponent);
}