const express = require('express')
const router = express.Router()
const queries = require('../db/queries')
const jwt =require('jsonwebtoken')
const SECRET = "fuckboi"

const { User, Artist } = require('../models/schema')



router.get("/users",  (request, response) =>{
    if(!request.headers.authorization){
        response.status(401).json({message: "fuckass"})
    }else{
        const token = request.headers.authorization.split(" ")[1]
        jwt.verify(token, SECRET, async (error, decodedToken)=>{
            const user = await User.query()
            .withGraphFetched('artists')
            .withGraphFetched('genre')
            .where('user.id', decodedToken.id)
            response.send(user[0])
        })
    }
})

router.post("/users", (request, response) =>{
    queries.user.create(request.body)
    .then(user => jwt.sign(user, SECRET, (error, token) => {
        response.status(200).json({ token })}))
})

module.exports = router
