module.exports = function (app) {
    var words = require('../controllers/words.controller');
    app.get('/words', words.getRandomWords);
    app.post('/words', words.postWord);
}