const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/get_examen_id';

var testdata1 = { json: true, body: { id_examen: 1 } };
var testdata2 = { json: true, body: { id_examen: -1 } };
var testdata3 = { json: true, body: { id_examen: '' } };

describe('Get exam by id', function () {
    it('Deberia retornar 200 en codigo de respuesta para un id valido', function (done) {
        request.get(endpoint, testdata1, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
    it('Deberia retornar un error en codigo de respuesta para id negativo', function (done) {
        request.get(endpoint, testdata2, function (error, response) {
            expect(response.statusCode).toEqual(400);
            done();
        });
    });
    it('Deberia retornar un error en codigo de respuesta para id vacio', function (done) {
        request.get(endpoint, testdata3, function (error, response) {
            expect(response.statusCode).toEqual(400);
            done();
        });
    });
});