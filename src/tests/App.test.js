import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// test user can see the calculator
test('renders calculator', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  userEvent.click(screen.getByRole('button', { name: /calculator/i }));
  expect(screen.getByText(/Let's do some math!/i)).toBeInTheDocument();
});
