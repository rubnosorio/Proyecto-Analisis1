module.exports=(app,connection)=>{
    app.delete('/eliminar_tarea',(req,res)=>{
        var nombre_tarea= req.body.nombre_tarea;
        var nombre_clase= req.body.nombre_clase;
        var id_clase= req.body.id_clase;
        var id_tarea= req.body.id_tarea;


        connection.query(`Delete from TAREA where id_clase= ${id_clase}) and id_tarea= ${id_tarea}`, function (err, rows, fields) {
            if (!err) {
                res.send(rows)
            }
            else {
                throw err;
            }
        });
    })
}