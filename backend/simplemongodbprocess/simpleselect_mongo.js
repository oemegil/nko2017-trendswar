var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://root:#PASSWORD#@ds255715.mlab.com:55715/heroku_gknnkhkt";

MongoClient.connect(url, function(err, db) {
  db.collection("TrendWords").find().limit(10).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });

});