import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2023 Movie App. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34', // Fondo oscuro
    padding: '10px',
    color: 'white',
    textAlign: 'center', // Centra el contenido
    position: 'fixed', // Fijo en la parte inferior
    bottom: '0',
    width: '100%',
  },
  text: {
    margin: '0',
    fontSize: '14px',
  },
} as const;

export default Footer;