import React from "react";

export const BookIndex = () => {
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
          <tr>
            <td>title</td>
            <td>body</td>
            <td>Show</td>
            <td>Edit</td>
            <td>Destroy</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
