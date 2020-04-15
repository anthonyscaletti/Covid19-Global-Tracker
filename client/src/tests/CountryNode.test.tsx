import React from 'react';
import renderer from 'react-test-renderer';

import CountryNode from '../components/CountryNode';

it('renders correctly', () => {
  const tree = renderer
    .create(<CountryNode />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});