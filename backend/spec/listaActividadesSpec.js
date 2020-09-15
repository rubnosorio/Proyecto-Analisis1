const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/lista_actividades';

describe('lista de actividades', function () { 
    var clase={
        id_clase:1
    }
    it('deberia devolver estado 200 si se realizó correctamente', function (done) {
        request.post(endpoint, { json: true, body: clase }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});