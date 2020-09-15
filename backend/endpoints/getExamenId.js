module.exports = (app, connection) => {
    app.get('/get_exam_id', (req, res) => {
        if (req.body.id_examen < 0) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({});
        }
        else if (req.body.id_examen == undefined || req.body.id_examen == '') {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({err:'err'});
        }
        else {
            connection.query(`select * from EXAMEN where id_examen = ${req.body.id_examen}`, function (err, rows, fields) {
                if (!err) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(rows);
                }
                else {
                    throw err;
                }
            });
        }
    });
}