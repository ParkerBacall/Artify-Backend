const express = require('express')
const router = express.Router()
const queries = require('../db/queries')
const jwt =require('jsonwebtoken')
const SECRET = "fuckboi" || process.env['SECRET_KEY_BASE']

const { User } = require('../models/schema')



router.get("/users",  (request, response) =>{
    if(!request.headers.authorization){
        response.status(401).json({message: "You are not authorized to view this data"})
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
    .then(user => {
        if (user.email !== '' && user.full_name !== '' && user.password !== ''){
        jwt.sign(user, SECRET, (error, token) => {
        response.status(200).json({ token })})
        } else{
            response.status(401).json({error: "Please fill out all the fields"})
        }
        })
})

module.exports = router
