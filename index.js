var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
const router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.use(bodyParser.urlencoded({
    extended : true,
    limit : '50mb'
}));
 
 
app.use(bodyParser.json({
    limit : '50mb'
}));

app.use(bodyParser.json());

app.post('/asd', function (req, res){
	console.log(req.body.name);


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: req.body.name, 
  				surname: req.body.surname 
  			};
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

});

app.use(express.static(path.join(__dirname,'client')));
app.get('/', function (req, res) {
  res.sendFile(__dirname+ '/client/index.html');
});  
app.use(function (err,req,res,next) {
    console.log(err);
    res.send('This is error');
});
 
app.listen(2030, function () {
  console.log('Example app listening on port 2028!')
});