app.post('/update_tarea',(req,res) => {
    const { id_tarea,nombre_tarea,descripcion,url_archivo,fecha_entrega } = req.body;
    sql = ''; // consulta 
    // conexion db
    let result; // respuesta
    res.json({ 'cod': '1', 'msg': 'tarea actualizada' });
});