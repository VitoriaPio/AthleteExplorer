import { useState } from 'react';
import { usePlayer } from '../../hooks/use-player';

import CardAtleta from '../../components/card-atleta';

import styles from './home.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [athleteName, setAthleteName] = useState('');
  const [favoriteArray, setFavoriteArray] = useState(
    JSON.parse(localStorage.getItem('favoriteArray')) ?? []
  );
  const { data } = usePlayer(athleteName);

  const handleInputChange = (event) => {
    setAthleteName(event.target.value);
  };

  // Filtrar apenas os jogadores de futebol
  const jogadoresDeFutebol = data.filter(
    (player) => player.strSport === 'Soccer'
  );

  return (
    <div className={styles.homeContainer}>
      <h3>Discovery</h3>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Nome do Atleta"
          value={athleteName}
          onChange={handleInputChange}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.icon}
        />
      </div>
      <div className={styles.cardContainer}>
        {jogadoresDeFutebol.map((player) => (
          <CardAtleta
            key={player.idPlayer}
            atleta={player}
            favoriteArray={favoriteArray}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
