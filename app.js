var express = require('express');
var mongo = require('mongodb');
var fs = require('fs');
var app = express();

app.listen(3000, function(){ // run local server on port 3000
    console.log("Running on Port 3000");
})

app.use(express.static('public')); // static use of public folder

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:admin123@ds241065.mlab.com:41065/pubcrawl";

MongoClient.connect(url, function(err, db){ //connect to database
    if (err) throw err;
    db.collection('pubs').find().toArray(function(err, res){ // convert collection 'pubs' to array
        if (err) throw err;
        var json = JSON.stringify(res); // convert BSON to JSON string
        fs.writeFile('public/myData.json', json, 'utf8'); // write JSON file including all data in collection
        db.close(); // close database
    })
});