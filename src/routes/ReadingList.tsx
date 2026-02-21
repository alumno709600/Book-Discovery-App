import { useState } from "react";
import type { ReadingBook } from "../types/Book";
import BookCard from "../components/BookCard";
import Button from "../components/Button";
import styles from "./ReadingList.module.css";

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

  const renderSection = (status: ReadingBook["status"]) => {
    const filtered = books.filter((book) => book.status === status);

    if (filtered.length === 0) return null;

    return (
      <section className={styles.section}>
        <h2>{status}</h2>

        <div className={styles.grid}>
          {filtered.map((book) => (
            <div key={book.id} className={styles.cardWrapper}>
              <BookCard book={book} />

              <div className={styles.actions}>
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
      </section>
    );
  };

  if (books.length === 0) {
    return <p className={styles.empty}>Your reading list is empty.</p>;
  }

  return (
    <div className={styles.container}>
      <h1>My Reading Journey</h1>

      {renderSection("To Read")}
      {renderSection("Reading")}
      {renderSection("Finished")}
    </div>
  );
};

export default ReadingList;
