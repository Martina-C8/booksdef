// src/components/AllTheBooks.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AllTheBooks from './AllTheBooks';

// Mock data for testing
const books = [
  { asin: '1', title: 'Book One' },
  { asin: '2', title: 'Book Two' },
  { asin: '3', title: 'Book Three' }
];

test('renders the correct number of book cards', () => {
  const searchTerm = '';

  render(<AllTheBooks searchTerm={searchTerm} books={books} />);

  // Check if the correct number of SingleBook components are rendered
  const bookCards = screen.getAllByTestId('single-book-card');
  expect(bookCards).toHaveLength(books.length);
});
