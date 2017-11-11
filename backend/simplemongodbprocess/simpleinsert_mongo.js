var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://root:#PASSWORD#@ds255715.mlab.com:55715/heroku_gknnkhkt";

MongoClient.connect(url, function(err, db) {

var myobj = { word: "React"};
  db.collection("TrendWords").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
 });

});