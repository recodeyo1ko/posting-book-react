import React from "react";

interface Book {
  id?: number;
  title: string;
  body: string;
}

interface FormProps {
  book: Book;
  setBook: React.Dispatch<React.SetStateAction<Book>>;

  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

const Form: React.FC<FormProps> = ({ book, setBook, books, setBooks }) => {
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, title: e.target.value });
  };

  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBook({ ...book, body: e.target.value });
  };

  const onSubmitBook = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (book.title === "" || book.body === "") return;
    setBooks([
      ...books,
      {
        id: books.length + 1,
        title: book.title,
        body: book.body,
      },
    ]);
    setBook({ title: "", body: "" });
  };

  return (
    <div>
      <h2>New book</h2>
      <div className="field">
        <label>Title</label>
        <br />

        <input
          type="text"
          name="title"
          value={book.title}
          onChange={onChangeTitle}
        />
      </div>

      <div className="field">
        <label>Body</label>
        <br />
        <textarea name="body" value={book.body} onChange={onChangeBody} />
      </div>

      <div className="actions">
        <button onClick={onSubmitBook}>submit</button>
      </div>
    </div>
  );
};

export default Form;
