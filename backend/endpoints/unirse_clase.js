module.exports=(app,connection)=>{
    
    app.post('/unirse_a_clase',(req,res)=>{
        var id_clase;
        
        connection.query(`select * from CLASE where cod_acceso= "${req.body.cod_clase}" `, function (err, rows, fields) {
            var convertedJSON;
            if (!err) {
                if(JSON.stringify(rows)=="[]"){
                    convertedJSON = JSON.parse('{"statusCode1":200, "ExisteClase": false,"statusCode2":400, "cuerpo":'+ JSON.stringify(rows) +'}');
                }else{
                    id_clase = JSON.parse(JSON.stringify(rows));
                    //console.log(id_clase[0].id_clase);
                    convertedJSON = JSON.parse('{"statusCode1":200, "ExisteClase": true,"statusCode2":400, "cuerpo":'+ JSON.stringify(rows) +'}');
                    
                    connection.query(`insert into USUARIO_CLASE(id_usuario,id_clase) values (${req.body.id_usuario},${parseInt(id_clase[0].id_clase)})`, function (err2, rows2, fields2) {
                        if (!err) {
                            convertedJSON = JSON.parse('{"statusCode1":200, "ExisteClase": true, "statusCode2":200, "cuerpo":'+ JSON.stringify(rows) +'}');
                        }else{
                            convertedJSON = JSON.parse('{"statusCode1":200, "ExisteClase": false, "statusCode2":400, "cuerpo":'+ JSON.stringify(rows) +'}');
                        }  
                        res.status(200).send(convertedJSON);
                    });
                }  
            }
            else {
                res.status(404).send(err);
            }
        });
        
    })
}