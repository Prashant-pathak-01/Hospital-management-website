import mongoose from 'mongoose';
const connection=async()=>{
    const url=process.env.MONGO_DB_URL;
    try{
        await mongoose.connect(url,{useUnifiedTopology:true});
        console.log("Connected");
    }catch(error){
        console.log(error.Message);
    }
}

export default connection;