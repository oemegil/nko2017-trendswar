var mongoose = require('mongoose'),
express = require('express'),
app = express(),
port = process.env.PORT || 3000;

app.listen(port);
console.log('trendswar RESTful API server started on: ' + port);
