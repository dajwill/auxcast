import { useCallback, useState } from 'react';

const useSetManager = () => {
  const [queue, setQueue] = useState([] as any);
  const [playIndex, setPlayIndex] = useState(0);
  const addSong = useCallback((song) => {
    setQueue([...queue, song]);
  }, [queue]);
  const playSong = useCallback((index) => {
    setPlayIndex(index)
  }, [queue]);

  return {
    queue,
    playIndex,
    addSong,
    playSong,
  };
};

export default useSetManager;