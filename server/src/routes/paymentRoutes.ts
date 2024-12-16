import express from "express";
import { createRazorpayOrder, shoppingCart, verifyRazorpayPayment } from "../controllers/paymentController";
import verifyToken from "../middlewares/verifyToken";



const paymentRouter = express.Router()

paymentRouter.post("/shopping-cart",shoppingCart)
paymentRouter.post("/create-order",createRazorpayOrder)
paymentRouter.post("/verify-payment",verifyRazorpayPayment)



export {paymentRouter};