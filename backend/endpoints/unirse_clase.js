module.exports=(app,connection)=>{
    app.post('/unirse_a_clase',(req,res)=>{
        connection.query(`select * from CLASE`, function (err, rows, fields) {
            if (!err) {
                var convertedJSON = JSON.parse('{"statusCode1":200, "cuerpo":'+ JSON.stringify(rows) +'}');
                res.status(200).send(convertedJSON);
            }
            else {
                res.status(404).send(err);
            }
        });
    })
}