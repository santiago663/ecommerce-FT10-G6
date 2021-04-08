import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders author name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lokesh Prabakaran/i);
  expect(linkElement).toBeInTheDocument();
});