const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/get_tareas';

describe('obtiene las tareas de X estudiante', function () {
    var data = {
        id_usuario: 1,
        id_clase: 1
    }
    it('get_tareas 200', function (done) {
        request.post(endpoint, { json: true, body: data }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    it('verifica que la cantidad de tareas sea valida', function (done) { 
        request.post(endpoint, { json: true, body: data }, function (error, response) {
            expect(response.body.Tareas.length).toBeGreaterThanOrEqual(0);
            done();
        });
    });

    it('verifica que las tareas tengan nombre', function (done) { 
        request.post(endpoint, { json: true, body: data }, function (error, response) {
            for(let i=0; i<response.body.Tareas.length; i++){
                expect(response.body.Tareas[i].nombre_tarea.length).toBeGreaterThan(0);
            }
            done();
        });
    });
});