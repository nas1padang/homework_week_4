// express
const express = require('express')
const app = express()
const PORT = 1999

// penerapan router untuk film dan categorinya
const film = require('./film')
const filmCategory = require('./filmCategory')

// middleware
app.use('/film', film);
app.use('/category', filmCategory);

// menjalankan express
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})