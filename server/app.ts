import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
import dbConnect from './src/database/dbConnect'
import { userRouter } from "./src/routes/userRoutes"
import {authRouter} from './src/routes/authRoutes'
import errorHandler from "./src/middlewares/errorHandler"
import bodyParser from "body-parser"
import { courseRouter } from "./src/routes/courseRoutes"
import { paymentRouter } from "./src/routes/paymentRoutes"
const app = express()

dotenv.config()
app.use(express.json())

app.use(cors({
    origin:"*",
    methods:['GET','POST','PUT','DELETE'],
    credentials: true 
}))

dbConnect()

app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("HI FROM SERVER 3000")
})
app.use('/auth',authRouter)
app.use('/user',userRouter)
app.use('/course',courseRouter)
app.use("/order",paymentRouter)



app.use(errorHandler)
export default app