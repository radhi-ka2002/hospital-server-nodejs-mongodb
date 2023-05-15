const express=require('express')
const cookieParser=require('cookie-parser')  
const cors =require('cors')
const dotEnv=require('dotenv')
const dbConnect = require('./config/db')
const {userRouter} = require('./routes')
const { globlErrorHandler } = require('./errorHandlers/globalErrorHandler')


//dotenv config
dotEnv.config()


const app=express()
// here we are  connecting database

dbConnect()


app.use(cookieParser())
//routes
app.use("/api/v1/user",userRouter)

//base test api
app.get('/home',(req, res) => {
    res.status(200).send({messgae:'welcome to our first application'})
})

//global error handling
app.use((error,req,res,next)=>globlErrorHandler(error,req,res,next))
//app sever listening
app.listen(8080, () => {
    console.log(`server is up and running on the port : ${8080}`)
})