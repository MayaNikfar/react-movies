import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../../data'; 
import './ActorDetailPage.css';

const ActorDetailPage = () => {
  const { actorName } = useParams(); 
  const actorMovies = movies.filter(movie => movie.cast.includes(actorName)); 

  return (
    <div className="actor-detail-page">
      <h1>{actorName}</h1>
      <h2>Movies:</h2>
      <ul>
        {actorMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActorDetailPage;
