import { NextFunction, Request, Response } from "express";



const errorHandler = (err:any,req:Request,res:Response,next: NextFunction)=>{
    console.error(err.stack,"STACKKKK")
    res.status(err.status || 500).json({
        status: false,
        message : err.message || "Internal Server Error"
    })
}

export default errorHandler