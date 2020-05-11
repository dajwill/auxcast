import React, { useRef } from 'react';
import { Input } from 'semantic-ui-react';
import get from 'lodash/get';
import styled from 'styled-components';

interface SearchProps {
  submit: Function;
}

const SearchBox = styled(Input)`
  margin: 5px auto;
  width: 95%;
  display: flex !important;
`;

const SearchInput = ({ submit }: SearchProps) => {
  const ref = useRef(null);
  const handleSubmit = (event: any) => {
    if (event.key !== 'Enter') return;
    // super gross
    const title = get(ref, 'current.inputRef.current.value');
    submit({ title })
  };
  return <SearchBox type='search' onKeyPress={handleSubmit} ref={ref} placeholder={'Search'} />
};

export default SearchInput;