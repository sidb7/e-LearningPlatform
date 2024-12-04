import express from "express"
import https from "https"
import fs from "fs"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
const app = express()

dotenv.config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const keyPath = path.join(__dirname,"cert","key.pem")
const certPath = path.join(__dirname,"cert","cert.pem")
let options = {
    key: fs.readFileSync(keyPath),
    cert:fs.readFileSync(certPath)
}

app.get("/",(req,res)=>{
    res.send("HI FROM SERVER 3000")
})


const port = process.env.PORT

https.createServer(options,app).listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})