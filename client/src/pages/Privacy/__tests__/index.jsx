import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Privacy from '../index';

describe('Privacy', () => {
    test('renders the page title', () => {
        render(<Privacy />);
        const titleElement = screen.getByText('Privacy');
        expect(titleElement).toBeInTheDocument();
    });
});
