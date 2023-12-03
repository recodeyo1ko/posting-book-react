import React from "react";

interface Book {
  id?: number;
  title: string;
  body: string;
}

interface BookEditModalProps {
  book: Book;
  onCloseBookEditModal: () => void;
}

const BookEditModal: React.FC<BookEditModalProps> = ({
  book,
  onCloseBookEditModal,
}) => {
  return (
    <div className="modal">
      <h2>編集</h2>
      <form className="modal-content">
        <div className="field">
          <label htmlFor="title">Title:</label>
          <br />
          <input type="text" name="title" />
        </div>
        <div className="field">
          <label htmlFor="body">Body:</label>
          <br />

          <textarea name="body" />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCloseBookEditModal}>
          Close
        </button>
      </form>
    </div>
  );
};

export default BookEditModal;
