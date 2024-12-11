import mongoose, { Schema } from "mongoose";

interface ICourse extends Document {
    courseId: mongoose.Schema.Types.ObjectId,
    name : string,
    description : string,
    price: number,
    ratings: number,
    thumbnails:string[],

}

const courseSchema: Schema<ICourse> = new Schema(
    {
        courseId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        ratings:{
            type:Number,
            
        },
        thumbnails:{
            type:[String],
            required:true
        }

    }


)

const Course = mongoose.model<ICourse>("courses",courseSchema)

export {Course}