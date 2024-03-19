import React from "react";
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${encodeURIComponent(movie.title)}`} className="movie-card">
      <div className="poster" style={{ backgroundImage: `url(${movie.posterPath})` }}></div>
      <div className="info">
        <h2>{movie.title}</h2>
        <p>{movie.releaseDate}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
