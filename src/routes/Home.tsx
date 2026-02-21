import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Button from "../components/Button";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Discover Your Next Favorite Book</h1>
        <p>
          Explore books by genre or author and track your reading journey
          in a calm and elegant environment.
        </p>

        <Button
          text="Start Exploring"
          onClick={() => navigate("/search/genre")}
        />
      </section>

      <section className={styles.features}>
        <CategoryCard
          label="📚 Search by Genre"
          onClick={() => navigate("/search/genre")}
        />

        <CategoryCard
          label="✍️ Search by Author"
          onClick={() => navigate("/search/author")}
        />

        <CategoryCard
          label="🌿 Track Your Reading"
          onClick={() => navigate("/reading-list")}
        />
      </section>
    </div>
  );
};

export default Home;

