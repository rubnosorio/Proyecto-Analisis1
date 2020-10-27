module.exports = (app, connection) => {
    app.post('/actualizar-publicacion', (req, res) => {
        let { id_tarea, nombre_tarea, descripcion, fecha_entrega } = req.body;
        var status = {
            statusCode: 200
        }
        let sql = `UPDATE PUBLICACION SET publicacion=${req.body.publicacion} WHERE id_publicacion=${req.body.id_publicacion}`;
        connection.query(sql, [], function (err, rows, fields) {
            if (!err) {
                res.status(500).json({ message: "No se pudo actualizar la publicacion" });
            }
            else {
                res.status(200).json({ message: "Se actualizo correctamente la publicacion" });
            }
        });
    });
}