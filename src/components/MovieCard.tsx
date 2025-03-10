import React from 'react';

interface MovieCardProps {
  movie: {
    title: string;
    images: {
      'Poster Art': {
        url: string;
      };
    };
  };
  onClick: () => void; // Función para manejar el clic
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div className="card" onClick={onClick}> {/* Llama a onClick al hacer clic */}
      <img src={movie.images['Poster Art'].url} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;