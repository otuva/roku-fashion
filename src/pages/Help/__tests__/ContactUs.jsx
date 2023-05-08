import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUs from '../ContactUs';
import '@testing-library/jest-dom';

describe('ContactUs', () => {
    it('renders title', () => {
        render(<ContactUs />);
        const title = screen.getByText(/Contact Us/i);
        expect(title).toBeInTheDocument();
    });

    it('renders the contact information correctly', () => {
        render(<ContactUs />);
        const emailButton = screen.getByRole('link', { name: 'info@example.com' });
        expect(emailButton).toBeInTheDocument();
        expect(emailButton).toHaveAttribute('href', 'mailto:info@example.com');

        const phoneButton = screen.getByRole('link', { name: '+1 000 000 000' });
        expect(phoneButton).toBeInTheDocument();
        expect(phoneButton).toHaveAttribute('href', 'tel:+1000000000');

        const addressButton = screen.getByRole('link', {
            name: '308 Negra Arroyo Lane, Albuquerque, New Mexico 87104',
        });
        expect(addressButton).toBeInTheDocument();
        expect(addressButton).toHaveAttribute(
            'href',
            'https://www.openstreetmap.org/#map=19/35.12613/-106.53700'
        );
    });
});
