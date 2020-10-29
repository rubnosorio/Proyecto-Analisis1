module.exports = (app,connection) => {
    app.post('/ver_publicacionesE', async (req,res) => {
        var id_clase= req.body.Id_Clase;
        connection.query(`select * from PUBLICACION where id_clase= '${parseInt(id_clase)}' ;`,function (err, rows, fields) {
            if (!err) {
                res.send(rows);
            }else {
                console.log(err);
                res.send('{"res":405}');
            }
        });
    });
}