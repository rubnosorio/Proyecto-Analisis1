module.exports=(app,connection)=>{
    app.delete('/eliminar_tarea',(req,res)=>{
        var id_tarea= req.body.id_tarea;

        var status={
            statusCode:404
        }
        connection.query(`Delete from TAREA where id_tarea= ${id_tarea}`, function (err, rows, fields) {
            if (!err) {
               status.statusCode=200;
                res.send(status);
            }
            else {
                status.statusCode=500;
                res.send(status);
            }
        });
    })
}