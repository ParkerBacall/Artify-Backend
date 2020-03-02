exports.up = function(knex) {
    return knex.schema.createTable("genre", t =>{
        t.increments(),
        t.string('name'),
        t.string('artists')
        t.string('artworks')
        t.integer('user_id').references('user.id')
        
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("genre");
};