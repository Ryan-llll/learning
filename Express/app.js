const express = require('express')
const app = express()
const router = require('./router')


app.use(express.json())

app.use('/api/people',router)

app.listen(506) 