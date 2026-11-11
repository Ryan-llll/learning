const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./public'))

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index1.html'))
})

app.all('/*splat',(req,res)=>{
    res.status(404).send('nothing here')
})

app.listen(100)