import axios from 'axios';

const API = axios.create({
    baseURL: `https://reading-books-api.onrender.com/api`
})

export const getBooks = () => {
    return API
    .get('/books')
    .then((res) => {
        return res.data.books;
    })
}