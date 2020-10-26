module.exports=(app,connection)=>{
    app.post('/ver_examenes',(req,res)=>{
        var { id_clase } = req.body;
        connection.query(`select * from EXAMEN where id_clase = ${id_clase}`, function (err, rows, fields) {
            if (!err) {
                res.status(200).send(rows)
            }
            else {
                res.status(404).send(err);
            }
        });
    });

    app.post('/ver_examenes_estudiante',(req,res)=>{
        var { id_clase } = req.body;
        connection.query(`select * from EXAMEN where id_clase=${id_clase} and estado=1`, function (err, rows, fields) {
            if (!err) {
                res.status(200).send(rows)
            }
            else {
                res.status(404).send(err);
            }
        });
    });
}