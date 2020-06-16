import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders ByteBank title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(`ByteBank`);
  expect(linkElement).toBeInTheDocument();
});
