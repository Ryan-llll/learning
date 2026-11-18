require('dotenv/config')
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { verify } = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')

const app = express()

app.use(cookieParser())
app.use(cors({
    origin : 'http://localhost:3000',
    credentials : true,
}))


app.use(express.json())
app.use(express.urlencoded({extrended :true }))


app.listen(process.env.PORT ,()=>
    console.log(`server listenning on port ${process.env.PORT}`)
)


