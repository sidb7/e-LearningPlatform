import express from "express"

import dotenv from "dotenv"
import dbConnect from './src/database/dbConnect'
import { userRouter } from "./src/routes/userRoutes"
import {authRouter} from './src/routes/authRoutes'
const app = express()

dotenv.config()
app.use(express.json())
dbConnect()


app.get("/", (req, res) => {
    res.send("HI FROM SERVER 3000")
})
app.use('/auth',authRouter)
app.use('/user',userRouter)

export default app