import { useState } from "react";
import "./App.css";
import { BookIndex } from "./components/BookIndex";
import { Form } from "./components/Form";
import BookModal from "./components/BookModal";

function App() {
  const [book, setBook] = useState({ title: "", body: "" });
  const [books, setBooks] = useState([]);

  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const deleteBook = (id) => {
    const Books = books.filter((book) => book.id !== id);
    setBooks(Books);
  };

  return (
    <div className="App">
      <BookIndex
        books={books}
        onShow={showModal}
        onEdit={() => {}}
        onDelete={deleteBook}
      />
      <Form book={book} setBook={setBook} books={books} setBooks={setBooks} />
      {isModalOpen && <BookModal book={selectedBook} onClose={closeModal} />}
    </div>
  );
}

export default App;
