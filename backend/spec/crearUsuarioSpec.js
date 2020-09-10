const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/crear_usuario';

fdescribe('Cuando se registra un usuario', function () {
    it('deberia retornar 200 en codigo de respuesta', function (done) {
        request.post(endpoint, {json: true, body: {}}, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});