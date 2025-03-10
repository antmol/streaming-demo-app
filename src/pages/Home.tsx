import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="home-container">
        <div className="recuadros-container">
          <div className="recuadro" onClick={() => navigate('/movies')}>
            <h2>Películas</h2>
          </div>
          <div className="recuadro" onClick={() => navigate('/series')}>
            <h2>Series</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home; // Exportación por defecto