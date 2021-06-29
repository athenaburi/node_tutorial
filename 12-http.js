const http = require('http')

const server = http.createServer((req, res) =>
{
    if (req.url === '/'){
        res.end('Welcome to the new home page')
    }
    else if (req.url === '/about'){
        res.end('This is the link to about')
    }
    else {res.end(`<h1> No page here </h1>
    <a href="/">back home</a>`)}
}
)

server.listen(5000)
    


