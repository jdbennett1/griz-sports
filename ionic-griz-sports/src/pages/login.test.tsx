import React from "react";
import {render, screen} from '@testing-library/react'
import Login from "./login";
import {describe, it, expect} from 'vitest'
import '@testing-library/jest-dom';
import { vi } from 'vitest';

describe("login", () => {

    it("renders the defult login page", () => {
        render(<Login />)
        expect(screen.getByText("LOGIN")).toBeInTheDocument()
    });

    it(" ")

})