import styles from './nav-bar.module.css';

function Navbar() {
  return (
    <div className={styles.bar}>
      <nav className={styles.navBar}>
        <a href="/" className={styles.linkStyle}>
          Atletas
        </a>
        <a href="/favorite" className={styles.linkStyle}>
          Favoritos
        </a>
        <a href="/temperatura" className={styles.linkStyle}>
          Temperatura
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
