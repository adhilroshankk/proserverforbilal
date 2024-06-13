require('dotenv').config()
// create server using express 
// cors - connect with front end
// port set - listen
const express=require('express')

const ServerApp=express()

const cors=require('cors')
const router = require('./Routes/routes')
ServerApp.use(cors())
require('./db/connection')

ServerApp.use(express.json())
ServerApp.use(router)

const PORT=8005 || process.env.PORT

ServerApp.listen(PORT,()=>{
    console.log(`------------server started`);
})
ServerApp.get('/',(req,res)=>{
    res.json(' get requested recieved')
})

ServerApp.post('/postexc',(req,res)=>{
    res.send(`----post rqstd------${req.body.username}`)
})

ServerApp.get('/getexc',(req,res)=>{
    res.send('get rqstd')
})



