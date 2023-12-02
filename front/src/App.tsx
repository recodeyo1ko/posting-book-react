import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

interface Book {
  title: string;
  body: string;
}

function App() {
  const [book, setBook] = useState<Book>({ title: "", body: "" });
  return (
    <div className="App">
      <Form book={book} setBook={setBook} />
    </div>
  );
}

export default App;
