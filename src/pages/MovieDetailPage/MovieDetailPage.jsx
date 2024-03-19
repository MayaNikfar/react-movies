import React from 'react';
import { useParams  } from 'react-router-dom';
import { movies } from "../../data.js";

const MovieDetailPage = () => {
    const { movieName } = useParams();
    const decodedMovieName = encodeURIComponent(movieName);
    const movie = movies.find(
      (movie) => encodeURIComponent(movie.title) === decodedMovieName
    );
  
    if (!movie) return <div>Movie not found</div>;
  
    return (
      <div>
        <h1>{movie.title}</h1>
        <img src={movie.posterPath} alt={movie.title} />
        <p>Release Date: {movie.releaseDate}</p>
        <p>Cast: {movie.cast.join(", ")}</p>
      </div>
    );
  };
  
  export default MovieDetailPage;