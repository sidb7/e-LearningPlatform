import app from "../../app"
import express from 'express'
import { userProfile } from "../controllers/userController"

const userRouter = express.Router()

userRouter.post("/profile",userProfile)

export  {userRouter}