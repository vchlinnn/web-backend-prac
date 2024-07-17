// import node's built in web server module - import http from 'http'
const http = require('http')

// create a new web server
const app = http.createServer((request, response) => {
    // event handler - called everytime an HTTP request is made 
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})

// listen to HTTP requests sent to port 3001
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
