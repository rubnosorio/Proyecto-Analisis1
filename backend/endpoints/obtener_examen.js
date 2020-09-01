module.exports = (app,connection) => {
    app.get('/get_examenes', async (req,res) => {
        connection.query(`select * from EXAMEN`,function (err, rows, fields) {
            if (!err) {
                res.send(rows)
            }
            else {
                throw err;
            }
        });
    });
}