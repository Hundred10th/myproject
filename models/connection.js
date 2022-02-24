var pg = require('pg');
const { ssl } = require('pg/lib/defaults');

const connectionString = process.env.DATABASE_URL
const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    ssl:{
        require: true,
        rejectUnauthorized: false
    }
})

module.exports = pool;