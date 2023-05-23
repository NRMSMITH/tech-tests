
export const BookCard = ({book}) => {
    return (
        <section>
        <h2 id="bookname">{book.book_name}</h2>
        <h3 id="bookwriter">{book.book_writer}</h3>
        </section>
    )
}