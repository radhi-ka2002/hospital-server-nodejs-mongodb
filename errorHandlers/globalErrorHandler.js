const { responseError } = require("../utils/response")

const globlErrorHandler=(error,req,res,next)=>{
    return responseError(res,error.status||500,error.message,'something went wrong')
}

module.exports={globlErrorHandler}