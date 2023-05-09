import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import {MemoryRouter} from 'react-router-dom';
import {AuthContextProvider} from '../../../context/AuthContext';
import SignUp from '../SignUp';

describe('SignUp', () => {
	beforeEach(() => {
		render(
			<AuthContextProvider>
				<MemoryRouter>
					<SignUp/>
				</MemoryRouter>
			</AuthContextProvider>
		);
	});

	it('renders text fields and buttons', () => {
		// Find form inputs
		const emailInput = screen.getByLabelText('Email Address');
		const passwordInput = screen.getByLabelText('Password');
		const confirmPasswordInput = screen.getByLabelText('Confirm Password');
		const invitationCodeInput = screen.getByLabelText('Invitation Code');
		const termsCheckbox = screen.getByRole('checkbox');
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(confirmPasswordInput).toBeInTheDocument();
		expect(invitationCodeInput).toBeInTheDocument();
		expect(termsCheckbox).toBeInTheDocument();

		// Find buttons
		const signUpButton = screen.getByText('Sign up');
		const signInButton = screen.getByText('Already have an account?');
		const termsButton = screen.getByText('I have read the Terms');
		expect(signUpButton).toBeInTheDocument();
		expect(signInButton).toBeInTheDocument();
		expect(termsButton).toBeInTheDocument();
	});

	it('should display email error when submitting an empty form', async () => {
		const signInButton = screen.getByRole('button', {name: /sign up/i});
		fireEvent.click(signInButton);
		await waitFor(() => {
			const emailErrorText = screen.getByText('Email is required');
			expect(emailErrorText).toBeInTheDocument();
		});
	});

	it('should display error when submitting an invalid email', async () => {
		const emailInput = screen.getByLabelText('Email Address');
		fireEvent.change(emailInput, {target: {value: 'invalid email'}});
		const resetButton = screen.getByRole('button', {name: /sign up/i});
		fireEvent.click(resetButton);
		await waitFor(() => {
			const errorText = screen.getByText('Must be a valid email');
			expect(errorText).toBeInTheDocument();
		});
	});

	it('should display password error when submitting an empty form', async () => {
		const signInButton = screen.getByRole('button', {name: /sign up/i});
		fireEvent.click(signInButton);
		await waitFor(() => {
			const passwordErrorText = screen.getByText(/a password with.*required/i);
			expect(passwordErrorText).toBeInTheDocument();
		});
	});

	it('should display confirm password error when passwords do not match', async () => {
		const passwordInput = screen.getByLabelText('Password');
		fireEvent.change(passwordInput, {target: {value: 'password'}});
		const confirmPasswordInput = screen.getByLabelText('Confirm Password');
		fireEvent.change(confirmPasswordInput, {target: {value: 'password1'}});
		const signUpButton = screen.getByRole('button', {name: /sign up/i});
		fireEvent.click(signUpButton);
		await waitFor(() => {
			const confirmPasswordErrorText = screen.getByText('Passwords must match');
			expect(confirmPasswordErrorText).toBeInTheDocument();
		});
	});

	it('should display terms error when terms are not accepted', async () => {
		const termsCheckbox = screen.getByRole('checkbox');
		// fireEvent.click(termsCheckbox);
		const signUpButton = screen.getByRole('button', {name: /sign up/i});
		fireEvent.click(signUpButton);
		await waitFor(() => {
			const termsErrorText = screen.getByText('This field must be checked');
			expect(termsErrorText).toBeInTheDocument();
		});
	});
});
