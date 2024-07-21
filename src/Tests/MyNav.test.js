// src/components/MyNav.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyNav from './MyNav';
import { ThemeProvider } from './ThemeContext';

test('renders MyNav component', () => {
  const searchTerm = '';
  const onSearchChange = jest.fn();
  const theme = 'light';
  const toggleTheme = jest.fn();

  const MockThemeContext = ({ children }) => (
    <ThemeProvider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProvider>
  );

  render(
    <MockThemeContext>
      <MyNav searchTerm={searchTerm} onSearchChange={onSearchChange} />
    </MockThemeContext>
  );

  // Check if the Navbar brand is rendered
  expect(screen.getByText('MyBookStore')).toBeInTheDocument();

  // Check if the Home link is rendered
  expect(screen.getByText('Home')).toBeInTheDocument();

  // Check if the About link is rendered
  expect(screen.getByText('About')).toBeInTheDocument();

  // Check if the search input is rendered
  expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();

  // Check if the toggle theme button is rendered
  expect(screen.getByText('Dark Mode')).toBeInTheDocument();
});
