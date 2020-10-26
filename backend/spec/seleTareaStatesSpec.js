const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/select_tareas';

describe('Dado que quiero ver las tareas de una clase', function () {
    var clase = {
        id_clase: 1,
        id_usuario: 1
    };
    describe('Cuando entro a la clase que quiero',function(){
        it('Entonces obtendré una lista de tareas que hay en la clase', function (done) {
            request.post(endpoint, { json: true, body: clase }, function (error, response) {
                expect(response.lista_tareas.length).toBeGreaterThanOrEqual(0);
                done();
            });
        });
    });

});