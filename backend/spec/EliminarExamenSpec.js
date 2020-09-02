const request = require('request');
const server = require('../index');
const endpoint = 'http://localhost:3000/eliminar_examen';

describe('eliminar_examen', function () {
    var examen = {
        id_examen: 18
    }

    it('eliminar_examen', function (done) {
        request.delete(endpoint, { json: true, body: examen }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

});