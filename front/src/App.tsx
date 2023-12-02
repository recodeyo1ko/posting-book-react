import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

interface Book {
  title: string;
  body: string;
}

function App() {
  const [book, setBook] = useState<Book>({ title: "", body: "" });
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <div className="App">
      <Form book={book} setBook={setBook} books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
