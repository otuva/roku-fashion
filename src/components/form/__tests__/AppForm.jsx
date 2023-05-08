import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import AppForm from '../AppForm';

describe('AppForm', () => {
    it('should render child components', () => {
        render(
            <AppForm>
                <div data-testid="child-component" />
            </AppForm>
        );

        const childComponent = screen.getByTestId('child-component');
        expect(childComponent).toBeInTheDocument();
    });
});
