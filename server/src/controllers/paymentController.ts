import { Request, Response } from "express";
import Razorpay from "razorpay";
import catchAsync from "../utlis/catchAsync";
import dotenv from "dotenv";
import crypto from "crypto";
dotenv.config();
const razorpay = new Razorpay({
  key_id: process.env.Razorpay_Key_Id,
  key_secret: process.env.Razorpay_key_Secret,
});

const createRazorpayOrder = catchAsync(async (req: Request, res: Response) => {
  const { amount, reciept } = req.body;
  if (!amount) {
    throw Error("Parameters missing");
  }
  const options = {
    amount: amount * 100,
    currency: "INR",
  };

  const order = await razorpay.orders.create(options);
  if (order) {
    res.status(201).json({ success: true, order });
  }
});

const verifyRazorpayPayment = (req: Request, res: Response) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const generatedSignature = crypto
    .createHmac("sha256", process.env.Razorpay_key_Secret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (generatedSignature == razorpay_signature) {
    res.status(200).json({ success: true, message: "Payment verified" });
  }
  else{
    throw Error("Payment verification failed")
  }
};

export { createRazorpayOrder, verifyRazorpayPayment };
