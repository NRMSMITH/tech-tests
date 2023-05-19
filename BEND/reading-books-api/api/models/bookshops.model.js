const db = require('../../db/connection')

exports.selectBookshops = () => {
    return db.query(`SELECT * FROM bookshops;`)
    .then((bookshops) => {
        return bookshops.rows
    })
}