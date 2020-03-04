
exports.up = function(knex) {
    return knex.schema.createTable("artists", t =>{
        t.increments(),
        t.string('name'),
        t.string('similar_artists')
        t.string('similar_contemporary_artists')
        t.string('artworks')
        t.integer('user_id').references('user.id')
        
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("artists");
};
