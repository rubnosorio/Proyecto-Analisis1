module.exports = (app, s3, connection) => {
    app.post('/entregar_tarea', (req, res) => {
        //codigo de entregar tarea
        res.send("funcionando");
    });
}