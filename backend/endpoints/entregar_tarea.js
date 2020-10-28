module.exports = (app, s3, connection) => {
    app.post('/entregar_tarea', (req, res) => {
        var base64String = req.body.archivo;
        var id_usuario = req.body.id_usuario;
        var id_clase = req.body.id_clase;
        var id_tarea = req.body.id_tarea;
        var nombre_tarea = req.body.nombre;
        var base64;
        var extension;
        var decoded = ""; //variable que recibira el archivo decodificado, si no viene unicamente se creará la carpeta en S3
        var filename = "";
        var status = {
            statusCode: 200
        }
        if (base64String != "") {
            extension = base64String.substring(base64String.indexOf('/') + 1, base64String.indexOf(';base64')); //obtiene la información de la extension a partir del header
            base64 = base64String.split(","); //separamos el header del codigo en base64
            decoded = Buffer.from(base64[1], 'base64');
            filename = nombre_tarea;
            //realizamos una consulta para obtener el nombre de la clase y el nombre de la tarea que fue creada por el profesor
            //para insertar la tarea en el directorio de la forma nombrclase/nombretarea/nombrearchivi.extension
            connection.query(`select (select nombre_clase FROM CLASE where id_clase=${parseInt(id_clase)}) as clase, (select nombre_tarea FROM TAREA where id_tarea=${parseInt(id_tarea)}) as tarea`, function (err, rows, fields) {
                if (!err) {
                    var clase = id_clase;
                    var tarea = rows[0].tarea;
                    const bucketname = 'proyectoanalisis1';
                    const folder = `${clase}/${tarea}/`;
                    const filepath = `${folder}${filename}`;
                    let uploadParamsS3 = {
                        Bucket: bucketname,
                        Key: filepath,
                        Body: decoded,
                        ACL: 'public-read',
                    };
                    s3.upload(uploadParamsS3, (err, data) => {
                        if (err) {
                            status.statusCode=404;
                            res.status(404).send(status);
                        }
                        else{
                            //ahora insertamos la tarea que el estudiante entrega
                            var url_archivo=data.Location;
                            connection.query(`insert into ENTREGA_TAREA(id_usuario,id_clase,id_tarea,url_tarea,nombre) 
                            values (${parseInt(id_usuario)},${parseInt(id_clase)},${parseInt(id_tarea)},'${url_archivo}','${nombre_tarea}')`, function (err2, rows2, fields2) {
                                if (!err2) {
                                    res.status(200).send(status)
                                }
                                else {
                                    status.statusCode = 404;
                                    res.status(404).send(status)
                                }
                            });
                        }
                    });
                }
                else {
                    status.statusCode = 404;
                    res.staus(404).send(status)
                }
            });
        }
        else {
            status.statusCode = 404;
            res.staus(404).send(status)
        }
    });
}