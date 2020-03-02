const Knex = require('knex')
const config = require("../knexfile")[process.env.NODE_ENV || "development"]

const { Model } = require('objection')

const knexConnection = Knex(config)

Model.knex(knexConnection)

class Genre extends Model {
    static get tableName () {
      return 'genre'
    }
  
    static get relationMappings () {
      return {
        User: {
          relation: Model.BelongsToOneRelation,
          modelClass: User,
          join: {
            from: 'genre.ideas_id',
            to: 'user.id'
          }
        }
      }
    }
  }

  class User extends Model {
    static get tableName () {
      return 'user'
    }
  
    static get relationMappings () {
      return {
        genre: {
          relation: Model.HasManyRelation,
          modelClass: Genre,
          join: {
            from: 'user.id',
            to: 'genre.user_id'
          }
        }
      }
    }
  }

  module.exports = { User, Genre }
