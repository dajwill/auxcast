import React from 'react';
import { List } from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import styled from 'styled-components';

const ListItem = styled(List.Item)`
  &&& {
    display: flex;
    line-height: 2.5em !important;
    height: 3.5em;
    padding: 5px !important;
    align-items: center;

    p {
      display: inline-block;
      margin: 0;

      &.runtime {
        margin-left: auto;
      }
    }
  }
`;

const QueueList = ({ queue = [] }) => {
  return (
    <>
      {
        isEmpty(queue) ? <p>No songs.</p> : (
          <List divided>
            {queue.map(({ title }) => (
              <ListItem>
                <p>{title}</p>
                <p className="runtime">3:15</p>
              </ListItem>
            ))}
          </List>
        )
      }
    </>
  );
};

export default QueueList;