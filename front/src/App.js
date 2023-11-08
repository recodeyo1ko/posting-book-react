import React, { useState } from "react";
import "./App.css";
import { BookIndex } from "./components/BookIndex";
import { Form } from "./components/Form";
import BookModal from "./components/BookModal";
import BookEditModal from "./components/BookEditModal";

function App() {
  const [book, setBook] = useState({ title: "", body: "" });
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isShowModalOpen, setIsShowModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const showModal = (book) => {
    setSelectedBook(book);
    setIsShowModalOpen(true);
  };

  const editModal = (book) => {
    setSelectedBook(book);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsShowModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedBook(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const updateBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    closeModal();
  };

  return (
    <div className="App">
      <BookIndex
        books={books}
        onShow={showModal}
        onEdit={editModal}
        onDelete={deleteBook}
      />
      <Form book={book} setBook={setBook} books={books} setBooks={setBooks} />
      {isShowModalOpen && (
        <BookModal book={selectedBook} onClose={closeModal} />
      )}
      {isEditModalOpen && (
        <BookEditModal
          book={selectedBook}
          onClose={closeModal}
          onSave={updateBook}
        />
      )}
    </div>
  );
}

export default App;
