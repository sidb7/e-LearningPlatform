import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { User } from "../database/models/userModel"
import jwt from "jsonwebtoken"
import { generateAccessToken, generateRefreshToken } from "../utlis/tokens"
import catchAsync from "../utlis/catchAsync"
const registerUser = catchAsync(async (req: Request, res: Response) => {
  
        const { username, email, password } = req.body


        if (!username || !email || !password) {
            throw new Error("All fields are required")
        }
        const existingUser = await User.findOne({ email })
        const existingUsername = await User.findOne({ username })
        if (existingUser) {
            throw new Error("User already exists")
        }
        if (existingUsername) {
            throw new Error("Username is already taken")
        }
        const hashedPassword = await bcrypt.hash(password, 8)
        const newUser = new User({
            user_name: username,
            email,
            password: hashedPassword,
        });
        await newUser.save()
        res.json({status:true,message:`${username} registered successfully`})
   
}
);

const loginUser = catchAsync( async (req: Request, res: Response) => {
    const {password, email } = req.body

        console.log(email," ",password)
        const userData = await User.findOne({ email: email })
        if (!userData) {
            throw Error("User doesn't exist")
        }
        const isPasswordValid = await bcrypt.compare(password, userData.password)
        console.log(isPasswordValid, "VERIFIED", password)
        if (!isPasswordValid) {
            throw Error("Email / password entered is incorrect.")
        }
        console.log(userData,"USERDADA")
        const user_id = userData._id.toString()
       
        const accessToken = generateAccessToken(user_id);
        const refreshToken = generateRefreshToken(user_id);
        res.status(200).json({ accessToken, refreshToken })

    

})


const refreshToken = (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.body
        if (!refreshToken) {
            throw Error("Invalid refresh token")
        }
        const verifyRefreshToken: any = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
        
        const username = verifyRefreshToken.username
        const accessToken = generateAccessToken(username)
        res.status(200).send({ accessToken })
    }catch(err) {
        res.status(400).send(err.message)
    }

}

export { registerUser, loginUser, refreshToken }