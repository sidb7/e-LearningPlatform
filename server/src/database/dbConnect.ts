import mongoose from 'mongoose'

const dbConnect = async () =>{

    try{
        const mongoUri = process.env.MONGOURI
        const dbconnection = await mongoose.connect(mongoUri)
        console.log("DATABASE CONNECTED SUCCESSFULLY")
    }catch(err){
        console.log("ERROR CONNECTING DB")
    }

    
    

}
export default dbConnect