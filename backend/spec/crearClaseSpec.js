const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/crear_clase';

describe('CrearExamen', function () {
    var clase = {
        nombre_clase: "prueba unitaria",
        id_usuario: 1
    };

    it('crearExamen', function (done) {
        request.post(endpoint, { json: true, body: clase }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});