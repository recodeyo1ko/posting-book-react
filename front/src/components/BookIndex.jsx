import React from "react";

export const BookIndex = ({ books }) => {
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
              <td>Show</td>
              <td>Edit</td>
              <td>Destroy</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
