import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import FAQ from '../FAQ';

describe('ControlledAccordions', () => {
    it('renders the title', () => {
        render(
            <MemoryRouter>
                <FAQ />
            </MemoryRouter>
        );
        const title = screen.getByText('Frequently Asked Questions');
        expect(title).toBeInTheDocument();
    });

    it('Accordion expands and shows details when clicked', () => {
        render(
            <MemoryRouter>
                <FAQ />
            </MemoryRouter>
        );
        const generalSettingsAccordion = screen.getByRole('button', { name: /general settings/i });
        fireEvent.click(generalSettingsAccordion);
        expect(screen.getByText(/Nulla facilisi/i)).toBeInTheDocument();
    });

    it('Accordion headers are displayed correctly', () => {
        render(
            <MemoryRouter>
                <FAQ />
            </MemoryRouter>
        );
        expect(screen.getByRole('button', { name: /general settings/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /users/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /advanced settings/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /personal data/i })).toBeInTheDocument();
    });
});