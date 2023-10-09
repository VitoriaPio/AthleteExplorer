// modulo css
import styles from './card-favorite.module.css';

import {
  faEarthAmericas,
  faPerson,
  faWeightHanging,
  faShirt,
  faFutbol,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import playerThumb from '../../assets/imgs/player-default.jpg';

function CardFavorite({ atleta }) {
  return (
    <div className={styles.container}>
      <img
        className="card-img-top"
        src={atleta?.strThumb != null ? atleta?.strThumb : playerThumb}
        alt="Card image cap"
      />
      <div className="card-body mt-1 gap-3 d-flex flex-column text-center ">
        <h5 className="card-title">{atleta?.strPlayer}</h5>

        {/* player info */}
        <div className={styles.infoContainer}>
          <div className={styles.playerInfos}>
            {/* Nacionalidade */}
            <div>
              <FontAwesomeIcon
                color="#06203c"
                icon={faEarthAmericas}
              />
              <span>
                {atleta?.strNationality != ''
                  ? atleta?.strNationality
                  : 'Sem dados'}
              </span>
            </div>

            {/* Posição */}
            <div>
              <FontAwesomeIcon icon={faFutbol} />
              <span>{atleta?.strPosition}</span>
            </div>
          </div>

          <div className={styles.playerInfos}>
            {/* Peso */}
            <div>
              <FontAwesomeIcon icon={faWeightHanging} />
              <span>
                {atleta?.strWeight != '' ? atleta?.strWeight : 'Sem Dados'}
              </span>
            </div>

            {/* Altura */}
            <div>
              <FontAwesomeIcon icon={faPerson} />
              <span>{atleta?.strHeight}</span>
            </div>
          </div>
          {/* Número */}
          <div className={styles.playerNumber}>
            <FontAwesomeIcon icon={faShirt} />
            <span>
              {atleta?.strNumber != '' ? atleta?.strNumber : 'Sem dados'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardFavorite;
