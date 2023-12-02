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

  return (
    <div className="App">
      <BookIndex
        book={book}
        setBook={setBook}
        books={books}
        setBooks={setBooks}
      />
      <Form book={book} setBook={setBook} books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
