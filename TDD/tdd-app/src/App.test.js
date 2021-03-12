import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});

test('Checking placeholder', () => {
  render(<App />);
  const linkElement = screen.getAllByPlaceholderText(/your name/i);
  expect(linkElement).toBeInTheDocument();
})
