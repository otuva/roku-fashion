import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom'
import Intro from '../Intro';

describe('Intro component', () => {

    beforeEach(() => {
        render(<Intro/>, {wrapper: MemoryRouter});
    })

    it('renders the heading', () => {
        const headingElement = screen.getByText(/Tailored just for you/i);
        expect(headingElement).toBeInTheDocument();
    });

    it('renders the description', () => {
        const descriptionElement = screen.getByText(/Skilled team of designers/i);
        expect(descriptionElement).toBeInTheDocument();
    });

    it('renders the "Join Now" button', () => {
        const buttonElement = screen.getByRole('link', {name: /Join Now/i});
        expect(buttonElement).toBeInTheDocument();
    });

    it('renders the background image', () => {
        const imageElement = screen.getByAltText(/increase priority/i);
        expect(imageElement).toBeInTheDocument();
    });
});
