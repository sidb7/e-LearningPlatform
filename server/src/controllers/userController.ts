
import { Request,Response } from 'express'

const userProfile = (req:Request,res:Response)=>{
    const {token} = req.body
    res.status(200).json({token})
}

export {userProfile}