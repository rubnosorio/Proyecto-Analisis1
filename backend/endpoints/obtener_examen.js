module.exports = (app,connection) => {
    app.post('/get_examenes', (req,res) => {
        let { id_usuario,id_clase } = req.body;
        let sql = `SELECT EXAMEN.nombre_examen, ENTREGA_EXAMEN.nota_examen from EXAMEN INNER JOIN ENTREGA_EXAMEN ON ENTREGA_EXAMEN.id_examen=EXAMEN.id_examen AND ENTREGA_EXAMEN.id_clase=EXAMEN.id_clase WHERE ENTREGA_EXAMEN.id_usuario=? AND ENTREGA_EXAMEN.id_clase=?`;
        let data = [id_usuario,id_clase];
        connection.query(sql,data,function (err, rows, fields) {
            if (!err) {
                let resultados = {
                    Examenes: []
                }   // listado de examenes
                for(let i=0; i<rows.length; i++){
                    var examen = {
                        nombre_examen: rows[i].nombre_examen,
                        nota: rows[i].nota_examen
                    }
                    resultados.Examenes.push(examen); // guardado de examen
                }
                res.status(200).send(resultados);
            }
            else {
                res.status(404).send('clase o usuario no existe');
            }
        });
    });
}