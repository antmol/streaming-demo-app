import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onSearch: (query: string) => void; // Función para manejar la búsqueda
  onFilter: (year: number | null) => void; // Función para manejar el filtrado por año
}

const Header: React.FC<HeaderProps> = ({ onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para el término de búsqueda
  const [year, setYear] = useState<number | null>(null); // Estado para el año de filtrado
  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Llama a la función de búsqueda
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const year = e.target.value ? parseInt(e.target.value) : null;
    setYear(year);
    onFilter(year); // Llama a la función de filtrado
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title} onClick={() => navigate('/')}>
        Movie App
      </h1>
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Buscar por título"
          value={searchQuery}
          onChange={handleSearch} // Maneja cambios en el campo de búsqueda
          style={styles.searchInput}
        />
        <input
          type="number"
          placeholder="Filtrar por año"
          value={year || ''}
          onChange={handleFilter} // Maneja cambios en el campo de año
          style={styles.yearInput}
        />
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
  },
  title: {
    margin: '0',
    fontSize: '24px',
    cursor: 'pointer',
  },
  filters: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  searchInput: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  yearInput: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '120px',
  },
} as const;

export default Header;