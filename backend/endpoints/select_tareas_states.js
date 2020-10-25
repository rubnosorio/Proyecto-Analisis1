module.exports = (app, connection) => {
    app.post('/select_tareas', (req, res) => {
        var id_clase = req.body.id_clase;
        var id_usuario = req.body.id_usuario;
        connection.query(`select * from TAREA where id_clase= "${parseInt(id_clase)}" `, function (err, rows, fields) {
            if (!err) {
                var saveTareas = rows;
                connection.query(`select * from ENTREGA_TAREA where id_usuario=${parseInt(id_usuario)} and id_clase=${parseInt(id_clase)}`, function (err2, rows2, fields2) {
                    if (!err2) {
                        var saveEntregas = rows2;
                        var listado_tareas=[];
                        //ahora vamos a verificar que tareas han sido entregadas
                        for (let i = 0; i < saveTareas.length; i++) {
                            var fecha = saveTareas[i].fecha_entrega.toISOString();
                            var tarea = {
                                id_tarea: saveTareas[i].id_tarea,
                                nombre_tarea: saveTareas[i].nombre_tarea,
                                descripcion: saveTareas[i].descripcion,
                                url_archivo_instruccion: saveTareas[i].url_archivo_instruccion,
                                fecha_entrega: fecha.substring(0,10),
                                valor_tarea: saveTareas[i].valor_tarea,
                                id_clase: saveTareas[i].id_clase,
                                estado: "Sin entregar",
                                id_usuario: parseInt(id_usuario)
                            }
                            for (let j = 0; j < saveEntregas.length; j++) {
                                if (saveEntregas[j].id_tarea==saveTareas[i].id_tarea && saveEntregas[j].id_usuario==parseInt(id_usuario)) {
                                    tarea.estado="Entregado";
                                    break;
                                }
                            }
                            listado_tareas.push(tarea);
                        }
                        res.send(listado_tareas);
                    }
                    else {
                        res.status(400).send(err2);
                    }
                });
            }
            else {
                res.status(404).send(err);
            }
        });

    })
}