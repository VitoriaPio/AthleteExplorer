import useIoT from '../../hooks/use-iot';
import styles from './iot.module.css';

function IoT() {
  const { data, error, isLoading } = useIoT();

  // Printando dados retornados da API Thingspeak
  console.log(data);

  // Printando erro caso ele ocorra
  if (error) console.error(error);

  // Exibindo texto de carregamento enquanto os dados não são retornados
  if (isLoading) return <p>Carregando...</p>;

  return (
    <div className={styles.info}>
      <div className={styles.cardContainer}>
        <h1>Tela de IoT</h1>
      </div>
    </div>
  );
}

export default IoT;
