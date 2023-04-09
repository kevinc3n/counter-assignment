// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';

// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const initialCount = screen.getByTestId('count');
  const increment = screen.getByText('+');
  fireEvent.click(increment);
  expect(initialCount.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const initialCount = screen.getByTestId('count');
  const decrement = screen.getByText('-');
  fireEvent.click(decrement);
  expect(initialCount.textContent).toBe('-1');
});
