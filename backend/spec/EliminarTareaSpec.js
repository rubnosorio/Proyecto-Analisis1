const request = require('request');
const server = require('../index');
const endpoint = 'http://localhost:3000/eliminar_tarea';

describe('eliminar_tarea', function () {
    var tarea = {
        id_tarea: 9
    }

    it('eliminar_tarea', function (done) {
        request.delete(endpoint, { json: true, body: tarea }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

});