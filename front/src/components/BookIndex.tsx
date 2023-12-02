import React from "react";

interface Book {
  id?: number;
  title: string;
  body: string;
}

interface BookIndexProps {
  book: Book;
  setBook: React.Dispatch<React.SetStateAction<Book>>;

  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

const BookIndex: React.FC<BookIndexProps> = ({
  book,
  setBook,
  books,
  setBooks,
}) => {
  return (
    <div>
      <h1>Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.body}</td>
              <td>
                <button>Show</button>
              </td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookIndex;
