import { useEffect, useState } from 'react';

import { thingspeakAPIConfig } from '../utils/thingspeak-config';

export default function useIoT() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    thingspeakAPIConfig({
      method: 'get',
    })
      .then((res) => {
        // Recuperando dados e armazenando na variavel data
        setData(res);
      })
      .catch((e) => {
        // Armazenando erro caso ele ocorra
        setError(e);
      })
      .finally(() => {
        // Ao finalizar todos os processos
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
}
