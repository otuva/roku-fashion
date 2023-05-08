import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import Content from '../Content';

describe('Content', () => {
    it('renders the page title', () => {
        render(<Content />);
        expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
    });

    it('allows users to search for users by email address, phone number, or UID', () => {
        render(<Content />);
        const searchInput = screen.getByPlaceholderText(/search by email address, phone number, or user uid/i);
        userEvent.type(searchInput, 'test@example.com');
        expect(searchInput).toHaveValue('test@example.com');
    });

    it('renders the "Add user" button', () => {
        render(<Content />);
        expect(screen.getByRole('button', { name: /add user/i })).toBeInTheDocument();
    });

    it('renders the "Reload" button', () => {
        render(<Content />);
        expect(screen.getByRole('button', { name: /reload/i })).toBeInTheDocument();
    });

    it('displays a message when there are no users for the project', () => {
        render(<Content />);
        expect(screen.getByText(/no users for this project yet/i)).toBeInTheDocument();
    });
});
