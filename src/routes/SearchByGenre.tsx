import { useState } from "react";
import { searchBooks } from "../services/GoogleBooksService";
import type { Book } from "../types/Book";
import SearchBar from "../components/SearchBar";
import BookGrid from "../components/BookGrid";
import CategoryCard from "../components/CategoryCard";

interface GoogleBooksItem {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    categories?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
  };
}

const popularGenres = [
  "Fantasy",
  "Romance",
  "Science",
  "History",
  "Horror",
  "Mystery",
  "Biography",
];

const SearchByGenre = () => {
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async (selectedGenre: string) => {
    const results = await searchBooks(`subject:${selectedGenre}`);

    const mapped = results.map((item: GoogleBooksItem) => ({
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors || [],
      description: item.volumeInfo.description,
      categories: item.volumeInfo.categories,
      thumbnail: item.volumeInfo.imageLinks?.thumbnail,
    }));

    setBooks(mapped);
  };

  const handleSearch = () => {
    fetchBooks(genre);
  };

  const handleCardClick = (selectedGenre: string) => {
    setGenre(selectedGenre);
    fetchBooks(selectedGenre);
  };

  return (
    <>
      <h2>Search by Genre</h2>

      <SearchBar
        value={genre}
        onChange={setGenre}
        onSearch={handleSearch}
        placeholder="Enter genre (fantasy, romance...)"
      />

      {/* Genre Cards */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", 
        gap: "1rem", 
        margin: "2rem 0" 
      }}>
        {popularGenres.map((g) => (
          <CategoryCard
            key={g}
            label={g}
            onClick={() => handleCardClick(g)}
          />
        ))}
      </div>

      <BookGrid books={books} />
    </>
  );
};

export default SearchByGenre;

