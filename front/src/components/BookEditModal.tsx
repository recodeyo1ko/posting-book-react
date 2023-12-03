import React from "react";

interface Book {
  id?: number;
  title: string;
  body: string;
}

interface BookEditModalProps {
  book: Book;
  onCloseBookEditModal: () => void;
  onUpdateBook: (book: Book) => void;
}

const BookEditModal: React.FC<BookEditModalProps> = ({
  book,
  onCloseBookEditModal,
  onUpdateBook,
}) => {
  const [editedBook, setEditedBook] = React.useState<Book>(book);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedBook({ ...editedBook, title: e.target.value });
  };

  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedBook({ ...editedBook, body: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdateBook(editedBook);
    onCloseBookEditModal();
  };

  return (
    <div className="modal">
      <h2>編集</h2>
      <form className="modal-content" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            name="title"
            value={editedBook.title}
            onChange={onChangeTitle}
          />
        </div>
        <div className="field">
          <label htmlFor="body">Body:</label>
          <br />

          <textarea
            name="body"
            value={editedBook.body}
            onChange={onChangeBody}
          />
        </div>

        <button type="submit">Update</button>
        <button type="button" onClick={onCloseBookEditModal}>
          Close
        </button>
      </form>
    </div>
  );
};

export default BookEditModal;
