import { Link } from "react-router-dom";
import type { Book } from "../types/Book";
import styles from "./BookCard.module.css";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <div className={styles.card}>
      {book.thumbnail && (
        <img src={book.thumbnail} alt={book.title} />
      )}
      <h3>{book.title}</h3>
      <p>{book.authors?.join(", ")}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
