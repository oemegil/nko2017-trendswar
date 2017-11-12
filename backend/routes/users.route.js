module.exports = function (app) {
    var users = require('../controllers/users.controller');
    app.get('/users', users.getUsers);
	app.get('/users/getLeaderboard',users.getLeaderboard);
    app.post('/users', users.postUser);
};