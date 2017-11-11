var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://root:#PASSWORD#@ds255715.mlab.com:55715/heroku_gknnkhkt";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { userName: "oemegil",clientMachine:"KANSAL" };
  var newvalues = {userName: "oemegil",clientMachine:"KANSAL", point: -100000000 };
  db.collection("User").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });

});