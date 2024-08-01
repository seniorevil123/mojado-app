import React, { useState } from "react";
import Book from "./Book";
import SearchFilter from "./SearchFilter";
import "./styles.css";

const Books = () => {
  const initialBooks = [
    {
      title: "Book 1",
      author: "John",
      dueDate: "2027-04-05",
      status: "Checked Out",
    },
    {
      title: "Book 2",
      author: "Jane",
      dueDate: "2027-01-05",
      status: "Checked Out",
    },
    {
      title: "Book 3",
      author: "Mike",
      dueDate: "2026-10-05",
      status: "Checked Out",
    },
    {
      title: "Book 4",
      author: "Lisa",
      dueDate: "2026-07-05",
      status: "Checked Out",
    },
    {
      title: "Book 5",
      author: "John",
      dueDate: "2026-04-05",
      status: "Checked Out",
    },
    {
      title: "Book 6",
      author: "Jane",
      dueDate: "2026-01-05",
      status: "Checked Out",
    },
    {
      title: "Book 7",
      author: "Mike",
      dueDate: "2025-10-05",
      status: "Available",
    },
    {
      title: "Book 8",
      author: "Lisa",
      dueDate: "2025-07-05",
      status: "Available",
    },
    {
      title: "Book 9",
      author: "John",
      dueDate: "2025-04-05",
      status: "Available",
    },
    {
      title: "Book 10",
      author: "Jane",
      dueDate: "2025-01-05",
      status: "Available",
    },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStatus = (index) => {
    const newBooks = [...books];
    newBooks[index].status =
      newBooks[index].status === "Checked Out" ? "Available" : "Checked Out";
    setBooks(newBooks);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <Book
              key={index}
              index={index}
              book={book}
              toggleStatus={toggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
