import React, { useState } from "react";
import "./App.css";
import { BookIndex } from "./components/BookIndex";
import { Form } from "./components/Form";
import BookModal from "./components/BookModal";
import BookEditModal from "./components/BookEditModal";

function App() {
  const [book, setBook] = useState({ title: "", body: "" });
  const [books, setBooks] = useState([]);
  const [selectedShowBook, setSelectedShowBook] = useState(null);
  const [selectedEditBook, setSelectedEditBook] = useState(null);
  const [isShowModalOpen, setIsShowModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const showModal = (book) => {
    setIsEditModalOpen(false);
    setSelectedEditBook(null);
    setSelectedShowBook(book);
    setIsShowModalOpen(true);
  };

  const editModal = (book) => {
    setIsShowModalOpen(false);
    setSelectedShowBook(null);
    setSelectedEditBook(book);
    setIsEditModalOpen(true);
  };

  const closeShowModal = () => {
    setIsShowModalOpen(false);
    setSelectedShowBook(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEditBook(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const updateBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    closeEditModal();
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
      {isShowModalOpen && !isEditModalOpen && (
        <BookModal book={selectedShowBook} onClose={closeShowModal} />
      )}
      {isEditModalOpen && !isShowModalOpen && (
        <BookEditModal
          book={selectedEditBook}
          onClose={closeEditModal}
          onSave={updateBook}
        />
      )}
    </div>
  );
}

export default App;
