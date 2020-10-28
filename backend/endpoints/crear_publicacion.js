const { response } = require("express");

module.exports = (app,connection,uuid) => {
    app.post('/crear_publicacion', (req, res) => {
        var publicacion = req.body.publicacion;
        var id_clase = req.body.id_clase;
        var id_usuario = req.body.id_usuario;

        connection.query(`insert into PUBLICACION(publicacion, fecha, id_clase, id_usuario) values ('${publicacion}', NOW(), ${id_clase}, ${id_usuario})`, function (err, rows, fields) {
            //console.log(err);
            if (!err) {
                res.status(200).send("Publicacion creada")
            }
            else {
                //status.statusCode = 404;
                console.log("falso");
                res.status(404).send("La publicacion no se pudo llevar acabo");
            }
        });
    })
}