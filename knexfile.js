// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///art_db'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
  }
};
