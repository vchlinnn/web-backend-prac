// express: a function used to create an Express application stored in the app variable
const express = require('express') 
const app = express()

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

// Two routes to the application

// An event handler that handles HTTP GET requests made to the root
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

// An event handler that handles HTTP GET requests made to the notes path
app.get('/api/notes', (request, response) => {
  response.json(notes) // send the notes array as a JSON formatted string
})

// a route for fetching a single resource
app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id
  const note = notes.find(note => note.id === id)

  if (note) {
    response.json(note)
  } else { // if no note is found
    response.status(404).end()
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
