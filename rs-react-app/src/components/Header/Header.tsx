import React, { Component } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title?: string;
  onLogoClick?: () => void;
}

class Header extends Component<HeaderProps> {
  static defaultProps = {
    title: 'Pokémon Explorer',
    onLogoClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  render() {
    const { title, onLogoClick } = this.props;

    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.logo} onClick={onLogoClick}>
            <span className={styles.pokeball}>⚬</span>
            {title}
          </h1>
          <nav className={styles.nav}>
            <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              PokeAPI
            </a>
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              GitHub
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;