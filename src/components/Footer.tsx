import React from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  && {
    position: fixed !important;
    bottom: 0;
    width: 100%;
    border-radius: 0;
    min-height: 60px;
  }
`;

const MenuItem = styled(Menu.Item)`
  &&&& {
    align-items: center;
    flex-grow: 1;
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <StyledMenu>
      <MenuItem
        name='editorials'
        active={true}
      >
        Home
      </MenuItem>

      <MenuItem
        name='reviews'
        active={false}
      >
        Explore
      </MenuItem>

      <MenuItem
        name='upcomingEvents'
        active={false}
      >
        Library
      </MenuItem>
    </StyledMenu>
  )
};

export default Footer;
