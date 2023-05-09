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
        const generalSettingsAccordion = screen.getByRole('button', { name: /what is bespoke fashion/i });
        fireEvent.click(generalSettingsAccordion);
        expect(screen.getByText(/Bespoke fashion refers to custom-made clothing/i)).toBeInTheDocument();
    });

    it('Accordion headers are displayed correctly', () => {
        render(
            <MemoryRouter>
                <FAQ />
            </MemoryRouter>
        );
        expect(screen.getByRole('button', { name: /What is bespoke fashion/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /What is the difference between bespoke/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /How does the bespoke process work/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /What fabrics do you offer/i })).toBeInTheDocument();
    });
});