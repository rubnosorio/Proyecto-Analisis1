const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/registrar_nota_examen';

var testdata1 = {
    json: true,
    body: {
        id_usuario: 2,
        id_clase: 1,
        id_examen: 1,
        nota_examen: 100,
        examen_respuesta: '{}'
    }
};

var testdata2 = {
    json: true,
    body: {
        id_usuario: 1,
        id_clase: 1,
        id_examen: 1,
        nota_examen: -1,
        examen_respuesta: '{}'
    }
};
var testdata3 = {
    json: true,
    body: {
        id_usuario: 1,
        id_clase: 1,
    }
};

describe('Pruebas para regsitrar nota de examen', function () {
    it('Deberia retornar 200 en codigo de respuesta para informacion correcta', function (done) {
        request.post(endpoint, testdata1, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
    it('Deberia retornar un error 400 de respuesta para una nota invalida', function (done) {
        request.post(endpoint, testdata2, function (error, response) {
            expect(response.statusCode).toEqual(400);
            done();
        });
    });
    it('Deberia retornar un error 400 de respuesta por falta de datos para registrar nota', function (done) {
        request.post(endpoint, testdata3, function (error, response) {
            expect(response.statusCode).toEqual(400);
            done();
        });
    });
});