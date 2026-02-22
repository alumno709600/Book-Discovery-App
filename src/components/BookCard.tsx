import { useNavigate } from "react-router-dom";
import type { Book } from "../types/Book";
import Button from "./Button";
import styles from "./BookCard.module.css";

interface Props {
  book: Book;
  onAdd?: (book: Book) => void;
}

const BookCard = ({ book, onAdd }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <img
        src={book.thumbnail || "/placeholder.png"}
        alt={book.title}
      />

      <div className={styles.info}>
        <h3>{book.title}</h3>
        <p>{book.authors?.join(", ")}</p>

        <div className={styles.buttons}>
          {/* 🔵 BOTÓN INFO */}
          <Button
            text="More Info"
            onClick={() => navigate(`/book/${book.id}`)}
          />

          {/* 🔵 BOTÓN ADD (solo si existe onAdd) */}
          {onAdd && (
            <Button
              text="Add"
              onClick={() => onAdd(book)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;


