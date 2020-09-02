module.exports=(app,connection)=>{
    app.delete('/eliminar_examen',(req,res)=>{
        var id_examen= req.body.id_examen;

        var status={
            statusCode:404
        }
        connection.query(`Delete from EXAMEN where id_examen= ${id_examen}`, function (err, rows, fields) {
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