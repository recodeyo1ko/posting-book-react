import React, { useState } from "react";

const BookEditModal = ({ book, onClose, onSave }) => {
  // Create local state for editing
  const [editedBook, setEditedBook] = useState({ ...book });

  // Update local state when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  // Call onSave with the new book object when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedBook);
  };

  return (
    <div className="modal">
      <h2>編集</h2>
      <form className="modal-content" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            name="title"
            value={editedBook.title}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="body">Body:</label>
          <br />

          <textarea
            name="body"
            value={editedBook.body}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default BookEditModal;
