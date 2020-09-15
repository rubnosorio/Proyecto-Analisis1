const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/unirse_a_clase';
var respues;

fdescribe('unirse_a_clase', function () {
    beforeAll((done) => {
        request.post(endpoint,{json: true, body:{"cod_clase":"abcdefghi"}}, function (error, response) {
            respues = JSON.stringify(response);
            done();
        });
        
    });

    it('Verificar conexión status 200', function () {
            expect(JSON.parse(respues).body.statusCode1).toEqual(200);
    });
    
    
    it('Verificar que la clase exista', function () {
        expect(JSON.parse(respues).body.ExisteClase).toBeTruthy();
    });
  

    
});