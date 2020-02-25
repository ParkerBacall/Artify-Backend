app.post("/users", (request, response) =>{
    bcrypt.hash(request.body.password, 10)
        .then(hashedPassword => {
            return database("user").insert({
                username: request.body.username,
                password_digest: hashedPassword,
            }).returning(["id", "username", "password_digest"])
        }).then(users => {
         response.json(users[0])
    })
})