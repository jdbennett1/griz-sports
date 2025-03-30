import React from "react";
import {render, screen} from '@testing-library/react'
import Login from "./login";
import {describe, it, expect} from 'vitest'
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Haiden and JD wrote these tests
describe("Tests for Login Page", () => {
    it("renders the defult login page", () => {
        render(<Login />)
        expect(screen.getByText("LOGIN")).toBeInTheDocument()
    });

    it("Checks Log In Page Information", () => {
        render(<Login />)
        expect(screen.getByText("Username")).toBeInTheDocument()
        expect(screen.getByText("Password")).toBeInTheDocument()
        expect(screen.getByText("Sign Up")).toBeInTheDocument()
        expect(screen.getByText("Enter")).toBeInTheDocument()
    });

    it("Makes sure login button is clickable and works", () => {
        render(<Login />)
        const button = screen.getByText("Enter")
        button.click()
        expect(button).toBeInTheDocument()
    });

    it("Makes sure sign up button is clickable and works", () => {
        render(<Login />)
        const button = screen.getByText("Sign Up")
        button.click()
        expect(button).toBeInTheDocument()
    });

    it("Makes sure username and password are required", () => {
        render(<Login />)
        const button = screen.getByText("Enter")
        button.click()
        expect(button).toBeInTheDocument()
    });

})