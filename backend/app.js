var mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/words.route'); //importing route
routes(app); //register the route

app.listen(port);
console.log('trendswar RESTful API server started on: ' + port);
