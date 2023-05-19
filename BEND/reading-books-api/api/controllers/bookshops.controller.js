const {selectBookshops} = require('../models/bookshops.model')
exports.getBookshops = (req, res, next) => {
    selectBookshops()
    .then((bookshops) => {
        res.status(200).send({bookshops})
    })
}