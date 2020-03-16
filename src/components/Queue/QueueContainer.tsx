import React from 'react';
import useQueueManager from '../../hooks/useQueueManager';
import QueueList from './QueueList';
import Search from './SongSearch';

const QueueContainer = () => {
  const {
    queue,
    addSong
  } = useQueueManager();

  return (
    <>
      <Search submit={addSong} />
      <QueueList queue={queue} />
    </>
  )
};

export default QueueContainer;