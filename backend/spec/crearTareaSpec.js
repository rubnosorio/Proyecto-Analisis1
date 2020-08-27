const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/crear_tarea';

describe('rol', function () {
    /*
    //PRUEBA GET
    it('should return 200 response code', function (done) {
        request.get(endpoint, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });*/

    /* SI EN DADO CASO FALLA EL TIEMPO DE EJECUCIÓN DE JASMIN QUE ES 5S (5000 POR DEFECTO) AGREGAR EL CODIGO SIGUIENTE
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    
    */

    var tarea = {
        nombre_tarea: "tarea2314",
        descripcion: "esta es la tarea 2314",
        nombre_clase: "compi2",
        fecha_entrega: "28/09/2020",
        id_clase: 1,
        archivo: `data:text/plain;base64,aG9sYQ==`
    }

    it('crear_tarea', function (done) {
        request.post(endpoint, { json: true, body: tarea }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});