
import { Request,Response } from 'express'

const userProfile = (req:Request,res:Response)=>{
    const user_id = req.query
    res.status(200).json({ user_id });
}

export {userProfile}    