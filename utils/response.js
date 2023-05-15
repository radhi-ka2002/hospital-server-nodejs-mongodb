const responseSuccess=(res,status,data,message)=>{
    return res.status(status).send({
        success:true,
        data,
        message,
    })
}
const responseError=(res,status,data,message)=>{
    return res.status(status).send({
        success:false,
        data:console.error,
        message,
    })
}
module.exports={
    responseSuccess,
    responseError,
}