import { render, screen } from '@testing-library/react';
import HowItWorks from '../HowItWorks';
import '@testing-library/jest-dom'
import {MemoryRouter} from "react-router-dom";

describe('HowItWorks component', () => {
    it('renders the heading', () => {
        render(<MemoryRouter><HowItWorks /></MemoryRouter>);
        expect(screen.getByRole('heading', { name: /how it works/i })).toBeInTheDocument();
    });

    it('renders three sections with numbered steps', () => {
        render(<MemoryRouter><HowItWorks /></MemoryRouter>);
        const steps = screen.getAllByRole('heading', { level: 2 });
        expect(steps).toHaveLength(3);
        expect(steps[0]).toHaveTextContent('You decide');
        expect(steps[1]).toHaveTextContent('We perform our magic');
        expect(steps[2]).toHaveTextContent('Your imaginations will be reality');
    });

    it('renders the correct number of sections', () => {
        render(<MemoryRouter><HowItWorks /></MemoryRouter>);

        const steps = screen.getAllByRole('heading', { level: 3 });
        expect(steps).toHaveLength(3);
    });

    it('renders a button to sign up', () => {
        render(<MemoryRouter><HowItWorks /></MemoryRouter>);
        const button = screen.getByRole('link', { name: 'Join now' });
        expect(button).toBeInTheDocument();
    });
});
