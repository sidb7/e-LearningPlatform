import https from "https"
import app from "./app"
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
dotenv.config()
const port  = process.env.PORT

const keyPath = path.join(__dirname,"cert",'private.pem')
const certPath = path.join(__dirname,"cert","certificate.pem")

const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
}

https.createServer(options,app).listen(port,()=>{
    console.log(`Server running on port ${port}`)
})