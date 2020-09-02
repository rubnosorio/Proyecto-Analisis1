const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/crear_examen';

describe('CrearExamen', function () {
    var exam=require('../endpoints/examen.json');

    it('crearExamen', function (done) {
        request.post(endpoint, { json: true, body: exam }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});