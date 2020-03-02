const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

const { Genre } = require('../models/schema')

router.post("/genres", (request, response) => {
    queries.genre.create(request.body).then(genre => response.send(genre))
})

module.exports = router