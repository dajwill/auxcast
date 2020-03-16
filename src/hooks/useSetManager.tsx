import { useCallback, useState } from 'react';

const useSetManager = () => {
  const [queue, setQueue] = useState([]);
  const addSong = useCallback((song) => {
    setQueue([...queue, song]);
  }, [queue])
  return {
    queue,
    addSong,
  };
};

export default useSetManager;