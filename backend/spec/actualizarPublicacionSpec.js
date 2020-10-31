const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/actualizar-publicacion';

describe('Dado que se actualizara una publicacion', function () {
    var resp = {
        id_publicacion: 1,
        publicacion: "Se actualizo correctamente la publicacion"
    };

    it('Cuando se quiere interactua con la base de datos', function (done) {
        request.post(endpoint, { json: true, body: resp }, function (error, response) {
            expect(response.body.message).toEqual("Se actualizo correctamente la publicacion");
            done();
        });
    });
});