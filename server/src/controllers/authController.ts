import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { User } from "../database/models/userModel"
import jwt from "jsonwebtoken"
import { generateAccessToken, generateRefreshToken } from "../utlis/tokens"
const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body


        if (!username || !email || !password) {
            throw new Error("All fields are required")
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            throw new Error("User already exists")
        }
        const hashedPassword = await bcrypt.hash(password, 8)
        const newUser = new User({
            user_name: username,
            email,
            password: hashedPassword,
        });
        await newUser.save()
        res.send(`${username} is registered successfully`)
    } catch (err) {
        console.log("Error registering the user", err.message)
        res.status(400).json({ "message": err.message })
    }
}


const loginUser = async (req: Request, res: Response) => {
    const { username, password, email } = req.body

    try {
        console.log(email," ",password)
        const userData = await User.findOne({ email: email })
        if (!userData) {
            throw Error("User doesn't exist")
        }
        const isPasswordValid = await bcrypt.compare(password, userData.password)
        console.log(isPasswordValid, "VERIFIED", password)
        if (!isPasswordValid) {
            throw Error("Invalid Credentials")
        }
        const accessToken = generateAccessToken(username)
        const refreshToken = generateRefreshToken(username)
        res.status(200).json({ accessToken, refreshToken })

    } catch (err) {
        console.log("ERROR",err.message)
        res.status(400).json(err.message)
    }

}


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