module.exports = (app,connection) => {
    app.get('/get_tareas', async (req,res) => {
        connection.query(`select * from TAREA`,function (err, rows, fields) {
            if (!err) {
                res.send(rows)
            }
            else {
                throw err;
            }
        });
    });
}