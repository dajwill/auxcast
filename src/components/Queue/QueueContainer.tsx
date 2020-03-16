import React from 'react';
import useSetManager from '../../hooks/useSetManager';
import QueueList from './QueueList';
import Search from './SongSearch';

const QueueContainer = () => {
  const {
    queue,
    addSong
  } = useSetManager();

  return (
    <>
      <Search submit={addSong} />
      <QueueList queue={queue} />
    </>
  )
};

export default QueueContainer;