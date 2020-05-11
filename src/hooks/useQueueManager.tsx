import { useCallback, useEffect, useState } from 'react';
import useSocket from './useSocket';
import { AuxEvent } from '../constants';

const useSetManager = () => {
  const socket = useSocket();
  const [queue, setQueue] = useState([] as any);
  const [playIndex, setPlayIndex] = useState(0);
  const addSong = useCallback((song) => {
    console.log('socket', socket);
    if (socket) socket.emit(AuxEvent.ADD_SONG, song);
  }, [queue, socket]);
  const playSong = useCallback((index) => {
    setPlayIndex(index)
  }, [queue]);

  useEffect(() => {
    if (!socket) return;
    socket.on(AuxEvent.EMIT_QUEUE, (queue: any) => {
      console.log(queue);
      setQueue(queue);
    })
  }, [socket])

  return {
    queue,
    playIndex,
    addSong,
    playSong,
  };
};

export default useSetManager;