# SensorServe

This project generates a API of sensors using [Node.js](https://nodejs.org/en/) version 13.0.1, with CRUD functions

## Installation

Run `git clone` on `https://github.com/joao-colen/sensor-server.git` to download the project of SensorServer

Go to the folder of the project with `cd sensor-server`

Run `npm install` to install all the dependencies of the project

## Dependencies

It requires [MySql](https://www.mysql.com/) and [Node.js](https://nodejs.org/en/)

## Usage

Go to a terminal and run `mysql -u root -p` to log in MySql

Inside the folder of the project, there is a file `database.sql`, copy the commands of this file and paste in the mysql bash to create the database

Go to the folder of the project and in the file of `server.js` change the script:
```javascript
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '[YOUR_MYSQL_PASSWORD]',
    database : 'sensors'
});
```

Go to the folder of the project in a different terminal and run `node server.js` to start SensorServer