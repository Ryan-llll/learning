const express = require('express')
const app = express()

const {products} = require('./products')

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href = "/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newproducts = products.map((products)=>{
        const {id, name, price} = products
        return {id, name, price}
    })
    return res.json(newproducts)
})


app.get('/api/products/:productId',(req,res)=>{
    const {productId} = req.params
    const singleproduct = products.find(
        (products) => String(products.id) === productId)
    if (!singleproduct){
        return res.status(404).send('product not found')
    }    
    return res.send(singleproduct)
})


app.get('/api/v1/query',(req,res)=>{
    const {search, limit} = req.query
    let sortedproducts = [...products]

    if (search) {
        sortedproducts = sortedproducts.filter((products)=>{
            return products.name.startsWith(search)
        })
    }
    if (limit) {
        sortedproducts = sortedproducts.slice(0, Number(limit))
    }
    if (sortedproducts.length < 1) {
        return res.status(200).json({success : true, data: []})
    }
    return res.json(sortedproducts)
})

app.listen(56)