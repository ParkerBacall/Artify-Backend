// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/art_db'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
  }
};
