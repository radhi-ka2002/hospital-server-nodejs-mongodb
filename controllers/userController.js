const { response } = require('express');
const { userModel } = require('../models');
const { responseSuccess } = require('../utils/response');


const fetchUsers= async (req,res,next) => {
    try{
      
     const userList= await userModel.find({});

     if(userList.length)
      return responseSuccess(res,200,userList,'Fetched the user data')
     
        return responseSuccess(res,204,userList,"users not found")

     return responseSuccess(res,200,userList,'Fetched the users data')
    }catch (error){
      next(error)

    }
}
module.exports = { fetchUsers }