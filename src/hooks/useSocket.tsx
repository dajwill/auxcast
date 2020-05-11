import { useEffect, useState } from 'react';
import io from 'socket.io-client';

type Socket = any | null;

const SOCKET = io('http://localhost:8080', {
  autoConnect: false,
});

const useSocket = (): Socket => {
  const [socket] = useState<Socket>(SOCKET);
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    socket.on('connect', () => setConnected(true))
    socket.connect();
  }, [])

  return connected ? socket : null;
}

export default useSocket;