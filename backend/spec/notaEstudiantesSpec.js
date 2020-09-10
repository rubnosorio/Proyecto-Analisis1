const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/nota_estudiantes';

describe('login', function () {
    it('should be different to null', function (done) {
        request.post(endpoint, { json: true, body: user }, function (error, response) {
            expect(response.listaNotas).toEqual(!{});
            done();
        });
    });
});