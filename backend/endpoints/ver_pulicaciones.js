module.exports = (app,connection) => {
    app.post('/ver_publicaciones', async (req,res) => {
        var id_usuario= req.body.Id_Usuario;
        var id_clase= req.body.Id_Clase;
        connection.query(`select * from PUBLICACION where id_usuario= '${parseInt(id_usuario)}' and id_clase= '${parseInt(id_clase)}' ;`,function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            }else {
                console.log(err);
                res.send('{"res":405}');
            }
        });
    });
}