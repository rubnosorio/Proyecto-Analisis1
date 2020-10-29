module.exports = (app,connection) => {
    app.post('/ver_entregas', (req, res) => {
        var id_tarea = req.body.id_tarea;
        connection.query(`select ENTREGA_TAREA.id_usuario, ENTREGA_TAREA.url_tarea, ENTREGA_TAREA.nota, USUARIO.nombres, USUARIO.apellidos 
        from ENTREGA_TAREA, USUARIO 
        where id_tarea=${parseInt(id_tarea)} and ENTREGA_TAREA.id_usuario=USUARIO.id_usuario`, function (err, rows, fields) {
            //console.log(err);
            if (!err) {
                res.status(200).send(rows)
            }
            else {
                //status.statusCode = 404;
                console.log("falso");
                res.status(404).send(err)
            }
        });
    })
}