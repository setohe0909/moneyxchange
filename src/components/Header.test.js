import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
