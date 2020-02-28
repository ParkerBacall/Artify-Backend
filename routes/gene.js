const express = require("express")
const router = express()
const queries = require('../db/queries')

router.get('/genes', (request, response) => {
    queries.gene.listAll().then(genes =>  response.send(genes))
})

  module.exports = router
