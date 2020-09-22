module.exports = (app, connection) => {

    app.get('/crear_usuario-test', (req, res) => {
        res.status(200).send()
    })

    app.post('/crear_usuario-test', (req, res) => {
        userss = req.body.users
        userss.push(req.body.usuario)
        //console.log(users)
        res.status(200).send({ usuario: req.body.usuario, users: userss })
    })

    app.post('/crear_usuario', (req, res) => {
        var {
            id_usuario,
            nombres,
            apellidos,
            username,
            passwd,
            correo,
        } = req.body
        connection.query(`insert into USUARIO(nombres, apellidos, username, passwd, correo) values ('${nombres}','${apellidos}','${username}','${passwd}','${correo}')`, function (err, rows, fields) {
            if (!err) {
                res.status(200).send(200)
            }
            else {
                res.status(404).send(404)
            }
        });
    })
}