import type { Book } from "../types/Book";
import BookCard from "./BookCard";
import styles from "./BookGrid.module.css";

interface Props {
  books: Book[];
}

const BookGrid = ({ books }: Props) => {
  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;
