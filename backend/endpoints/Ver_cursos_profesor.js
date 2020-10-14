module.exports=(app,connection)=>{
    app.post('/ver_cursosp',(req,res)=>{
        var { id_usuario } = req.body;
        connection.query(`select * from CLASE where id_usuario = ${id_usuario}`, function (err, rows, fields) {
            if (!err) {
                res.send(rows)
            }
            else {
                throw err;
            }
        });
    })
}