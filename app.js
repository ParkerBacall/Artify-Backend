const PORT = process.env.PORT || 9001
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const user = require('./routes/user')
const login = require('./routes/login')
const gene = require('./routes/gene')
const artist = require('./routes/artist')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.listen(PORT)

app.use(user)
app.use(login)
app.use(gene)
app.use(artist)

