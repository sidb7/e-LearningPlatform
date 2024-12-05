import mongoose, { Schema } from "mongoose";
import toJSON from 'mongoose'
interface IUser extends Document {
    user_name: string,
    email: string,
    password: string,
    user_id:mongoose.Schema.Types.ObjectId

}

const userSchema: Schema<IUser> = new Schema ({
    user_name:{
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId
    }
})

const User  =  mongoose.model<IUser>("users",userSchema)    

export {User}