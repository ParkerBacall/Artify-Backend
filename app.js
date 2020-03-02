const PORT = process.env.PORT || 9001
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const user = require('./routes/user')
const login = require('./routes/login')
const artist = require('./routes/artist')
const genre = require('./routes/genre')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.listen(PORT)

app.use(user)
app.use(login)
app.use(artist)
app.use(genre)

