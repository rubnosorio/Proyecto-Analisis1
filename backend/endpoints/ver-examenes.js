module.exports=(app,connection)=>{
    app.post('/ver_examenes',(req,res)=>{
        var { id_clase } = req.body;
        connection.query(`select * from EXAMEN where id_clase = ${id_clase}`, function (err, rows, fields) {
            if (!err) {
                res.send(rows)
            }
            else {
                throw err;
            }
        });
    })
}