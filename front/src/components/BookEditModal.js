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
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={editedBook.title}
          onChange={handleChange}
        />
        <label htmlFor="body">Body:</label>
        <textarea name="body" value={editedBook.body} onChange={handleChange} />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default BookEditModal;
