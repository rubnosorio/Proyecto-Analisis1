module.exports = (app,connection) => {
    //var a = require('./examen.json');
    app.get('/nota_estudiantes', (req, res) => {
        var id_clase = req.body.id_clase;

        connection.query(`select distinct CLASE.nombre_clase, TAREA.id_tarea, TAREA.nombre_tarea, ENTREGA_TAREA.nota, USUARIO.id_usuario, USUARIO.nombres, USUARIO.apellidos
        from CLASE, TAREA, ENTREGA_TAREA, USUARIO_CLASE, USUARIO
        where TAREA.id_clase=CLASE.id_clase and
        CLASE.id_clase=${parseInt(id_clase)} and
        TAREA.id_tarea=ENTREGA_TAREA.id_tarea and
        USUARIO_CLASE.id_usuario= ENTREGA_TAREA.id_usuario and
        USUARIO.id_usuario=USUARIO_CLASE.id_usuario`, function (err, rows, fields) {
            //console.log(err);
            if (!err) {
                //console.log(rows);
                var response={
                    lista_notas:[]
                };
                //buscamos nombres diferentes y los guardamos en una lista auxiliar
                var lista_nombres=[];
                for(let i=0;i<rows.length;i++){
                    var estudiante={
                        id_estudiante:rows[i].id_usuario,
                        nombres: rows[i].nombres,
                        apellidos:rows[i].apellidos
                    }
                    if(i==0){
                        lista_nombres.push(estudiante);
                    }
                    else{
                        var existe=false;
                        for(let j=0;j<lista_nombres.length;j++){
                            if(lista_nombres[j].id_estudiante==estudiante.id_estudiante){
                                existe=true
                                break;
                            }
                        }
                        if(existe==false){
                            lista_nombres.push(estudiante);
                        }
                    }
                }
                //lista para almacenar a los estudiantes con sus notas
                var lista_notas=[];
                //buscamos las notas de las tareas y examenes de los estudiantes y los insertamos
                for(let i=0;i<lista_nombres.length;i++){
                    var estudiante_notas={
                        id_estudiante:lista_nombres[i].id_estudiante,
                        nombres:lista_nombres[i].nombres,
                        apellidos:lista_nombres[i].apellidos,
                        lista_tareas:[],
                        lista_examenes:[]
                    }
                    //buscamos las notas de tareas dentro del resultado
                    for(let j=0;j<rows.length;j++){
                        if(rows[j].id_usuario==estudiante_notas.id_estudiante){
                            var tarea={
                                id_tarea:rows[j].id_tarea,
                                tarea:rows[j].nombre_tarea,
                                nota:rows[j].nota
                            }
                            estudiante_notas.lista_tareas.push(tarea);
                        }
                    }
                    lista_notas.push(estudiante_notas);
                }
                //console.log(lista_notas[0].lista_tareas[1]);
                response.lista_notas=lista_notas;
                res.status(200).send(response);
            }
            else {
                res.status(404).send("404 clase no creada")
            }
        });
    })
}