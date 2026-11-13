const express = require('express')
const app = express()
const logger = require('./logger')

app.use(logger)
app.use('/api/', logger)


app.get('/',(req,res)=>{
    res.send('home')
})

app.get('/about',(req,res)=>{
    res.send('about')
})

app.get('/api/items', logger ,(req,res)=>{
    res.send('home')
})


app.listen(504)