import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World', () => {
  const renderResponse = render(<App />);
  const linkElement = renderResponse.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});

test('find input with placeholder', () => {
  const renderResponse = render(<App />);
  const worldElement = renderResponse.getByPlaceholderText(/Your Name/i);
  expect(worldElement).toBeInTheDocument();
});

test('find Name', () => {
  const renderResponse = render(<App />);
  const worldElement = renderResponse.getByText(/Mohib ismail/i);
  expect(worldElement).toBeInTheDocument();
});
