# SensorServe

This project was generated with [Node.js] version 13.0.1.

## Installation

Run `git clone` on `https://github.com/joao-colen/sensor-server.git` to download the project of sensorServer

Go to the folder of the project with `cd sensor-server`

Run `npm install` to install all the dependencies of the project

## Dependencies

It requires [MySql](https://www.mysql.com/) for the database

## Usage

Run `mysql -u root -p` to log in MySql

Go to the folder of the project and use the commands of `database.sql` to create the database

Go to the folder of the project and in the file of server.js change:
```javascript
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '[YOUR_MYSQL_PASSWORD]',
    database : 'sensors'
});
```

Go to the folder of the project and run `node server.js` to start sensorServer