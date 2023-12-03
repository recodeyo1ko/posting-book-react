import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import BookIndex from "./components/BookIndex";

interface Book {
  id?: number;
  title: string;
  body: string;
}

function App() {
  const [book, setBook] = useState<Book>({ title: "", body: "" });
  const [books, setBooks] = useState<Book[]>([]);

  const onDeleteBook = (id: number) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  return (
    <div className="App">
      <BookIndex
        book={book}
        setBook={setBook}
        books={books}
        setBooks={setBooks}
        onDeleteBook={onDeleteBook}
      />
      <Form book={book} setBook={setBook} books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
