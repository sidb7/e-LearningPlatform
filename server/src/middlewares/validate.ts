import joi from 'joi'
import { Request,Response,NextFunction } from 'express'

const validate = (schema:joi.ObjectSchema) :any =>{
    return (req:Request,res:Response,next:NextFunction)=>{
        const {error} = schema.validate(req.body,{abortEarly:false})

        if(error){
            return res.status(400).json({
                message: "Validation error",
                details: error.details.map((detail)=>detail.message)
            })
        }
        next()
    }

}

export default validate