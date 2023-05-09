import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import {MemoryRouter} from 'react-router-dom';
import {AuthContextProvider} from '../../../context/AuthContext';
import SignIn from '../SignIn';

describe('SignIn', () => {
    beforeEach(() => {
        render(
            <AuthContextProvider>
                <MemoryRouter>
                    <SignIn/>
                </MemoryRouter>
            </AuthContextProvider>
        );
    });

    it('renders text fields and buttons', () => {
        // Find form inputs
        const emailInput = screen.getByLabelText('Email Address');
        const passwordInput = screen.getByLabelText('Password');
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();

        // Find buttons
        const signInButton = screen.getByText('Sign in');
        const signUpButton = screen.getByText('Not a member yet?');
        const forgotPasswordButton = screen.getByText('Forgot password?');
        expect(signInButton).toBeInTheDocument();
        expect(signUpButton).toBeInTheDocument();
        expect(forgotPasswordButton).toBeInTheDocument();
    });

    it('should display email error when submitting an empty form', async () => {
        const signInButton = screen.getByRole('button', {name: /sign in/i});
        fireEvent.click(signInButton);
        await waitFor(() => {
            const emailErrorText = screen.getByText('Email is required');
            expect(emailErrorText).toBeInTheDocument();
        });
    });

    it('should display password error when submitting an empty form', async () => {
        const signInButton = screen.getByRole('button', {name: /sign in/i});
        fireEvent.click(signInButton);
        await waitFor(() => {
            const passwordErrorText = screen.getByText('Password is required');
            expect(passwordErrorText).toBeInTheDocument();
        });
    });

    it('should display error when submitting an invalid email', async () => {
        const emailInput = screen.getByLabelText('Email Address');
        fireEvent.change(emailInput, {target: {value: 'invalid email'}});
        const resetButton = screen.getByRole('button', {name: /sign in/i});
        fireEvent.click(resetButton);
        await waitFor(() => {
            const errorText = screen.getByText('Must be a valid email');
            expect(errorText).toBeInTheDocument();
        });
    });
});
