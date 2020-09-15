module.exports = (app,connection) => {
    app.post('/lista_actividades', async (req,res) => {
        res.status(200).send(true);
    });
}