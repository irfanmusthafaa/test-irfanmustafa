// App.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import MovieSearch from "./components/MovieSearch";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [warning, setWarning] = useState(""); // State untuk pesan peringatan

  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_SERVER}/?s=popular&apikey=${
            import.meta.env.VITE_APP_KEY
          }`
        );
        if (response.data.Search && response.data.Search.length > 0) {
          setMovies(response.data.Search);
          setWarning(""); // Hapus pesan peringatan jika ada hasil
        } else {
          setMovies([]);
          setWarning("No popular movies found.");
        }
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setWarning("Error fetching popular movies.");
      }
    };

    fetchInitialMovies();
  }, []);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setWarning("Search query cannot be empty.");
      setMovies([]);
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER}/?s=${query}&apikey=${
          import.meta.env.VITE_APP_KEY
        }`
      );
      if (response.data.Search && response.data.Search.length > 0) {
        setMovies(response.data.Search);
        setWarning(""); // Hapus pesan peringatan jika ada hasil
      } else {
        setMovies([]);
        setWarning(`Movies for "${query}" not found.`);
      }
    } catch (error) {
      console.error("Error searching movies:", error);
      setMovies([]);
      setWarning("Error searching movies.");
    }
  };

  return (
    <div>
      <MovieSearch onSearch={handleSearch} warning={warning} />{" "}
      {/* Tambahkan prop warning */}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
