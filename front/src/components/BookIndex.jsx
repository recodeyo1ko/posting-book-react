import React from "react";

export const BookIndex = ({ books, onShow, onEdit, onDelete }) => {
  return (
    <div>
      <h1>Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.body}</td>
              <td>
                <button onClick={() => onShow(book)}>Show</button>
              </td>
              <td>
                <button onClick={() => onEdit(book.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => onDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
