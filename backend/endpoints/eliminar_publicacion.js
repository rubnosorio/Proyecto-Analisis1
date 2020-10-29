module.exports=(app,connection)=>{
    app.delete('/eliminar_publicacion',(req,res)=>{
        var id_publicacion = req.body.id_publicacion;
        var status={
            statusCode:404
        }
        connection.query(`Delete from PUBLICACION where id_publicacion=${id_publicacion}`, function (err, rows, fields) {
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