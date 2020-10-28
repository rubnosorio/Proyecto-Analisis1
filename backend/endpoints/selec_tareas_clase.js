module.exports = (app,connection) => {
    app.post('/select_tareas_clase', (req, res) => {
        var id_clase = req.body.id_clase;
        connection.query(`select * from TAREA where id_clase=${parseInt(id_clase)}`, function (err, rows, fields) {
            //console.log(err);
            if (!err) {
                res.status(200).send(rows)
            }
            else {
                //status.statusCode = 404;
                console.log("falso");
                res.status(404).send(false)
            }
        });
    })
}