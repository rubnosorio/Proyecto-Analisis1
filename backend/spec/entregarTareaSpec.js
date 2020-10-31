const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/entregar_tarea';

describe('Entregar_tarea', function () {
    var tarea = {
        nombre: "tarea2_201612097",
        id_clase: 1,
        id_usuario: 1,
        id_tarea: 19,
        archivo: `data:text/plain;base64,aG9sYQ==`
    }
});