import React, { useRef } from 'react';
import { Input } from 'semantic-ui-react';
import get from 'lodash/get';

const SearchInput = ({ submit }) => {
  const ref = useRef();
  const handleSubmit = (event) => {
    if (event.key !== 'Enter') return;
    // super gross
    const title = get(ref, 'current.inputRef.current.value');
    submit({ title })
  };
  return <Input type='search' onKeyPress={handleSubmit} ref={ref} />
};

export default SearchInput;