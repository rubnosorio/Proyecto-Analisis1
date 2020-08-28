'use strict';
const fs = require('fs');
const AWS = require('aws-sdk');
const express = require('express');
const bodyParser = require('body-parser');
let cors = require('cors');
const app = express();
//const http = require('http').Server(app);
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
let bcrypt = require('bcryptjs');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '52.87.153.164',
    user: 'root',
    password: 'root',
    database: 'analisis1',
    port: 3306
});
connection.connect();

/*const s3 = new AWS.S3({
    region: 'xxxxxx',
    accessKeyId: 'xxxxxx',
    secretAccessKey: 'xxxxxxx'
});*/


//----------------------------------------------------PRUEBA CONEXIÓN A DB------------------------------------------------
app.get('/rol', (req, res) => {
    connection.query('show databases', function (err, rows, fields) {
        if (!err) {
            res.send(rows)
        }
        else {
            throw err;
        }
    });
    res.send("todo bien, todo correcto y yo que me alegro");
});

// server init
const update_tarea = require('./endpoints/update_tarea')(app,connection);
const get_tarea = require('./endpoints/obtener_tarea')(app,connection);
const login = require('./endpoints/login')(app,connection);

app.listen(3000, () => console.log('escuchando en puerto 3000'));