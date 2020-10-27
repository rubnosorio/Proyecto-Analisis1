const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/unirse_a_clase';
var respues;

describe('unirse_a_clase', function () {
    beforeAll((done) => {
        request.post(endpoint,{json: true, body:{"cod_clase":"abcdefghi","id_usuario": 1}}, function (error, response) {
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
  
    it('Verificar que Haya registrado la unión al curso', function () {
        expect(JSON.parse(respues).body.statusCode2).toEqual(200);
    });
    
});