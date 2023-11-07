import React from "react";

const BookModal = ({ book, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{book.title}</h2>
        <p>{book.body}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BookModal;
