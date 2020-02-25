const PORT = process.env.PORT || 9001
const express = require('express')
const app = express()
const database = require("./database_connection")
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const SECRET = "fuckboi"
app.use(bodyParser.json())
app.use(cors())

app.listen(PORT)


app.post("/users", (request, response) =>{
    bcrypt.hash(request.body.password, 10)
        .then(hashedPassword => {
            return database("user").insert({
                full_name: request.body.full_name,
                email: request.body.email,
                password_digest: hashedPassword,
            }).returning(["id", "full_name", "email", "password_digest"])
        }).then(users => {
         response.json(users[0])
    })
})

app.post("/login", (request, response) => {
    database("user")
    .where({email: request.body.email})
    .first()
    .then(user => {
        if (!user){
            response.status(401).json({error: "no user with that email"})
        }else{
            return bcrypt
            .compare(request.body.password, user.password_digest)
            .then(isAuthenticated => {
                if (!isAuthenticated){
                    response.status(401).json({error: "invalid credentials"})
                }else{
                jwt.sign(user, SECRET, (error, token) => {
                    response.status(200).json({ token })
                })
            }
            })
        }
    })
})