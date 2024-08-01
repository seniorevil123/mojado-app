import React from "react";
import "./styles.css";

const Book = ({ index, book, toggleStatus }) => (
  <tr className={book.status === "Available" ? "status-inactive" : ""}>
    <td>{index + 1}</td>
    <td>{book.title}</td>
    <td>{book.author}</td>
    {book.status === "Checked Out" && <td>{book.dueDate}</td>}
    {book.status === "Available" && <td>{book.dueDate}</td>}
    <td>{book.status}</td>
    <td>
      <button onClick={() => toggleStatus(index)}>Toggle Status</button>
    </td>
  </tr>
);

export default Book;
