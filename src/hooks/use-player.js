import { useState, useEffect } from 'react';

import { baseAPICconfig } from '../utils/api-config';

export function usePlayer(jogador, time) {
  const [data, setData] = useState([]);

  useEffect(() => {
    baseAPICconfig
      .get('/searchplayers.php', {
        params: {
          p: jogador,
          t: time ?? '',
        },
      })
      .then((res) => setData(res.data.player));
  }, [jogador, time]);

  return { data };
}
