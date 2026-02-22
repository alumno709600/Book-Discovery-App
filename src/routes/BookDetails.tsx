import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./BookDetail.module.css";

interface GoogleBookDetail {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
    };
    categories?: string[];
    publishedDate?: string;
    publisher?: string;
  };
}

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState<GoogleBookDetail | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const data: GoogleBookDetail = await res.json();
      setBook(data);
    };

    if (id) fetchBook();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  const info = book.volumeInfo;

  return (
    <div className={styles.container}>
      <img
        src={info.imageLinks?.thumbnail}
        alt={info.title}
      />

      <div className={styles.details}>
        <h1>{info.title}</h1>
        <h3>{info.authors?.join(", ")}</h3>

        <p>
          <strong>Publisher:</strong> {info.publisher || "Unknown"}
        </p>

        <p>
          <strong>Published:</strong>{" "}
          {info.publishedDate || "Unknown"}
        </p>

        <p>
          <strong>Categories:</strong>{" "}
          {info.categories?.join(", ") || "N/A"}
        </p>

        <p
          dangerouslySetInnerHTML={{
            __html: info.description || "No description available.",
          }}
        />
      </div>
    </div>
  );
};

export default BookDetail;

