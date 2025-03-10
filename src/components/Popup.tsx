import React from 'react';

interface PopupProps {
  title: string;
  description: string;
  releaseYear: number;
  imageUrl: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, description, releaseYear, imageUrl, onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <img src={imageUrl} alt={title} style={styles.image} />
        <div style={styles.details}>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.description}>{description}</p>
          <p style={styles.year}>Año de lanzamiento: {releaseYear}</p>
        </div>
        <button onClick={onClose} style={styles.closeButton}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popup: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    width: '90%', // Ancho del 90% en móviles
    maxWidth: '300px', // Ancho máximo en escritorio
    maxHeight: '90vh', // Altura máxima del 90% de la pantalla
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column', // Organiza los elementos en vertical
    alignItems: 'center', // Centra los elementos horizontalmente
    overflow: 'hidden', // Oculta el contenido que se desborda
  },
  image: {
    width: '100%', // La imagen ocupa todo el ancho del popup
    borderRadius: '10px',
    marginBottom: '15px',
    maxHeight: '200px', // Limita la altura de la imagen
    objectFit: 'cover', // Ajusta la imagen sin distorsionarla
  },
  details: {
    width: '100%', // Los detalles ocupan todo el ancho del popup
    overflowY: 'auto', // Permite scroll solo en los detalles si es necesario
    flex: '1', // Ocupa el espacio restante
  },
  title: {
    fontSize: '20px', // Tamaño de fuente más pequeño para móviles
    margin: '0 0 10px 0',
    textAlign: 'center', // Centra el título
  },
  description: {
    fontSize: '14px', // Tamaño de fuente más pequeño para móviles
    margin: '0 0 10px 0',
    textAlign: 'justify', // Justifica el texto de la descripción
  },
  year: {
    fontSize: '12px', // Tamaño de fuente más pequeño para móviles
    margin: '0 0 15px 0',
    color: '#555',
    textAlign: 'center', // Centra el año de lanzamiento
  },
  closeButton: {
    backgroundColor: '#282c34',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%', // Botón ocupa todo el ancho
  },
} as const;

export default Popup;