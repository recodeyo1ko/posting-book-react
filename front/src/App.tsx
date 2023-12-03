import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import BookIndex from "./components/BookIndex";
import BookShowModal from "./components/BookShowModal";
import BookEditModal from "./components/BookEditModal";
import { on } from "events";

interface Book {
  id?: number;
  title: string;
  body: string;
}

function App() {
  const [book, setBook] = useState<Book>({ title: "", body: "" });
  const [books, setBooks] = useState<Book[]>([]);
  const [isShowBookShowModalOpen, setIsShowBookShowModalOpen] =
    useState<boolean>(false);
  const [selectedShowBook, setSelectedShowBook] = useState<Book>({} as Book);
  const [isShowBookEditModalOpen, setIsShowBookEditModalOpen] =
    useState<boolean>(false);
  const [selectedEditBook, setSelectedEditBook] = useState<Book>({} as Book);

  const onDeleteBook = (id: number) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  const onShowBookShowModal = (book: Book) => {
    setIsShowBookEditModalOpen(false);
    setIsShowBookShowModalOpen(true);
    setSelectedShowBook(book);
  };

  const onShowBookEditModal = (book: Book) => {
    setIsShowBookShowModalOpen(false);
    setIsShowBookEditModalOpen(true);
    setSelectedEditBook(book);
  };

  const onUpdateBook = (book: Book) => {
    const updatedBooks = books.map((b) => (b.id === book.id ? book : b));
    setBooks(updatedBooks);
  };

  const onCloseBookShowModal = () => {
    setIsShowBookShowModalOpen(false);
    setSelectedShowBook({} as Book);
  };

  const onCloseBookEditModal = () => {
    setIsShowBookEditModalOpen(false);
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

      {isShowBookShowModalOpen && !isShowBookEditModalOpen && (
        <BookShowModal
          book={selectedShowBook}
          onCloseBookShowModal={onCloseBookShowModal}
        />
      )}

      {isShowBookEditModalOpen && !isShowBookShowModalOpen && (
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
