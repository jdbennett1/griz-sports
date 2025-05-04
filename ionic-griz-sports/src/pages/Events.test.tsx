// Events.test.tsx

// Mock react-router-dom first (hoisted, so must be at the top and use dynamic import)
import { vi } from 'vitest';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>();
  return {
    ...actual,
    useParams: vi.fn(),
    useLocation: vi.fn(),
  };
});

// Ionic component mocks for JSDOM
vi.mock('@ionic/react', async () => {
  const React = await import('react');
  return {
    IonPage: ({ children }: any) => <div>{children}</div>,
    IonHeader: ({ children }: any) => <header>{children}</header>,
    IonToolbar: ({ children }: any) => <div>{children}</div>,
    IonTitle: ({ children }: any) => <h1>{children}</h1>,
    IonContent: ({ children }: any) => <main>{children}</main>,
    IonButtons: ({ children }: any) => <div>{children}</div>,
    IonButton: ({ children }: any) => <button>{children}</button>,
  };
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import EventsPage from './Events';

import { useParams, useLocation } from 'react-router-dom';

const mockEvent = {
  id: 1,
  title: 'Griz Championship',
  time: '7:00 PM',
  location: 'Washington-Grizzly Stadium',
};

describe('Events Page', () => {
  it('displays event details when event data is provided', () => {
    (useParams as vi.Mock).mockReturnValue({ id: '1' });
    (useLocation as vi.Mock).mockReturnValue({ state: { event: mockEvent } });

    render(
      <MemoryRouter initialEntries={['/events/1']}>
        <Routes>
          <Route path="/events/:id" element={<EventsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Griz Sports')).toBeInTheDocument();
    expect(screen.getByText('Griz Championship')).toBeInTheDocument();
    expect(screen.getByText('Time: 7:00 PM')).toBeInTheDocument();
    expect(screen.getByText('Location: Washington-Grizzly Stadium')).toBeInTheDocument();
    expect(screen.getByText('Location Container (Map API)')).toBeInTheDocument();
    expect(screen.getByText('Back')).toBeInTheDocument();
  });

  it('displays fallback message when no event data is provided', () => {
    (useParams as vi.Mock).mockReturnValue({ id: '1' });
    (useLocation as vi.Mock).mockReturnValue({ state: undefined });

    render(
      <MemoryRouter initialEntries={['/events/1']}>
        <Routes>
          <Route path="/events/:id" element={<EventsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Griz Sports')).toBeInTheDocument();
    expect(
      screen.getByText('Event not found. Try accessing this page from the home screen.')
    ).toBeInTheDocument();
  });
});
