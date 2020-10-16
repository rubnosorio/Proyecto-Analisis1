const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/get_examenes';

describe('obtiene los examenes de X estudiante', function () {
    var data = {
        id_usuario: 1,
        id_clase: 1
    }
    it('get_examenes 200', function (done) {
        request.post(endpoint, { json: true, body: data }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    it('verifica que la cantidad de examenes obtenida sea valida', function (done) {
        request.post(endpoint, { json: true, body: data }, function (error, response) {
            expect(response.body.Examenes.length).toBeGreaterThanOrEqual(0);
            done();
        });
    });

    it('verifica que los examenes cuenten con un nombre', function (done) {
        request.post(endpoint, { json: true, body: data }, function (error, response) {
            for(let i=0; i<response.body.Examenes.length; i++){
                expect(response.body.Examenes[i].nombre_examen.length).toBeGreaterThan(0);
            }
            done();
        });
    });

    it('verifica que los examenes tengan una nota valida', function (done) { 
        request.post(endpoint, { json: true, body: data }, function (error, response) {
            for(let i=0; i<response.body.Examenes.length; i++){
                expect(response.body.Examenes[i].nota).toBeGreaterThanOrEqual(0);
            }
            done();
        });
    });
});