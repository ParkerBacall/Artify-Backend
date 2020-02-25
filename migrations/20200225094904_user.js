
exports.up = function(knex) {
    return knex.schema.createTable("user", t =>{
        t.increments()
        t.string("full_name")
        t.string("email")
        t.string("password_digest")
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user")
};
