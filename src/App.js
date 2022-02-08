import React, { useCallback, useEffect, useState } from "react";

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
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const moviesArray = data.results;
      setMovies(moviesArray.map(mapMovieToNewKeys));
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  /**
   * NOTE: Using useEffect to load on first render. We wrap our fetchMoviesHandler
   * in useCallback in case our handler refers to a piece of state that changes
   * and as such a new instance of the handler managed by React's internals
   */
  useEffect(
    function initialFetch() {
      fetchMoviesHandler();
    },
    [fetchMoviesHandler]
  );

  function getContentJSX() {
    let content = <p> No Movies Fallback</p>;

    if (movies.length > 0) content = <MoviesList movies={movies} />;

    if (error) content = <p>{error}</p>;

    if (isLoading) content = <p> Loding... </p>;

    return content;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{getContentJSX()}</section>
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
