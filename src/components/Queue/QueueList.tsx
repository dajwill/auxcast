import React from 'react';
import { Header, List } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

const QueueList = ({ queue = [] }) => {
  return (
    <>
      <Header as="h1">
        This is a Queue playlist
      </Header>
      {
        isEmpty(queue) ? <p>No songs.</p> : (
          <List divided>
            {queue.map(({ title }) => <List.Item>{title}</List.Item>)}
          </List>
        )
      }
    </>
  );
};

export default QueueList;