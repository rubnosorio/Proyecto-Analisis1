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
const aws_keys = require('./aws/aws_keys');
const s3 = new AWS.S3(aws_keys.s3);
var uuid = require('uuid');

var connection = mysql.createConnection({
    host: '107.22.143.33',
    user: 'root',
    password: 'root',
    database: 'analisis1',
    port: 3306
});
connection.connect();
//----------------------------------------------------PRUEBA CONEXIÓN A DB------------------------------------------------
app.get('/rol', (req, res) => {
    /*connection.query('show databases', function (err, rows, fields) {
        if (!err) {
            res.send(rows)
        }
        else {
            throw err;
        }
    });*/
    res.sendStatus(200);
});

//---------------------------------------------------ENDPOINTS------------------------------------------------------------

const crear_tarea = require('./endpoints/crear_tarea')(app, mysql, s3, connection);

const ver_tareas = require('./endpoints/ver-tareas')(app, connection);

const eliminar_tarea = require('./endpoints/eliminar_tarea')(app, connection);
// server init
const update_tarea = require('./endpoints/update_tarea')(app, connection);
const get_tarea = require('./endpoints/obtener_tarea')(app, connection);
const login = require('./endpoints/login')(app, connection);
const entregar_tarea = require('./endpoints/entregar_tarea')(app, s3, connection);
const crear_examen = require('./endpoints/crear_examen')(app, connection);
const crear_clase = require('./endpoints/crear_clase')(app, connection, uuid);
const ver_examenes = require('./endpoints/ver-examenes')(app, connection);
const update_examen = require('./endpoints/update_examen')(app, connection);
const get_examenes = require('./endpoints/obtener_examen')(app, connection);
const eliminar_exmamen = require('./endpoints/eliminar_examen')(app, connection);
const nota_estudiantes = require('./endpoints/nota_estudiantes')(app, connection);
const lista_actividades = require('./endpoints/lista_actividades')(app, connection);
const crear_usuario = require('./endpoints/crear_usuario')(app, connection);
const unirse_clase = require('./endpoints/unirse_clase')(app, connection);
const getExamId = require('./endpoints/getExamenId')(app, connection);
const registrar_nota_examen = require('./endpoints/registrar_nota_examen')(app, connection);
const notas_estudiante = require('./endpoints/nota_estudiante')(app, connection);
const obtener_Clases = require('./endpoints/obtener_clases')(app, connection);
const ver_cursos_profesor = require('./endpoints/Ver_cursos_profesor')(app, connection);
const actualizar_publicacion = require('./endpoints/actualizar-publicacion')(app, connection);
const select_tareas = require('./endpoints/select_tareas_states')(app, connection);
const crear_publicacion = require('./endpoints/crear_publicacion')(app, connection);
const actualizar_nota_tarea = require('./endpoints/actualiza_nota_tarea')(app, connection);
const select_tareas_clase = require('./endpoints/selec_tareas_clase')(app, connection);
const ver_entregas = require('./endpoints/ver_entregas')(app, connection);
const eliminar_publicacion = require('./endpoints/eliminar_publicacion')(app,connection);
const darme_baja = require('./endpoints/darme_baja')(app,connection);
const ver_publicaciones = require('./endpoints/ver_pulicaciones')(app,connection);

app.listen(3000, () => console.log('escuchando en puerto 3000'));