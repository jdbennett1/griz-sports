import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock child components to avoid unnecessary rendering
vi.mock('../components/EventContainer', () => ({
  default: () => <div data-testid="event-container">Mock EventContainer</div>,
}));
vi.mock('../components/Calendar', () => ({
  default: () => <div data-testid="calendar">Mock Calendar</div>,
}));
vi.mock('../components/SearchSortContainer', () => ({
  default: () => <div data-testid="search-sort">Mock SearchSortContainer</div>,
}));

describe('Home Page Tests', () => {
  it('renders the Home page without crashing', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeDefined();
  });

  it('displays the page title "Griz Sports"', () => {
    render(<Home />);
    expect(screen.getByText('Griz Sports')).toBeInTheDocument();
  });

  it('shows navigation buttons: "Game Schedules" and "Locations"', () => {
    render(<Home />);

    //Now using `getByTestId()` instead of `getByText()` to avoid duplicate matches
    expect(screen.getByTestId('game-schedules-button')).toBeInTheDocument();
    expect(screen.getByTestId('locations-button')).toBeInTheDocument();
  });

  it('renders the EventContainer component', () => {
    render(<Home />);
    expect(screen.getByTestId('event-container')).toBeInTheDocument();
  });

  it('renders the Calendar component', () => {
    render(<Home />);
    expect(screen.getByTestId('calendar')).toBeInTheDocument();
  });

  it('renders the SearchSortContainer component', () => {
    render(<Home />);
    expect(screen.getByTestId('search-sort')).toBeInTheDocument();
  });
});
