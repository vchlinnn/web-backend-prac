// import node's built in web server module - import http from 'http'
const http = require('http')

/*create a new web server
const app = http.createServer((request, response) => {
    // event handler - called everytime an HTTP request is made 
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})*/

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]
  // create a new web server
  const app = http.createServer((request, response) => {
    // event handler - called everytime an HTTP request is made
    response.writeHead(200, { 'Content-Type': 'application/json' }) // the data is in json format
    // notes array gets transformed to json format
    response.end(JSON.stringify(notes)) // what is printed on the site
  })  

// listen to HTTP requests sent to port 3001
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
