import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Book } from "../types/Book";
import BookGrid from "../components/BookGrid";
import Button from "../components/Button";
import styles from "./Home.module.css";

const slides = [
  {
    title: "Track Your Reading",
    description:
      "Organize books into To Read, Reading and Finished.",
    buttonText: "Go to Reading List",
    path: "/reading-list",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "Discover by Genre",
    description:
      "Explore thousands of books by category.",
    buttonText: "Search by Genre",
    path: "/genre",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
  {
    title: "Find Your Favorite Authors",
    description:
      "Search books written by your favorite authors.",
    buttonText: "Search by Author",
    path: "/author",
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090",
  },
];

const famousQueries = [
  "The Hobbit",
  "1984",
  "Pride and Prejudice",
  "The Great Gatsby",
  "Harry Potter",
  "To Kill a Mockingbird",
  "The Lord of the Rings",
  "The Catcher in the Rye",
];

const Home = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [famousBooks, setFamousBooks] = useState<Book[]>([]);

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Fetch libros famosos con imagen real
  useEffect(() => {
    const fetchFamousBooks = async () => {
      const results = await Promise.all(
        famousQueries.map((query) =>
          fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`
          ).then((res) => res.json())
        )
      );

      const books: Book[] = results
        .map((data) => {
          const item = data.items?.[0];
          if (!item) return null;

          return {
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors || [],
            thumbnail:
              item.volumeInfo.imageLinks?.thumbnail,
          };
        })
        .filter(Boolean) as Book[];

      setFamousBooks(books);
    };

    fetchFamousBooks();
  }, []);

  const slide = slides[current];

  return (
    <div className={styles.container}>
      {/* ===== HERO CAROUSEL ===== */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className={styles.overlay}>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>

          <Button
            text={slide.buttonText}
            onClick={() => navigate(slide.path)}
          />
        </div>
      </section>

      {/* ===== FAMOUS BOOKS SECTION ===== */}
      <section className={styles.booksSection}>
        <h2>Famous Books</h2>

        {famousBooks.length > 0 ? (
          <BookGrid books={famousBooks} />
        ) : (
          <p className={styles.loading}>
            Loading featured books...
          </p>
        )}
      </section>
    </div>
  );
};

export default Home;






