import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  onSearch?: (query: string) => void; // Función opcional para manejar la búsqueda
  onFilter?: (year: number | null) => void; // Función opcional para manejar el filtrado
}

const Layout: React.FC<LayoutProps> = ({ children, onSearch, onFilter }) => {
  return (
    <div style={styles.container}>
      <Header
        onSearch={onSearch} // Pasa la función de búsqueda
        onFilter={onFilter} // Pasa la función de filtrado
      />
      <main style={styles.main}>{children}</main>
      <Footer /> {/* Footer en todas las páginas */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: '1',
    padding: '20px',
  },
} as const;

export default Layout;