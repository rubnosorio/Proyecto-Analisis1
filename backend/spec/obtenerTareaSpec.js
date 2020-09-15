const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/get_tareas';

describe('obtiene las tareas de X estudiante', function () {
    it('get_tareas 200', function (done) {
        var data = {
            id_usuario: 1,
            id_clase: 1
        }
        request.post(endpoint, { json: true, body: data }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});