module.exports = (app,connection) => {
    app.post('/update_examen',(req,res) => {
        var status={
            statusCode:200
        } 
        connection.query(`select * from EXAMEN`,function (err, rows, fields) {
            if (!err) {
                res.send(status);
            }
            else {
                status.statusCode=404;
                res.send(status);
            }
        });
    });
}