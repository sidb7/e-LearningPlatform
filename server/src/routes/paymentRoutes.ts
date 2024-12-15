import express from "express";
import { createRazorpayOrder, verifyRazorpayPayment } from "../controllers/paymentController";
import verifyToken from "../middlewares/verifyToken";



const paymentRouter = express.Router()


paymentRouter.post("/create-order",verifyToken(),createRazorpayOrder)
paymentRouter.post("/verify-payment",verifyToken(),verifyRazorpayPayment)


export {paymentRouter};