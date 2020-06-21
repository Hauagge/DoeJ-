const pg = require('pg')

const client = new pg.Client({
  user: 'postgre',
  host: 'localhost',
  database: 'postgre',
  password: 'postgre',
  port: 5432,
})

module.exports = client
