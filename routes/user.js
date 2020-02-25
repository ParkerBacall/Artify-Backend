const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.post("/users", (request, response) =>{
    queries.user.create(request.body)
    .then(results => response.send(results))
    .then(response.status(201))
    
})

module.exports = router
