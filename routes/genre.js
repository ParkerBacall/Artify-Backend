const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.post("/genres", (request, response) => {
    queries.genre.create(request.body).then(genre => response.send(genre))
}
)
router.delete("/genres", (request, response) => {
    queries.genre.delete(request.body)
    .then(genre => response.send(genre))
})

module.exports = router