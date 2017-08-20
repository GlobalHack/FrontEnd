import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import { shallow } from 'enzyme';

it.skip('renders without crashing', () => {
  const wrapper = shallow(<Footer />);
});
