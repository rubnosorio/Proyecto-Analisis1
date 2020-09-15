module.exports=(app,connection)=>{

    var users = []

    app.get('/crear_usuario',(req,res)=>{
        res.status(200).send()
    })

    app.post('/crear_usuario',(req,res)=>{
        console.log(req.body)
        res.status(200).send(req.body)
    })
}