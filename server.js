var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'senha123456',
    database : 'sensors'
});

connection.connect();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// getting all the sensors
app.get('/sensors', function (req, res) {
    connection.query('SELECT * from sensors' , function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
});

app.listen(3000);
