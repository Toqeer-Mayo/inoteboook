const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 3000

// Available Routes
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes'))
app.use('/', require('./routes/home'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})