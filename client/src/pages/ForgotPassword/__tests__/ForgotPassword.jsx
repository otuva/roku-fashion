import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import ForgotPassword from '../ForgotPassword';

describe('ForgotPassword', () => {

    beforeEach(() => {
        render(
            <MemoryRouter>
                <ForgotPassword/>
            </MemoryRouter>
        );
    });

    it('renders correct title', () => {
        const title = screen.getByText(/Forgot your password?/i);
        expect(title).toBeInTheDocument();
    });

    it('should display a form with email field and reset button', async () => {
        const emailInput = screen.getByLabelText('Email Address');
        expect(emailInput).toBeInTheDocument();
        const resetButton = screen.getByRole('button', {name: /reset/i});
        expect(resetButton).toBeInTheDocument();
    });

    it('should display error when submitting an invalid email', async () => {
        const emailInput = screen.getByLabelText('Email Address');
        fireEvent.change(emailInput, {target: {value: 'invalid email'}});
        const resetButton = screen.getByRole('button', {name: /reset/i});
        fireEvent.click(resetButton);
        await waitFor(() => {
            const errorText = screen.getByText('Must be a valid email');
            expect(errorText).toBeInTheDocument();
        });
    });

    it('should display error when submitting an empty form', async () => {
        const resetButton = screen.getByRole('button', {name: /reset/i});
        fireEvent.click(resetButton);
        await waitFor(() => {
            const errorText = screen.getByText('Email is required');
            expect(errorText).toBeInTheDocument();
        });
    });

    // test('should display success message when submitting a valid email', async () => {
    //     const mockPost = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    //         ok: true,
    //         json: jest.fn().mockResolvedValueOnce({message: 'Success'}),
    //     });
    //
    //     const emailInput = screen.getByLabelText('Email Address');
    //     fireEvent.change(emailInput, {target: {value: 'validemail@example.com'}});
    //     const resetButton = screen.getByRole('button', {name: /reset/i});
    //     fireEvent.click(resetButton);
    //     await waitFor(() => {
    //         const successText = screen.getByText('Success');
    //         expect(successText).toBeInTheDocument();
    //     });
    //     expect(mockPost).toHaveBeenCalledWith('/api/auth/reset', {
    //         email: 'validemail@example.com',
    //     });
    //     mockPost.mockRestore();
    // });

    // test('should display error message when submitting an invalid email', async () => {
    //     const mockPost = jest.spyOn(global, 'fetch').mockRejectedValueOnce({
    //         response: {ok: false, json: jest.fn().mockResolvedValueOnce({message: 'Error'})},
    //     });
    //     const {getByLabelText, getByRole, getByText} = render(
    //
    //     const emailInput = screen.getByLabelText('Email Address');
    //     fireEvent.change(emailInput, {target: {value: 'invalid email'}});
    //     const resetButton = screen.getByRole('button', {name: /reset/i});
    //     fireEvent.click(resetButton
});