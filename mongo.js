const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

// establish connection to the database
const url =
  `mongodb+srv://chuclinh190305:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)

mongoose.connect(url)

// define the schema for a note and the matching model 
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// create a new note
const note = new Note({
  content: 'HTML is easy',
  important: true,
})

// save the object to the database
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close() // close the database connection
})
