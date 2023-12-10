import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="col text-white d-flex flex-column align-items-center justify-content-around">
        <h2>Equipe</h2>
        <span>Maria Sabina</span>
        <span>Guilherme Bezerra</span>
        <span>Vitória Pio</span>
      </div>
      <div className="col text-white d-flex flex-column align-items-center justify-content-around">
        <span>AthleteExplorer</span>
      </div>
      <nav className="col d-flex flex-column align-items-center justify-content-around">
        <a href="/">Atletas</a>
        <a href="/favorite">Favoritos</a>
        <a href="/iot">Temperatura</a>
      </nav>
    </footer>
  );
}

export default Footer;
