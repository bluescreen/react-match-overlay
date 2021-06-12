import { render, screen } from '@testing-library/react';
import Shiaijo from './Shiaijo';

test('renders shiaijo overlay', () => {
  render(<Shiaijo />);
  const linkElement = screen.getByText(/Tabelle/i);
  expect(linkElement).toBeInTheDocument();
});
