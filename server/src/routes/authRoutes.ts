import express from 'express'
import { loginUser, refreshToken, registerUser } from '../controllers/authController'
import validate from '../middlewares/validate';
import { registerInputValidate } from '../validations/inputValidations';

const authRouter = express.Router()

authRouter.post("/register", validate(registerInputValidate), registerUser)
authRouter.post("/login",loginUser)
authRouter.post("/refresh_token",refreshToken)


export  {authRouter};