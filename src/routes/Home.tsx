import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Discover Your Next Favorite Book</h1>
        <p>
          Explore books by genre or author and track your reading journey in a
          calm and elegant environment.
        </p>

        <button onClick={() => navigate("/search/genre")}>
          Start Exploring
        </button>
      </section>

      <section className={styles.features}>
        <div>
          <h3>📚 Search by Genre</h3>
          <p>Find books based on your favorite categories.</p>
        </div>

        <div>
          <h3>✍️ Search by Author</h3>
          <p>Discover works from your preferred writers.</p>
        </div>

        <div>
          <h3>🌿 Track Your Reading</h3>
          <p>Organize books into To Read, Reading, and Finished.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
