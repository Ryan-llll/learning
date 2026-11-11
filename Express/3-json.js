const express = require('express')
const app = express()

const {products} = require('./products')

app.get('/',(req,res)=>{
    res.json(products)
})

app.get('/*splat',(req,res)=>{
    //nthg here
})

app.listen(126)
