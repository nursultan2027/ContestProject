var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
 
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