// Importing Helpers
import React, { useEffect, useState } from "react";

// Importing Components
import Movie from "./Components/Movie";
import { API_KEY } from "./Config";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  });

  return (
    <div className="movie-container">

      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default App;

/* 
  featured: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=18f9c464cbe935eb9ac38f0d4fc2e1e8&page=1"

  images: "https://image.tmdb.org/t/p/w1280"

  search: "https://api.themoviedb.org/3/search/movie?&api_key=18f9c464cbe935eb9ac38f0d4fc2e1e8&query="
*/
