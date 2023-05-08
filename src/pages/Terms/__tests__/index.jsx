import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Terms from '../index';

describe('Terms', () => {
    test('renders the page title', () => {
        render(<Terms />);
        const titleElement = screen.getByText('Terms');
        expect(titleElement).toBeInTheDocument();
    });
});
