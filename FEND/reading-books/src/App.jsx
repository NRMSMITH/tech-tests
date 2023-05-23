import { useState } from 'react'
import './App.css'
import {getBooks} from './utils/api'
import {BookCard} from './components/BookCard'

function App() {
  const [books, setBooks] = useState([])

  const displayBooks = () => {
      getBooks()
      .then((res) => {
        setBooks(res)
      })
  }

  return (
    <>
    <h1>Get Reading</h1>
    <button className="button" onClick={(e) => displayBooks()}>Books</button>
    <section>
      {books ? books.map((book) => {
        return <BookCard key={book.book_id} book={book}/>
      }) : <> </>
      }
    </section>
    <button className="button">Bookshops</button>
    </>
  )
}

export default App

//axios.get 
