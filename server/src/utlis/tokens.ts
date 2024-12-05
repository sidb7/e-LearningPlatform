import jwt from 'jsonwebtoken'

const generateAccessToken =(username:String)=>{
    const token = jwt.sign({username},process.env.JWT_ACCESS_SECRET,{expiresIn:'15m'})
    return token
}

const generateRefreshToken = (username:String)=>{
    const refreshToken = jwt.sign({username},process.env.JWT_REFRESH_SECRET)
    return refreshToken
}

export {generateAccessToken,generateRefreshToken}