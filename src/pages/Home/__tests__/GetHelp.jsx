import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import GetHelp from '../GetHelp';

describe('GetHelp component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <GetHelp/>
            </MemoryRouter>
        );
    });

    it('renders "Need help?" button', () => {
        const helpButton = screen.getByRole('link', {name: 'Need help?'});
        expect(helpButton).toBeInTheDocument();
    });

    it('renders "We are here to help. Get in touch!" subtitle', () => {
        const subtitle = screen.getByText('We are here to help. Get in touch!');
        expect(subtitle).toBeInTheDocument();
    });

    it('renders support icon', () => {
        const supportIcon = screen.getByTestId('SupportIcon');
        expect(supportIcon).toBeInTheDocument();
    });
});
