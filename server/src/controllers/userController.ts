
import { Request,Response } from 'express'

const userProfile = (req:Request,res:Response)=>{
    const username = req.query
    res.status(200).json({username})
}

export {userProfile}    