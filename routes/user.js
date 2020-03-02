const express = require('express')
const router = express.Router()
const queries = require('../db/queries')
const jwt =require('jsonwebtoken')
const SECRET = "fuckboi"

const { User } = require('../models/schema')



router.get("/users",  (request, response) =>{
    if(!request.headers.authorization){
        response.status(401).json({message: "fuckass"})
    }else{
        const token = request.headers.authorization.split(" ")[1]
        jwt.verify(token, SECRET, async (error, decodedToken)=>{
            const user = decodedToken
            const genes = await User.relatedQuery('genre')
            .for(user)
            console.log(genes)
            response.send(decodedToken)
        })
    }
})

router.post("/users", (request, response) =>{
    queries.user.create(request.body)
    .then(user => jwt.sign(user, SECRET, (error, token) => {
        response.status(200).json({ token })}))
})

module.exports = router
