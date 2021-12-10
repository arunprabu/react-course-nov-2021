import { render, screen } from '@testing-library/react';
import App from './App'; // taking up App Comp for testing

test('renders Welcome text in document', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Hooks and Unit Testing!!!/i);
  expect(linkElement).toBeInTheDocument();
});

test('app is available', () => {
  expect(App).toBeTruthy();
});

