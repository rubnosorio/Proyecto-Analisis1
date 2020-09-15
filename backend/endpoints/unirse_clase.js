module.exports=(app,connection)=>{
    app.post('/unirse_a_clase',(req,res)=>{
        var { cod_clase } = req.body;
        connection.query(`select * from CLASE where cod_acceso= "${cod_clase}" `, function (err, rows, fields) {
            if (!err) {
                if(JSON.stringify(rows)=="[]"){
                    var convertedJSON = JSON.parse('{"statusCode1":200, "ExisteClase": false, "cuerpo":'+ JSON.stringify(rows) +'}');
                }else{
                    var convertedJSON = JSON.parse('{"statusCode1":200, "ExisteClase": true, "cuerpo":'+ JSON.stringify(rows) +'}');
                }
                res.status(200).send(convertedJSON);
                
            }
            else {
                res.status(404).send(err);
            }
        });
    })
}