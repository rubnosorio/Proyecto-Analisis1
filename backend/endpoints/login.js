module.exports = (app,connection) => {
    app.post('/login', async (req,res) => {
        var user=req.body.username;
        var pass=req.body.password;
        var status={
            statusCode:200
        } 
        //se cambio a recuperar toda la data para devolverla para fines de la demo
        connection.query(`select * from USUARIO`,function (err, rows, fields) {
            if (!err) {
                var Login = false;
                for(var i=0; i<rows.length; i++){
                    if(user==rows[i].username && pass==rows[i].passwd){
                        Login = true;
                        console.log(rows[i].id_usuario);
                    }
                }
                if(Login){
                    res.send(status);   // Login Correcto
                }else{
                    status.statusCode=404;
                    res.send(status);  // Login Incorrecto
                }
            }else {
                status.statusCode=404;
                res.send(status);
            }
        });
    });
}