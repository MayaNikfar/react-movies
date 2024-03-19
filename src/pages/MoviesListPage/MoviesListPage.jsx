import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import { movies } from "../../data";

const MoviesListPage = () => {
return (
    <div>
      <h1>List of Movies</h1>
      <div className="movies-list">
        {movies.map((movie, index) => (
          <Link to={`/movie/${encodeURIComponent(movie.title)}`} key={index}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesListPage;