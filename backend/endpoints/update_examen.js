module.exports = (app,connection) => {
    app.post('/update_examen',(req,res) => {
        let { id_examen,nombre_examen,num_preguntas,valor_examen,fecha,descripcion,preguntas } = req.body;
        var status={
            statusCode:200
        } 
        let sql = `UPDATE EXAMEN SET nombre_examen=?, num_preguntas=?, valor_examen=?, fecha=STR_TO_DATE(REPLACE('${fecha}','/','.') ,GET_FORMAT(date,'EUR')), descripcion=?, preguntas=? WHERE id_examen=?`;
        let data = [nombre_examen,num_preguntas,valor_examen,descripcion,preguntas,id_examen];
        connection.query(sql,data,function (err, rows, fields) {
            if (!err) {
                res.send(status);
            }
            else {
                status.statusCode=404;
                res.send(status);
            }
        });
    });
}