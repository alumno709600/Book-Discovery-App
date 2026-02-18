import { useState } from "react";
import { searchBooks } from "../services/GoogleBooksService";
import type { Book } from "../types/Book";
import SearchBar from "../components/SearchBar";
import BookGrid from "../components/BookGrid";

interface BookItem {
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

const SearchByAuthor = () => {
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async () => {
    const results = await searchBooks(`inauthor:${author}`);

    const mapped = results.map((item: BookItem) => ({
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
      <h2>Search by Author</h2>
      <SearchBar
        value={author}
        onChange={setAuthor}
        onSearch={handleSearch}
        placeholder="Enter author name..."
      />
      <BookGrid books={books} />
    </>
  );
};

export default SearchByAuthor;
