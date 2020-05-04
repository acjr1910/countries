import React from 'react';
import { render } from '@testing-library/react';
import Countries from '../index';

test('renders without crashing', () => {
  const { getByText } = render(<Countries />);
  expect(getByText('Countries')).toBeInTheDocument();
});
