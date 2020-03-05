const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get("/artists", (request, response) => {
    response.send("hey")
})

router.post("/artists", (request, response) => {
    queries.artists.create(request.body).then(artist => response.send(artist))
}
)
router.delete("/artists", (request, response) => {
    queries.artists.delete(request.body)
    .then(artist => response.send(artist))
})

module.exports = router