import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Locations from './locations'; // Import the component being tested

// Group of tests for the Locations page
describe("Locations Page", () => {

  // Test: Verifies that the page header title is rendered
  it("renders the header title", () => {
    render(<Locations />);
    expect(screen.getByText("Griz Sports")).toBeInTheDocument();
  });

  // Test: Checks that all navigation buttons are visible
  it("renders all navigation buttons", () => {
    render(<Locations />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Game Schedules")).toBeInTheDocument();
    expect(screen.getByText("Locations")).toBeInTheDocument();
    expect(screen.getByText("Calendar")).toBeInTheDocument();
  });

  // Test: Ensures all location cards have the correct titles
  it("renders all location cards with correct titles", () => {
    render(<Locations />);
    expect(screen.getByText("Campus")).toBeInTheDocument();
    expect(screen.getByText("Dornblaser")).toBeInTheDocument();
    expect(screen.getByText("The Peak")).toBeInTheDocument();
  });

  // Test: Validates that each card contains a subtitle and a description
  it("renders address subtitles and location descriptions", () => {
    render(<Locations />);
    const subtitles = screen.getAllByText("address"); // Each card has a subtitle "address"
    const descriptions = screen.getAllByText("Events held at this location"); // Each card has a description

    expect(subtitles).toHaveLength(3); // There should be 3 subtitles
    expect(descriptions).toHaveLength(3); // There should be 3 descriptions
  });
});
