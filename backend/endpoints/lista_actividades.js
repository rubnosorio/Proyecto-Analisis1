module.exports = (app,connection) => {
    app.post('/lista_actividades', async (req,res) => {
        var id_clase=req.body.id_clase;
        connection.query(`select EXAMEN.nombre_examen as actividad from EXAMEN where EXAMEN.id_clase=${parseInt(id_clase)}
        union
        select TAREA.nombre_tarea as actividad from TAREA where TAREA.id_clase=${parseInt(id_clase)}`,function (err, rows, fields) {
            if (!err) {
                var response={
                    lista_actividades:[]
                }
                response.lista_actividades=rows;
                res.status(200).send(response);
            }
            else {
                res.status(404);
            }
        });
    });
}