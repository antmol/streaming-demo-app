import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/moviesSlice';
import { RootState } from '../store/store';
import Layout from '../components/Layout';
import Popup from '../components/Popup';

const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state: RootState) => state.movies);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para el término de búsqueda
  const [filterYear, setFilterYear] = useState<number | null>(null); // Estado para el año de filtrado

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // Filtra las películas según el término de búsqueda y el año
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = filterYear ? movie.releaseYear === filterYear : true;
    return matchesSearch && matchesYear;
  });

  if (status === 'loading') {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout
      onSearch={setSearchQuery} // Pasa la función de búsqueda
      onFilter={setFilterYear} // Pasa la función de filtrado
    >
      <div className="gallery">
        {filteredMovies.map((movie) => (
          <div
            key={movie.title}
            className="card"
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={movie.images['Poster Art'].url}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <Popup
          title={selectedMovie.title}
          description={selectedMovie.description}
          releaseYear={selectedMovie.releaseYear}
          imageUrl={selectedMovie.images['Poster Art'].url}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </Layout>
  );
};

export default Movies;