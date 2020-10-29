module.exports=(app,connection)=>{
    app.delete('/darme_baja',(req,res)=>{
        let { id_clase,id_usuario } = req.body;
        var status={
            statusCode:404
        }
        let data=[id_clase,id_usuario];
        connection.query(`Delete from USUARIO_CLASE where id_clase=? AND id_usuario=?`,data, function (err, rows, fields) {
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