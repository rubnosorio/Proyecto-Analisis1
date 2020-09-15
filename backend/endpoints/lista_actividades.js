module.exports = (app,connection) => {
    app.get('/lista_actividades', async (req,res) => {
        res.statusCode(200).send(true);
    });
}