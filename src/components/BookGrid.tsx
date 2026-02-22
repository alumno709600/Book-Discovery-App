import type { Book } from "../types/Book";
import BookCard from "./BookCard";
import styles from "./BookGrid.module.css";

interface Props {
  books: Book[];
  onAdd?: (book: Book) => void;
}

const BookGrid = ({ books, onAdd }: Props) => {
  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default BookGrid;


