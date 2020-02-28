
exports.up = function(knex) {
    return knex.schema.createTable("gene", t =>{
        t.increments()
        t.string("name")
        t.string("image")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("gene")
};
