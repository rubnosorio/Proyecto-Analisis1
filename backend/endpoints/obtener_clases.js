module.exports = (app,connection) => {
    app.post('/get_clases', async (req,res) => {
        let { id_usuario } = req.body;
        var status={
            statusCode:200,
            usuario:{
                id_clase:0,
                nombre_clase:""
            }
        } 
        connection.query(`select id_clase,nombre_clase from CLASE WHERE id_usuario=?`,[id_usuario],function (err, rows, fields) {
            if (!err) {
               res.status(200).send(rows);
            }else {
                status.statusCode=404;
                res.send(status);
            }
        });
    });
}