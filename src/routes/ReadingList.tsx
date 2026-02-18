import { useState } from "react";
import type { ReadingBook, ReadingStatus } from "../types/Book";
import styles from "./ReadingList.module.css";

const ReadingList = () => {
  const [books, setBooks] = useState<ReadingBook[]>(() => {
  const stored = localStorage.getItem("readingList");
  return stored ? JSON.parse(stored) : [];
});


  const updateStatus = (id: string, status: ReadingStatus) => {
    const updated = books.map((book) =>
      book.id === id ? { ...book, status } : book
    );

    setBooks(updated);
    localStorage.setItem("readingList", JSON.stringify(updated));
  };

  const renderSection = (status: ReadingStatus) => (
    <div>
      <h3>{status}</h3>
      {books
        .filter((book) => book.status === status)
        .map((book) => (
          <div key={book.id} className={styles.card}>
            <p>{book.title}</p>
            <select
              value={book.status}
              onChange={(e) =>
                updateStatus(book.id, e.target.value as ReadingStatus)
              }
            >
              <option>To Read</option>
              <option>Reading</option>
              <option>Finished</option>
            </select>
          </div>
        ))}
    </div>
  );

  return (
    <div>
      <h2>My Reading List</h2>
      {renderSection("To Read")}
      {renderSection("Reading")}
      {renderSection("Finished")}
    </div>
  );
};

export default ReadingList;
