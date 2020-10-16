const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/ver_tareas';

describe('tareas', function () {
    it('deberia retornar 404 en codigo de respuesta', function (done) {
        request.get(endpoint, function (error, response) {
            expect(response.statusCode).toEqual(404);
            done();
        });
    });

    it('deberia retornar 200 en codigo de respuesta', function (done) {
        request.post(endpoint, {json: true, body: {id_clase: 1}}, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});