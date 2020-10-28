module.exports = (app,connection) => {
    app.post('/actualizar_nota_tarea', (req, res) => {
        var id_usuario = req.body.id_usuario;
        var id_tarea = req.body.id_tarea;
        var nota = req.body.nota;
        connection.query(`update ENTREGA_TAREA set nota=${parseInt(nota)} where id_usuario=${parseInt(id_usuario)} and id_tarea=${parseInt(id_tarea)}`, function (err, rows, fields) {
            //console.log(err);
            if (!err) {
                res.status(200).send(true)
            }
            else {
                //status.statusCode = 404;
                console.log("falso");
                res.status(404).send(false)
            }
        });
    })
}