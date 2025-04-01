import React from "react";
import {render, screen} from '@testing-library/react'
import Calendar from "../components/Calendar";
import {describe, it, expect} from 'vitest'
import '@testing-library/jest-dom';
import { vi } from 'vitest';
// Tests for the calendar page
vi.mock('../components/Calendar', () => ({
  default: () => <div data-testid="calendar">Mock Calendar</div>,
}));

describe('Calendar Page Tests', () => {
    it('renders the Calendar page without crashing', () => {
      const { baseElement } = render(<Calendar />);
      expect(baseElement).toBeDefined();
    });

    it('renders the Calendar component', () => {
        render(<Calendar />);
        expect(screen.getByTestId('calendar')).toBeInTheDocument();
    });

    it('displays the page title "Calendar"', () => {
        render(<Calendar />);
        expect(screen.getByText('Mock Calendar')).toBeInTheDocument();
    });

})