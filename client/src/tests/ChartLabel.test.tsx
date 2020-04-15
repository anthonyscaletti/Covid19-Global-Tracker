import React from 'react';
import renderer from 'react-test-renderer';

import ChartLabel from '../components/ChartLabel';

it('renders correctly', () => {
  const tree = renderer
    .create(<ChartLabel />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});