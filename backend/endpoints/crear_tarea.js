module.exports = (app, mysql, s3, connection) => {
    app.post('/crear_tarea', (req, res) => {
        //variables para información del frontend
        var nombre_tarea = req.body.nombre_tarea;
        var descripcion = req.body.descripcion;
        var fecha_entrega = req.body.fecha_entrega;
        var nombre_clase = req.body.nombre_clase;
        var id_clase = req.body.id_clase;
        var base64String = req.body.archivo; //variable que recibe la información en base64 del archivo
        var base64;
        var extension;
        var decoded=""; //variable que recibira el archivo decodificado, si no viene unicamente se creará la carpeta en S3
        var filename="";
        if(base64String!=""){ //si se envió el archivo lo debemos decodificar
            //variables para uso de base64
            extension = base64String.substring(base64String.indexOf('/') + 1, base64String.indexOf(';base64')); //obtiene la información de la extension a partir del header
            base64 = base64String.split(","); //separamos el header del codigo en base64
            decoded = Buffer.from(base64[1], 'base64');
            filename= "instrucciones"+nombre_tarea+"."+extension;
        }
        //variables para el bucket de S3
        const bucketname = 'proyectoanalisis1';
        const folder = `${nombre_clase}/${nombre_tarea}/`;
        const filepath = `${folder}${filename}`;
        let uploadParamsS3 = {
            Bucket: bucketname,
            Key: filepath,
            Body: decoded,
            ACL: 'public-read',
        };
        s3.upload(uploadParamsS3, (err, data) => {
            if (err) {
                return false;
            }
            else{
                //insertamos en la base de datos la información
                var url_archivo="";
                var status={
                    statusCode:200
                }
                if(filename!=""){
                    url_archivo=data.Location;
                }
                connection.query(`insert into TAREA (nombre_tarea,descripcion,url_directorio,url_archivo_instruccion,fecha_entrega,id_clase)
                values ('${nombre_tarea}','${descripcion}','${folder}','${url_archivo}',STR_TO_DATE(REPLACE('${fecha_entrega}','/','.') ,GET_FORMAT(date,'EUR')),${parseInt(id_clase)})`, function (err, rows, fields) {
                    if (!err) {
                        res.send(status)
                    }
                    else {
                        status.statusCode=404;
                        res.send(status)
                    }
                });
            }
        });
    });
}