const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/get_examen_id';

describe('Get exam by id', function () {
    it('Deberia retornar 200 en codigo de respuesta', function (done) {
        request.get(endpoint, { json: true, body: { id_examen: 1 } }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});