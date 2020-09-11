const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/nota_estudiantes';

describe('nota de estudiantes', function () {
    it('debe devolver estado 200', function (done) {
        var clase={
            id_clase:1
        }
        request.post(endpoint, { json: true, body: clase }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
    it('debe devolver una lista no vacía',function(done){
        request.post(endpoint, { json: true, body: clase }, function (error, response) {
            expect(response.lista_notas).toEqual(![]);
            done();
        });
    });
});