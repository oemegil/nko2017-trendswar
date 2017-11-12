var mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    express = require('express'),
    app = express(),
    Word = require('./models/word.model'),
    User = require('./models/user.model'),
    Match = require('./models/match.model'),
    port = process.env.PORT || 8080,
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    mongoUrl = "mongodb://root:root_1@ds255715.mlab.com:55715/heroku_gknnkhkt";

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing routes
var routeWords = require('./routes/words.route');
routeWords(app);
var routeUsers = require('./routes/users.route');
routeUsers(app);
var routeMatches = require('./routes/matches.route');
routeMatches(app);

app.listen(port);
console.log('trendswar RESTful API server started on: ' + port);