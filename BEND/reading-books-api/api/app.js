const express = require('express')
const app = express();

const {getBooks} = require('./controllers/books.controller')
const {getBookshops} = require('./controllers/bookshops.controller')
const {allPathErrors} = require('./controllers/errors.controller')



app.get('/api/books', getBooks)
app.get('/api/bookshops', getBookshops)


app.all('*', allPathErrors)

module.exports = app;