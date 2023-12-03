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

  onShowBookModal: (book: Book) => void;
  onDeleteBook: (id: number) => void;
}

const BookIndex: React.FC<BookIndexProps> = ({
  book,
  setBook,
  books,
  setBooks,
  onShowBookModal,
  onDeleteBook,
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
                <button onClick={() => onShowBookModal(book)}>Show</button>
              </td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button onClick={() => onDeleteBook(book.id!)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookIndex;
