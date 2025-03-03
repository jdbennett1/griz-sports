// jest-dom adds custom jest matchers for asserting on DOM nodes.
// Allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { vi } from 'vitest';

// Mock `window.matchMedia` to prevent errors in JSDOM
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {},
    removeListener: function () {}
  };
};

// Mock HTMLCanvasElement.getContext to prevent Mobiscroll errors
Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: vi.fn(),
});
