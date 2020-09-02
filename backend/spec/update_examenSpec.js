const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/update_examen';

describe('update_prueba_examen', function () {
    var examen = {
        id_examen: 1,
        nombre_examen: "1er Parcial actualizado con prueba unitaria",
        num_preguntas: 4,
        valor_examen: 15,
        fecha: "31/08/2020",
        descripcion: "este campo es obligatorio actualizado en una prueba unitaria",
        preguntas: "[{\"opciones\": [{\"respuesta\": \"lunes\", \"es_correcta\": 1}, {\"respuesta\": \"martes\", \"es_correcta\": 0}, {\"respuesta\": \"miercoles\", \"es_correcta\": 0}, {\"respuesta\": \"ninguna de las anteriores es correcta\", \"es_correcta\": 0}], \"pregunta\": \"¿Que día es hoy?\", \"num_correctas\": 1, \"tipo_respuesta\": 0}, {\"opciones\": [{\"respuesta\": \"Overwatch\", \"es_correcta\": 1}, {\"respuesta\": \"COD\", \"es_correcta\": 1}, {\"respuesta\": \"PUBG\", \"es_correcta\": 1}, {\"respuesta\": \"Free Fire\", \"es_correcta\": 0}], \"pregunta\": \"¿Que juego(s) juega Erick?\", \"num_correctas\": 3, \"tipo_respuesta\": 0}, {\"opciones\": [{\"respuesta\": \"Alexander\", \"es_correcta\": 1}], \"pregunta\": \"¿Cual es el segundo nombre de Erick\", \"num_correctas\": 1, \"tipo_respuesta\": 1}, {\"opciones\": [{\"respuesta\": \"Verdadero\", \"es_correcta\": 1}, {\"respuesta\": \"Falso\", \"es_correcta\": 0}], \"pregunta\": \"¿Sale el semestre?\", \"num_correctas\": 1, \"tipo_respuesta\": 2}]"
    }

    it('update_examen 200', function (done) {
        request.post(endpoint, { json: true, body: examen }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});