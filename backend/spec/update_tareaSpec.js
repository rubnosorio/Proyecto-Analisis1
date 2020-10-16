const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/update_tarea';

describe('update_prueba', function () {
    var tarea = {
        id_tarea: 7,
        nombre_tarea: "tarea7",
        descripcion: "prueba update",
        fecha_entrega: "05/10/2020"
    }

    it('update_tarea 200', function (done) {
        request.post(endpoint, { json: true, body: tarea }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});