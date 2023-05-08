import {render, screen} from '@testing-library/react';
// import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom'
import Intro from '../Intro';

describe('Intro component', () => {
    test('renders the heading', () => {
        render(<Intro />);
        const headingElement = screen.getByText(/Tailored just for you/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders the description', () => {
        render(<Intro />);
        const descriptionElement = screen.getByText(/Skilled team of designers/i);
        expect(descriptionElement).toBeInTheDocument();
    });

    // test('renders the "Join Now" button', () => {
    //     render(<Intro />);
    //     const buttonElement = screen.getByRole('link', {name: /Join Now/i});
    //     expect(buttonElement).toBeInTheDocument();
    // });

    test('renders the background image', () => {
        render(<Intro />);
        const imageElement = screen.getByAltText(/increase priority/i);
        expect(imageElement).toBeInTheDocument();
    });
});
