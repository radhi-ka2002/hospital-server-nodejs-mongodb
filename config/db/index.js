const mangoose=require('mongoose')

const dbConnect = async()=>{
try{
    const connect =await mangoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,

    })
    console.info('mongodb is connected and running');
    
}catch (error){
    console.error('mongodb connection failed',process.env.MONGO_URI,error);
}
}
module.exports=dbConnect
