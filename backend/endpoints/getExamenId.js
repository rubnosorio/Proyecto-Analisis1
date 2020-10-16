module.exports = (app, connection) => {
    app.get('/get_exam_id/:id', (req, res) => {
        if (req.params.id < 0) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({});
        }
        else if (req.params.id == undefined || req.params.id == '') {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({err:'err'});
        }
        else {
            connection.query(`select * from EXAMEN where id_examen = ${req.params.id}`, function (err, rows, fields) {
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