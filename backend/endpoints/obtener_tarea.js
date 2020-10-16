module.exports = (app,connection) => {
    app.post('/get_tareas', async (req,res) => {
        let { id_usuario,id_clase } = req.body;
        let sql = `SELECT TAREA.nombre_tarea, ENTREGA_TAREA.nota from TAREA INNER JOIN ENTREGA_TAREA ON ENTREGA_TAREA.id_tarea=TAREA.id_tarea AND ENTREGA_TAREA.id_clase=TAREA.id_clase WHERE ENTREGA_TAREA.id_usuario=? AND ENTREGA_TAREA.id_clase=?`;
        let data = [id_usuario,id_clase];
        connection.query(sql,data,function (err, rows, fields) {
            if (!err) {
                let resultados = {
                    Tareas: []
                }   // listado de tareas
                for(let i=0; i<rows.length; i++){
                    var tarea = {
                        nombre_tarea: rows[i].nombre_tarea,
                        nota: rows[i].nota
                    }
                    resultados.Tareas.push(tarea); // guardado de tarea
                }
                res.status(200).send(resultados);
            }
            else {
                res.status(404).send('clase o usuario no existe');
            }
        });
    })
}