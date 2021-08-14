// Importing Helpers
import React, { useEffect, useState } from "react";

// Importing Components
import Movie from "./Components/Movie";
import { VscDebugRestart } from "react-icons/vsc";

const API_KEY = "18f9c464cbe935eb9ac38f0d4fc2e1e8";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  // Handle Submit
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      // Fetch searched movie info
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  // Handle OnChange
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle Reset
  const handleReset = () => {
    getMovies(FEATURED_API);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
        <span className="reset-button" onClick={handleReset}>
          <VscDebugRestart />
        </span>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;

/* 
  featured: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=18f9c464cbe935eb9ac38f0d4fc2e1e8&page=1"

  images: "https://image.tmdb.org/t/p/w1280"

  search: "https://api.themoviedb.org/3/search/movie?&api_key=18f9c464cbe935eb9ac38f0d4fc2e1e8&query="
*/
