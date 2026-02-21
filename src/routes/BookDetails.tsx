import { useState } from "react";
import type { ReadingBook } from "../types/Book";
import BookCard from "../components/BookCard";
import Button from "../components/Button";

const ReadingList = () => {
  const [books, setBooks] = useState<ReadingBook[]>(() => {
    const stored = localStorage.getItem("readingList");
    return stored ? JSON.parse(stored) : [];
  });

  const updateStatus = (id: string, status: ReadingBook["status"]) => {
    const updated = books.map((book) =>
      book.id === id ? { ...book, status } : book
    );

    setBooks(updated);
    localStorage.setItem("readingList", JSON.stringify(updated));
  };

  const removeBook = (id: string) => {
    const updated = books.filter((book) => book.id !== id);
    setBooks(updated);
    localStorage.setItem("readingList", JSON.stringify(updated));
  };

  if (books.length === 0) {
    return <p>Your reading list is empty.</p>;
  }

  return (
    <div>
      <h2>My Reading List</h2>

      {books.map((book) => (
        <div key={book.id} style={{ marginBottom: "2rem" }}>
          <BookCard book={book} />

          <p><strong>Status:</strong> {book.status}</p>

          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            <Button
              text="To Read"
              onClick={() => updateStatus(book.id, "To Read")}
            />

            <Button
              text="Reading"
              onClick={() => updateStatus(book.id, "Reading")}
            />

            <Button
              text="Finished"
              onClick={() => updateStatus(book.id, "Finished")}
            />

            <Button
              text="Remove"
              onClick={() => removeBook(book.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadingList;
