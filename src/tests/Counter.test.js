// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';

// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText('0');
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const initialCount = screen.getByText('0');
  const increment = screen.getByText('+');
  fireEvent.click(increment);
  expect(initialCount.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const initialCount = screen.getByText('0');
  const decrement = screen.getByText('-');
  fireEvent.click(decrement);
  expect(initialCount.textContent).toBe('-1');
});
