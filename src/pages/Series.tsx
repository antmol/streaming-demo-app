import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/moviesSlice';
import { RootState } from '../store/store';
import Layout from '../components/Layout';
import Popup from '../components/Popup';

const Series: React.FC = () => {
  const dispatch = useDispatch();
  const { series, status } = useSelector((state: RootState) => state.movies);
  const [selectedSeries, setSelectedSeries] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para el término de búsqueda
  const [filterYear, setFilterYear] = useState<number | null>(null); // Estado para el año de filtrado

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // Filtra las series según el término de búsqueda y el año
  const filteredSeries = series.filter((seriesItem) => {
    const matchesSearch = seriesItem.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = filterYear ? seriesItem.releaseYear === filterYear : true;
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
        {filteredSeries.map((seriesItem) => (
          <div
            key={seriesItem.title}
            className="card"
            onClick={() => setSelectedSeries(seriesItem)}
          >
            <img
              src={seriesItem.images['Poster Art'].url}
              alt={seriesItem.title}
            />
            <h3>{seriesItem.title}</h3>
          </div>
        ))}
      </div>
      {selectedSeries && (
        <Popup
          title={selectedSeries.title}
          description={selectedSeries.description}
          releaseYear={selectedSeries.releaseYear}
          imageUrl={selectedSeries.images['Poster Art'].url}
          onClose={() => setSelectedSeries(null)}
        />
      )}
    </Layout>
  );
};

export default Series;