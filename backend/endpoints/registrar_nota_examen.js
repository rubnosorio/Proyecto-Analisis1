module.exports = (app, connection) => {
    app.post('/registrar_nota_examen', (req, res) => {
        var id_usuario = req.body.id_usuario;
        var id_clase = req.body.id_clase;
        var id_examen = req.body.id_examen;
        var nota_examen = req.body.nota_examen;
        var examen_respuesta = req.body.examen_respuesta;

        if (id_usuario == undefined || id_usuario == '' || id_clase == undefined || id_clase == '' || id_examen == undefined || id_examen == '' || nota_examen == undefined || nota_examen == '' || examen_respuesta == undefined || examen_respuesta == '') {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({});
        }
        else if (nota_examen < 0 || nota_examen > 100) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({});
        }
        else {
            connection.query(`insert into ENTREGA_EXAMEN (id_usuario, id_clase, id_examen, nota_examen, examen_respuesta)
                values (${id_usuario},${id_clase},${id_examen},${nota_examen},'${examen_respuesta}')`, function (err, rows, fields) {
                if (!err) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(rows);
                }
                else {
                    console.log(err);
                    res.statusCode = 404;
                    res.send(res);
                }
            });
        }
    });
};