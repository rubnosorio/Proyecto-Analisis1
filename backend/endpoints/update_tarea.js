module.exports = (app,connection) => {
    app.post('/update_tarea',(req,res) => {
        let { id_tarea,nombre_tarea,descripcion,fecha_entrega } = req.body;
        var status={
            statusCode:200
        } 
        let sql = `UPDATE TAREA SET nombre_tarea=?, descripcion=?, fecha_entrega=STR_TO_DATE(REPLACE('${fecha_entrega}','/','.') ,GET_FORMAT(date,'EUR')) WHERE id_tarea=?`;
        let data = [nombre_tarea,descripcion,id_tarea]
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