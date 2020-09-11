module.exports = (app,connection) => {
    //var a = require('./examen.json');
    app.get('/nota_estudiantes', (req, res) => {
        var id_clase = req.body.id_clase;

        connection.query(`select distinct CLASE.nombre_clase, TAREA.nombre_tarea, ENTREGA_TAREA.nota, USUARIO.id_usuario, USUARIO.nombres, USUARIO.apellidos
        from CLASE, TAREA, ENTREGA_TAREA, USUARIO_CLASE, USUARIO
        where TAREA.id_clase=CLASE.id_clase and
        CLASE.id_clase=${parseInt(id_clase)} and
        TAREA.id_tarea=ENTREGA_TAREA.id_tarea and
        USUARIO_CLASE.id_usuario= ENTREGA_TAREA.id_usuario and
        USUARIO.id_usuario=USUARIO_CLASE.id_usuario`, function (err, rows, fields) {
            //console.log(err);
            if (!err) {
                //console.log(rows);
                var response={
                    lista_notas:[]
                };
                res.status(200).send(response);
            }
            else {
                res.status(404).send("404 clase no creada")
            }
        });
    })
}