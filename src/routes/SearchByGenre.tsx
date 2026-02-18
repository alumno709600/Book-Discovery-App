import { useState } from "react";
import { searchBooks } from "../services/GoogleBooksService";
import type { Book } from "../types/Book";
import SearchBar from "../components/SearchBar";
import BookGrid from "../components/BookGrid";

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


const SearchByGenre = () => {
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async () => {
    const results = await searchBooks(`subject:${genre}`);

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

  return (
    <>
      <h2>Search by Genre</h2>
      <SearchBar
        value={genre}
        onChange={setGenre}
        onSearch={handleSearch}
        placeholder="Enter genre (fantasy, romance...)"
      />
      <BookGrid books={books} />
    </>
  );
};

export default SearchByGenre;
