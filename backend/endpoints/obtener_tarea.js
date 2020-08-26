app.post('/get_tarea', async (req,res) => {
    const { id_tarea } = req.body;
    sql = ''; // consulta 
    // conexion db
    let result; // respuesta
    Tarea=[];
    result.rows.map(tr => {
        let schema_tarea = {
            "id_tarea": tr[0],
            "nombre_tarea": tr[1],
            "descripcion": tr[2],
            "url_archivo": tr[3],
            "fecha_entrega": tr[4]
        }
        Tarea.push(schema_tarea);
    })
    res.json(Tarea);
});