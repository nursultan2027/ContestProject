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

app.use(express.static(path.join(__dirname,'client')));
app.get('/', function (req, res) {
  res.sendFile(__dirname+ '/client/index.html');
});  

app.post('/asd', function (req, res){
	MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("mydb");
		  var myobj = 
		  { 
		  	name: req.body.name, 
		  	surname: req.body.surname,
		    thirdname: req.body.thirdname,
		    sex: req.body.sex,
		    photo: req.body.photo,
		    dol: req.body.dol,
		    podr: req.body.podr,
		    dos1: req.body.dos1,
		    dos2: req.body.dos2,
		    dos3: req.body.dos3,
		    dos4: req.body.dos4
		  };
		  dbo.collection("customers").insertOne(myobj, function(err, res) {
		    if (err) throw err;
		    console.log(myobj.name+" "+ myobj.podr +" "+" - inserted");
		    db.close();
		  });
		});
});

app.use(function (err,req,res,next) {
    console.log(err);
    res.send('This is error');
});
 
app.listen(2030, function () {
  console.log('Example app listening on port 2028!')
});