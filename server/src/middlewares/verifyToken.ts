import { Request,Response,NextFunction } from "express"
import jwt from "jsonwebtoken"

const verifyToken = ()=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        const token = req.headers["authorization"]
        if(!token){ throw Error("Access denied")}
        const isVerified:any = jwt.verify(token.split(" ")[1],process.env.JWT_ACCESS_SECRET)
        if(!isVerified) { throw Error("Invalid token")}
  
        req.query =  isVerified.username
        next()
    }
}

export default verifyToken
