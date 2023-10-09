import styles from './favorites.module.css';
import CardFavorite from './../../components/card-favorite/index';

function Favorites() {
  const favoriteArray = JSON.parse(localStorage.getItem('favoriteArray'));

  return (
    <div className={styles.container}>
      <h3>Veja seus Favoritos</h3>

      <div className={styles.cardContainer}>
        {favoriteArray?.map((atleta, key) => {
          return (
            <CardFavorite
              key={key}
              atleta={atleta}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
