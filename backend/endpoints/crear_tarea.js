module.exports = (app, mysql,s3) => {
    app.post('/crear_tarea', (req, res) => {
        //let decoded = Buffer.from(req.body.imagen, 'base64');
        let uploadParamsS3 = {
            Bucket: "proyectoanalisis1",
            Key: "clase2/",
            Body: "",
            ACL: 'public-read',
        };
        s3.upload(uploadParamsS3, (err, data) => {
            if (err) {
                return false;
            }
        });
        res.send("esta es una prueba de tarea creada");
    });
}