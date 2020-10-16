module.exports = (app, connection) => {
    //var a = require('./examen.json');
    app.post('/crear_examen', (req, res) => {
        var nombre_examen = req.body.nombre_examen;
        var id_clase = req.body.id_clase;
        var num_preguntas = req.body.num_preguntas;
        var valor_examen = req.body.valor_examen;
        var fecha = req.body.fecha;
        var estado = req.body.estado;
        var descripcion = req.body.descripcion;
        var preguntas = req.body.preguntas;

        var status = {
            statusCode: 200
        }

        connection.query(`insert into EXAMEN(nombre_examen,id_clase,num_preguntas,valor_examen,fecha,estado,descripcion,preguntas) 
        values ('${nombre_examen}','${parseInt(id_clase)}','${parseInt(num_preguntas)}','${parseInt(valor_examen)}',
        STR_TO_DATE(REPLACE('${fecha}','/','.') ,GET_FORMAT(date,'EUR')),'${parseInt(estado)}','${descripcion}','${JSON.stringify(preguntas)}')`, function (err, rows, fields) {
            if (!err) {
                res.status(200).send(status);
            }
            else {
                status.statusCode = 404;
                res.status(404).send(status)
            }
        });
    })
}