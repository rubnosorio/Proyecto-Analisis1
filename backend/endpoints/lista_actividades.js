module.exports = (app,connection) => {
    app.post('/lista_actividades', async (req,res) => {
        var id_clase=req.body.id_clase;
        connection.query(`select EXAMEN.id_clase as id_clase, EXAMEN.nombre_examen as actividad from EXAMEN
        union
        select TAREA.id_clase as id_clase, TAREA.nombre_tarea as actividad from TAREA`,function (err, rows, fields) {
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