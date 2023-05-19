const {Pool} = require('pg');
const ENV = process.env.NODE_ENV || 'development';

if(!process.env.PGDATABASE && !process.env.DATABASE_URL) {
    throw new Error('PGDATABASE or DATABASE_URL not set')
}

const config = 
ENV === 'production'
? {
    connectionString: process.env.DATABASE_URL,
    max: 2
}
: {};

const pool = new Pool();

module.exports = pool;