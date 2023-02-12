

const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('welcome to about us page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>we can't find the page that you are looking for!</p>
    <a href='/'>Back home</a>
    `)
   
})

server.listen(5000)