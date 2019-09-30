// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port: 3307,
    database: 'graphql_exercises',
    user:     'root',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'migrations'
  }
};
