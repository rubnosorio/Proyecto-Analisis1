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

const s3 = new AWS.S3({
    region: 'us-east-2',
    accessKeyId: "AKIAQQMKMIT76PMWLIOM",
    secretAccessKey: "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"
});


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
});

//---------------------------------------------------ENDPOINTS------------------------------------------------------------

const crear_tarea = require('./endpoints/crear_tarea')(app, mysql, s3);

// server init
app.listen(3000, () => console.log('escuchando en puerto 3000'));