const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.post('/login', (request, response) =>{
    queries.login.post(request, response)
})

module.exports = router
