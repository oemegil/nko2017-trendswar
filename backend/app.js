var mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    express = require('express'),
    app = express(),
    Word = require('./models/word.model'),
    port = process.env.PORT || 3000,
    mongoUrl = "mongodb://root:root_1@ds255715.mlab.com:55715/heroku_gknnkhkt";
    
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/words.route'); //importing route
routes(app); //register the route

app.listen(port);
console.log('trendswar RESTful API server started on: ' + port);
