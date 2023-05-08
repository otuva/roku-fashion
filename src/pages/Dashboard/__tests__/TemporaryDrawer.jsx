import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import TemporaryDrawer from '../TemporaryDrawer';
import userEvent from "@testing-library/user-event";

describe('TemporaryDrawer', () => {
    it('opens drawer when button is clicked', () => {
        render(<TemporaryDrawer />);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByText('Authentication')).toBeVisible();
    });

    // test('clicking on a drawer item selects it', () => {
    //     render(<TemporaryDrawer />);
    //     const item = screen.getByRole('listitem', {name: 'Analytics'});
    //     expect(item).not.toHaveClass('Mui-selected');
    //     userEvent.click(item);
    //     expect(item).toHaveClass('Mui-selected');
    // });
    //
});
