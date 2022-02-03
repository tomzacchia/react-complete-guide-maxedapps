import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

const dummyMovies = [
  {
    id: 1,
    title: "Some Dummy Movie",
    openingText: "This is the opening text of the movie",
    releaseDate: "2021-05-18",
  },
  {
    id: 2,
    title: "Some Dummy Movie 2",
    openingText: "This is the second opening text of the movie",
    releaseDate: "2021-05-19",
  },
];

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    const moviesArray = data.results;
    setMovies(moviesArray.map(mapMovieToNewKeys));
    setIsLoading(false);
  }

  // useEffect();

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* NOTE: Conditional rendering with HTTP and Flags */}
        {isLoading && <p> Loding... </p>}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p> No Movies Fallback</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

function mapMovieToNewKeys(movie) {
  return {
    id: movie.episode_id,
    title: movie.title,
    openingText: movie.opening_crawl,
    releaseData: movie.release_date,
  };
}
