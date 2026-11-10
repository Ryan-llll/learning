const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const text = fs.readFileSync('./big.txt', 'utf-8');
    res.end(text);
})

.listen(3000)