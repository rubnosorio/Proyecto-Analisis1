module.exports = (app, connection) => {
    app.post('/actualizar-publicacion', (req, res) => {
        let sql = `UPDATE PUBLICACION SET publicacion='${req.body.publicacion}' WHERE id_publicacion=${req.body.id_publicacion}`;
        connection.query(sql, [], function (err, rows, fields) {
            if (err) {
                res.status(500).json({ message: "No se pudo actualizar la publicacion" });
            }
            else {
                res.status(200).json({ message: "Se actualizo correctamente la publicacion" });
            }
        });
    });

    app.post('/obtener-publicacion', (req, res) => {
        let sql = `SELECT * FROM PUBLICACION WHERE id_publicacion=${req.body.id_publicacion}`;
        connection.query(sql, [], function (err, rows, fields) {
            if (err) {
                res.status(500).json({ message: "No se pudo obtener la publicacion" });
            }
            else {
                res.status(200).json({ message: "", data: rows[0] });
            }
        });
    });
}