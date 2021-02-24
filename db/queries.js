const database = require('./database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = "18ie912" || process.env['SECRET_KEY_BASE']

module.exports = {
    genre: {
       listAll(){
            return database('genre')
       } ,
       create(input){
        return database('genre')
        .insert(input)
        .returning('*')
       },
       delete(request){
        return database('genre')
          .where({name: request.name, user_id: request.user_id})
          .delete()
          .returning('*')
      },
    },
    artists: {
       listAll(){
            return database('artists')
       } ,
       create(input){
        return database('artists')
        .insert(input)
        .returning('*')
       },
       delete(request){
        return database('artists')
          .where({name: request.name, user_id: request.user_id})
          .delete()
          .returning('*')
        },
    },
    user: {
        create: (user) => {
            return bcrypt.hash(user.password, 10)
            .then(hashedPassword => {
                return database("user")
                .insert({
                    full_name: user.full_name,
                    email: user.email,
                    password_digest: hashedPassword,
                })
                .returning(["id", "full_name", "email", "password_digest"])
            })
            .then(user => user[0])
    },
},
    login: {
            post: (request, response) => {
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
                            return jwt.sign(user, SECRET, (error, token) => {
                                response.status(200).json({ token })
                            })
                        }
                        })
                    }
                })
            }
        }

}