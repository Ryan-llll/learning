const http = require('http')
const {readFileSync} = require('fs')

const homepage = readFileSync('./index.html')

const server = http.createServer((req,res)=>{
    const url = req.url
    if (url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(homepage)
    }else if (url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(`
        <h1>About page</h1>`)
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end(`
        <h1>Page not found</h1>
        <a href="/">back home</a>`)
    }

})

server.listen(3000)