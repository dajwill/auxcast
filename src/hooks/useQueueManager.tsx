import { useCallback, useEffect, useState } from 'react';
import useSocket from './useSocket';

const useSetManager = () => {
  const socket = useSocket();
  const [queue, setQueue] = useState([] as any);
  const [playIndex, setPlayIndex] = useState(0);
  const addSong = useCallback((song) => {
    setQueue([...queue, song]);
  }, [queue]);
  const playSong = useCallback((index) => {
    setPlayIndex(index)
  }, [queue]);

  useEffect(() => {
    console.log('socket', socket);
  }, [socket])

  return {
    queue,
    playIndex,
    addSong,
    playSong,
  };
};

export default useSetManager;