import React from 'react';
import renderer from 'react-test-renderer';
import StatElement from '../components/StatElement'

it('renders correctly', () => {
  const tree = renderer
    .create(<StatElement />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});