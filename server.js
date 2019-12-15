var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');

// create application/json parser
var jsonParser = bodyParser.json();


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors());
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

// getting specific sensor
app.get('/sensors/:id', function (req, res) {
    const id = req.params.id;
    connection.query('SELECT * from sensors WHERE id =' +  id, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
});

// removing specific sensor
app.get('/sensors/remove/:id', function (req, res) {
    const id = req.params.id;
    connection.query('DELETE from sensors WHERE id =' +  id, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
});

// adding new sensor
app.post('/sensors/add', function (req, res) {
    console.log(req.body);
    let query = "insert into sensors(altura, largura, comprimento, tensao, marca, tipo, ultima_medida, latitude, longitude, endereco) values (" + req.body.altura + "," + req.body.largura + ",";
    query += req.body.comprimento + "," + req.body.tensao + ",'" + req.body.marca + "','" + req.body.tipo +  "',";
    query += req.body.valor_medido + "," + req.body.latitude + "," + req.body.longitude + ",'" + req.body.endereco + "');";
    console.log(query);
    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
});

// updating specific sensor
app.put('/sensors/update/:id', function (req, res) {
    const id = req.params.id;
    console.log(req.body);
    let query = "UPDATE sensors SET altura = " + req.body.altura + ", largura = " + req.body.largura + ", comprimento = "+req.body.comprimento + ",";
    query +=   "tensao = "+ req.body.tensao + ",tipo = '" + req.body.tipo + "', marca = '" +req.body.marca + "',";
    query += "ultima_medida = " + req.body.valor_medido + ", latitude =" + req.body.latitude + ", longitude = " + req.body.longitude + ",endereco = '" +  req.body.endereco + "' WHERE id =" + id;
    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
});

app.listen(3000);
