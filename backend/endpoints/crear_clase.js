const { response } = require("express");

module.exports = (app,connection,uuid) => {
    //var a = require('./examen.json');
    app.post('/crear_clase', (req, res) => {
        var nombre_clase = req.body.nombre_clase;
        var id_usuario = req.body.id_usuario;
        //generamos el codigo de acceso
        var cod_acceso = uuid();
        cod_acceso = cod_acceso.substring(0,8);
        connection.query(`insert into CLASE(nombre_clase,id_usuario,cod_acceso) values ('${nombre_clase}',${parseInt(id_usuario)},
        '${cod_acceso}')`, function (err, rows, fields) {
            //console.log(err);
            if (!err) {
                res.status(200).send("200 clase creada")
            }
            else {
                //status.statusCode = 404;
                console.log("falso");
                res.status(404).send("404 clase no creada")
            }
        });
    })
}