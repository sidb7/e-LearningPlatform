import app from "../../app"
import express from 'express'
import { userProfile } from "../controllers/userController"
import verifyToken from "../middlewares/verifyToken"

const userRouter = express.Router()

userRouter.get("/profile", verifyToken(), userProfile)

export { userRouter }