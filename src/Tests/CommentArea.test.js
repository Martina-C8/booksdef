// src/components/CommentArea.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CommentArea from './CommentArea';

// Mock data for testing
const bookId = { asin: '123' };
const comments = [
  { _id: '1', comment: 'Great book!', rate: 5, elementId: '123' },
  { _id: '2', comment: 'Not bad', rate: 3, elementId: '123' }
];

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(comments)
  })
);

test('renders CommentArea component', async () => {
  render(<CommentArea bookId={bookId} commenti="si" />);

  // Check if the Spinner is displayed initially
  expect(screen.getByRole('status')).toBeInTheDocument();

  // Wait for the comments to be fetched and rendered
  await waitFor(() => {
    expect(screen.getByText('Great book!')).toBeInTheDocument();
    // expect(screen.getByText('Not bad')).toBeInTheDocument();
  });

  // Check if the AddComment component is rendered
  expect(screen.getByText('Add Comment')).toBeInTheDocument();
});

test('renders error message on fetch failure', async () => {
  // Mock fetch failure
  global.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: false
    })
  );

  render(<CommentArea bookId={bookId} commenti="si" />);

  // Wait for the error message to be displayed
  await waitFor(() => {
    expect(screen.getByText('Errore nel recupero delle recensioni')).toBeInTheDocument();
  });
});
