module.exports = (app,connection) => {
    app.post('/get_nota', async (req,res) => {
        let { id_usuario,id_clase } = req.body;
        let sql = `SELECT TAREA.nombre_tarea, ENTREGA_TAREA.nota from TAREA INNER JOIN ENTREGA_TAREA ON ENTREGA_TAREA.id_tarea=TAREA.id_tarea AND ENTREGA_TAREA.id_clase=TAREA.id_clase WHERE ENTREGA_TAREA.id_usuario=? AND ENTREGA_TAREA.id_clase=?`;
        let data = [id_usuario,id_clase];
        connection.query(sql,data,function (err, rows, fields) {
            if (!err) {
                let resultados = {
                    nota: 0
                }; 
                for(let i=0; i<rows.length; i++){
                    var tarea = {
                        nombre_tarea: rows[i].nombre_tarea,
                        nota: rows[i].nota
                    }
                    if(tarea.nota >= 0){
                        resultados.nota = resultados.nota + tarea.nota; 
                    }
                }
                sql = `SELECT EXAMEN.nombre_examen, ENTREGA_EXAMEN.nota_examen from EXAMEN INNER JOIN ENTREGA_EXAMEN ON ENTREGA_EXAMEN.id_examen=EXAMEN.id_examen AND ENTREGA_EXAMEN.id_clase=EXAMEN.id_clase WHERE ENTREGA_EXAMEN.id_usuario=? AND ENTREGA_EXAMEN.id_clase=?`;
                connection.query(sql,data,function (err, rows, fields) {
                    if(!err){
                        for(let i=0; i<rows.length; i++){
                            var examen = {
                                nombre_examen: rows[i].nombre_examen,
                                nota: rows[i].nota_examen
                            }
                            if(examen.nota >= 0){
                                resultados.nota = resultados.nota + examen.nota; 
                            }
                        }
                        res.status(200).send(resultados);
                    }else{
                        res.status(404).send('clase o usuario no existe');
                    }
                });
            }
            else {
                res.status(404).send('clase o usuario no existe');
            }
        });
    })
}