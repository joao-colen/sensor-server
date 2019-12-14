var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'senha123456',
    database : 'sensors'
});

connection.connect();

connection.end();