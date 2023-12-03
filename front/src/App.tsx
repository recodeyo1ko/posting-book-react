import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import BookIndex from "./components/BookIndex";
import BookShowModal from "./components/BookShowModal";
import BookEditModal from "./components/BookEditModal";

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
  const [isShowBookEditModal, setIsShowBookEditModal] =
    useState<boolean>(false);
  const [selectedEditBook, setSelectedEditBook] = useState<Book>({} as Book);

  const onDeleteBook = (id: number) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  const onShowBookShowModal = (book: Book) => {
    setIsShowBookShowModal(true);
    setSelectedShowBook(book);
  };

  const onShowBookEditModal = (book: Book) => {
    setIsShowBookEditModal(true);
    setSelectedEditBook(book);
  };

  const onUpdateBook = (book: Book) => {
    const updatedBooks = books.map((b) => (b.id === book.id ? book : b));
    setBooks(updatedBooks);
  };

  const onCloseBookShowModal = () => {
    setIsShowBookShowModal(false);
    setSelectedShowBook({} as Book);
  };

  const onCloseBookEditModal = () => {
    setIsShowBookEditModal(false);
    setSelectedEditBook({} as Book);
  };

  return (
    <div className="App">
      <BookIndex
        book={book}
        setBook={setBook}
        books={books}
        setBooks={setBooks}
        onShowBookShowModal={onShowBookShowModal}
        onShowBookEditModal={onShowBookEditModal}
        onDeleteBook={onDeleteBook}
      />
      <Form book={book} setBook={setBook} books={books} setBooks={setBooks} />

      {isShowBookShowModal && (
        <BookShowModal
          book={selectedShowBook}
          onCloseBookShowModal={onCloseBookShowModal}
        />
      )}

      {isShowBookEditModal && (
        <BookEditModal
          book={selectedEditBook}
          onCloseBookEditModal={onCloseBookEditModal}
          onUpdateBook={onUpdateBook}
        />
      )}
    </div>
  );
}

export default App;
