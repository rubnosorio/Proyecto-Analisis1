module.exports=(app,connection)=>{

    app.get('/crear_usuario',(req,res)=>{
        res.status(200).send()
    })

    app.post('/crear_usuario',(req,res)=>{
        userss = req.body.users
        userss.push(req.body.usuario)
        //console.log(users)
        res.status(200).send({usuario: req.body.usuario, users: userss})
    })
}