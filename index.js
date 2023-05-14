const express=require('express')
const cookieParser=require('cookie-parser')  
const cors =require('cors')
const dotEnv=require('dotenv')
const dbConnect = require('./config/db')

dotEnv.config()


const app=express()
// here we are  connecting database

dbConnect()

app.get('/home',(req, res) => {
    res.status(200).send({messgae:'welcome to our first application'})
})

app.listen(8080, () => {
    console.log(`server is up and running on the port : ${8080}`)
})