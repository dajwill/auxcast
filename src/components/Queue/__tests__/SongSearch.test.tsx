import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../SongSearch';

describe('Song Search Component', () => {
  let submit;
  beforeEach(() => {
    submit = jest.fn();
  });

  it('renders', () => {
    const wrapper = shallow(<Search submit={submit} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls addSong only on enter', () => {
    const wrapper = mount(<Search submit={submit} />);
    const input = wrapper.find('input');
    input.simulate('keypress', { key: 'd' });
    input.simulate('keypress', { key: 'Enter' });
    expect(submit).toHaveBeenCalledTimes(1);
  });

  xit('it should not call submit if search value is empty', () => {});
});