import { useState } from "react";
import "./App.css";
import { BookIndex } from "./components/BookIndex";
import { Form } from "./components/Form";

function App() {
  const [book, setBook] = useState({ title: "", body: "" });
  const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <BookIndex books={books} />
      <Form book={book} setBook={setBook} books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
