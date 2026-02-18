import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/GoogleBooksService";
import type { Book } from "../types/Book";
import type { ReadingBook } from "../types/Book";
import styles from "./BookDetails.module.css";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchBook = async () => {
      const data = await getBookById(id);

      const mapped: Book = {
        id: data.id,
        title: data.volumeInfo.title,
        authors: data.volumeInfo.authors || [],
        description: data.volumeInfo.description,
        categories: data.volumeInfo.categories,
        thumbnail: data.volumeInfo.imageLinks?.thumbnail,
      };

      setBook(mapped);
    };

    fetchBook();
  }, [id]);

  const addToReadingList = () => {
    if (!book) return;

    const stored = localStorage.getItem("readingList");
    const list: ReadingBook[] = stored ? JSON.parse(stored) : [];

    const exists = list.find((b) => b.id === book.id);
    if (exists) return;

    const newBook: ReadingBook = { ...book, status: "To Read" };
    const updated = [...list, newBook];

    localStorage.setItem("readingList", JSON.stringify(updated));
    alert("Book added to Reading List");
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <img src={book.thumbnail} alt={book.title} />
      <div className={styles.info}>
        <h2>{book.title}</h2>
        <p><strong>Authors:</strong> {book.authors.join(", ")}</p>
        <p><strong>Genres:</strong> {book.categories?.join(", ")}</p>
        <p>{book.description}</p>
        <button onClick={addToReadingList}>
          Add to Reading List
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
