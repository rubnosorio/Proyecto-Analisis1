const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/crear_publicacion';

describe('CrearExamen', function () {
    var publicacion = {
        "publicacion": "El examen inicia en 20 minutos",
        "id_clase": 1,
        "id_usuario": 1
    };

    it('Se deberia crear publicacion', function (done) {
        request.post(endpoint, { json: true, body: publicacion }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});