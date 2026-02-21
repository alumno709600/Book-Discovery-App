import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import CategoryCard from "../components/CategoryCard";
import Button from "../components/Button";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    title: "Discover Stories That Stay With You",
    text: "Explore books by genre or author in a calm and elegant space.",
    action: "/search/genre",
    button: "Start Exploring",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    title: "Build Your Personal Reading Journey",
    text: "Track your books and organize your literary world.",
    action: "/reading-list",
    button: "Go to Reading List",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    title: "Find Your Favorite and The Most Popular Authors",
    text: "Discover works from writers you love.",
    action: "/search/author",
    button: "Search by Author",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className={styles.container}>
      
      {/* HERO CAROUSEL */}
      <section className={styles.hero}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === current ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay}>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <Button
                text={slide.button}
                onClick={() => navigate(slide.action)}
              />
            </div>
          </div>
        ))}

        {/* Controles */}
        <button className={styles.prev} onClick={prevSlide}>
          ‹
        </button>
        <button className={styles.next} onClick={nextSlide}>
          ›
        </button>

        {/* Indicadores */}
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === current ? styles.dotActive : ""
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <CategoryCard
          title="📚 Search by Genre"
          description="Find books based on your favorite categories."
          onClick={() => navigate("/search/genre")}
        />

        <CategoryCard
          title="✍️ Search by Author"
          description="Discover works from your preferred writers."
          onClick={() => navigate("/search/author")}
        />

        <CategoryCard
          title="🌿 Track Your Reading"
          description="Organize books into To Read, Reading, and Finished."
          onClick={() => navigate("/reading-list")}
        />
      </section>
    </div>
  );
};

export default Home;


