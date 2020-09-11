const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/nota_estudiantes';

describe('nota de estudiantes', function () {
    var clase={
        id_clase:1
    }
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    it('debe devolver estado 200', function (done) {
        request.get(endpoint, { json: true, body: clase }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
    it('debe devolver una lista no vacía o vacía',function(done){
        request.get(endpoint, { json: true, body: clase }, function (error, response) {
            expect(response.body.lista_notas.length).toBeGreaterThanOrEqual(0);
            done();
        });
    });
    it('debe ser mayor o igual a 0 la nota de tareas',function(done){
        request.get(endpoint, { json: true, body: clase }, function (error, response) {
            if(response.body.lista_notas.length>0){
                var nota_tarea=0;
                for(let i=0;i<response.body.lista_notas[0].lista_tareas.length;i++){
                    nota_tarea+=response.body.lista_notas[0].lista_tareas[i].nota;
                }
                expect(nota_tarea).toBeGreaterThanOrEqual(0);
                done();
            }
        });
    });
});