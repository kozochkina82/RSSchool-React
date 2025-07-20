import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.mainContent}>
        <Main />
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Pokémon Explorer</p>
      </footer>
    </div>
  );
};

export default App;