const http = require('http');
const { url } = require('inspector');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end("here is our short history");
    }
    res.end(`
        <h1>Oops!!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
    `)
})
server.listen(5000); //set what port our server is going to be listening to!!