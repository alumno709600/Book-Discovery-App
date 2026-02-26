import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./routes/Home";
import SearchByGenre from "./routes/SearchByGenre";
import SearchByAuthor from "./routes/SearchByAuthor";
import BookDetails from "./routes/BookDetails";
import ReadingList from "./routes/ReadingList";
import Footer from "./components/Footer";
import BookDetail from "./routes/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="search/genre" element={<SearchByGenre />} />
          <Route path="search/author" element={<SearchByAuthor />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route path="reading-list" element={<ReadingList />} />
          <Route path="book/:id" element={<BookDetail />} /> 
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

