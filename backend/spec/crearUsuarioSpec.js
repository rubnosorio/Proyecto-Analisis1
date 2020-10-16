const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/crear_usuario-test';

fdescribe('Cuando se registra un usuario', function () {

    var usuarios = []

    it('deberia retornar 200 en codigo de respuesta', function (done) {
        request.get(endpoint, {json: true, body: {}}, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    it('deberia recibir los parametros', function (done) {
        var usuarios = []
        var usuario = {
            id_usuario: 0,
            nombres: "nombre prueba",
            apellidos: "apellido prueba",
            username: "username prueba",
            passwd: "passwd prueba",
            correo: "correo prueba",
        }
        request.post(endpoint, {json: true, body: {usuario, users: usuarios}}, function (error, response) {
            var temp = JSON.parse(response.request.body).usuario
            expect(temp.id_usuario).toEqual(usuario.id_usuario);
            expect(temp.nombres).toEqual(usuario.nombres);
            expect(temp.apellidos).toEqual(usuario.apellidos);
            expect(temp.username).toEqual(usuario.username);
            expect(temp.passwd).toEqual(usuario.passwd);
            expect(temp.correo).toEqual(usuario.correo);
            done();
        });
    });

    it('deberia ingresar el usuario al sistema', function (done) {
        var usuarios = []
        var usuario = {
            id_usuario: 0,
            nombres: "nombre prueba",
            apellidos: "apellido prueba",
            username: "username prueba",
            passwd: "passwd prueba",
            correo: "correo prueba",
        }
        request.post(endpoint, {json: true, body: {usuario, users: usuarios}}, function (error, response) {
            var temp = response.body.users
            expect(temp.length).toEqual(1);
            done();
        });
    });
});