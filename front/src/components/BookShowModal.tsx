import React from "react";

interface Book {
  id?: number;
  title: string;
  body: string;
}

interface BookShowModalProps {
  book: Book;
  onCloseBookShowModal: () => void;
}

const BookShowModal: React.FC<BookShowModalProps> = ({
  book,
  onCloseBookShowModal,
}) => {
  return (
    <div className="modal">
      <h2>詳細</h2>
      <div className="modal-content">
        <h2>{book.title}</h2>
        <p>{book.body}</p>
        <button onClick={onCloseBookShowModal}>Close</button>
      </div>
    </div>
  );
};

export default BookShowModal;
