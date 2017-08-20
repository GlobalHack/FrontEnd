import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

it.skip('renders without crashing', () => {
  const wrapper = shallow(<Header />);
});
