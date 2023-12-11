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

  if (!data) return <span>Deu merda!</span>;

  return (
    <div className={styles.info}>
      <div className={styles.cardContainer}>
        <h1>Temperatura:</h1>

        <h3><span>{Math.round(data.data.feeds[0].field1)}</span></h3>
        
        <h1>Umidade:</h1>
        <h3><span>{Math.round(data.data.feeds[1].field1)}</span></h3>
      </div>
    </div>
  );
}

export default IoT;
