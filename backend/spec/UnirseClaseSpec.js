const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/unirse_a_clase';

describe('unirse_a_clase', function () {
    
    it('Verificar conexión status 200', function (done) {
        request.post(endpoint, function (error, response) {
            expect(JSON.parse(response.body).statusCode1).toEqual(200);
            done();
        });
    });

    it('Verificar que la clase exista', function (done) {
        request.post(endpoint,{json: true, body:{"cod_clase":"abcdefghi"}}, function (error, response) {
            expect(response.body.ExisteClase).toBeTruthy();
            done();
        });
    });


    
});