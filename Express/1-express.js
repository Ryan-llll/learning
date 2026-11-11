const express = require('express')

const app = express()

app.get('/',(req,res)=> {
    res.status(200).send('hilo')
})


app.get('/about',(req,res)=> {
    res.status(200).send('abt page')
})

app.all('/*splat', (req,res)=> {
    res.status(404).send('<h1>page not found</h1><a href = "/">return</a>')
})

app.listen(9000
)