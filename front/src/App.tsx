import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import BookIndex from "./components/BookIndex";
import BookShowModal from "./components/BookShowModal";

interface Book {
  id?: number;
  title: string;
  body: string;
}

function App() {
  const [book, setBook] = useState<Book>({ title: "", body: "" });
  const [books, setBooks] = useState<Book[]>([]);
  const [isShowBookShowModal, setIsShowBookShowModal] =
    useState<boolean>(false);
  const [selectedShowBook, setSelectedShowBook] = useState<Book>({} as Book);

  const onDeleteBook = (id: number) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  const onShowBookShowModal = (book: Book) => {
    setIsShowBookShowModal(true);
    setSelectedShowBook(book);
  };

  const onCloseBookShowModal = () => {
    setIsShowBookShowModal(false);
    setSelectedShowBook({} as Book);
  };

  return (
    <div className="App">
      <BookIndex
        book={book}
        setBook={setBook}
        books={books}
        setBooks={setBooks}
        onShowBookModal={onShowBookShowModal}
        onDeleteBook={onDeleteBook}
      />
      <Form book={book} setBook={setBook} books={books} setBooks={setBooks} />

      {isShowBookShowModal && (
        <BookShowModal
          book={selectedShowBook}
          onCloseBookShowModal={onCloseBookShowModal}
        />
      )}
    </div>
  );
}

export default App;
