import React from "react";

interface Book {
  title: string;
  body: string;
}

interface FormProps {
  book: Book;
  setBook: React.Dispatch<React.SetStateAction<Book>>;
}

const Form: React.FC<FormProps> = ({ book, setBook }) => {
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, title: e.target.value });
  };

  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBook({ ...book, body: e.target.value });
  };

  const onSubmitBook = () => {
    console.log(book);
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
