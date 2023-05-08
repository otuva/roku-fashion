import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Categories from '../Categories';

describe('Categories', () => {
    it('renders a Typography component with the correct text', () => {
        render(<Categories />);
        const typographyElement = screen.getByRole('heading', { level: 1 });
        expect(typographyElement).toHaveTextContent(
            'For all tastes and all desires'
        )
    });

    it('renders an ImageIconButton for each item in the images array', () => {
        render(<Categories />);
        const imageIconButtonElements = screen.getAllByRole('button');
        // check image width
        imageIconButtonElements.forEach((imageIconButtonElement) => {
            // just check if width exists doesn't matter the number
            expect(imageIconButtonElement.style.width).toBeTruthy();
        });

        expect(imageIconButtonElements).toHaveLength(9);
    });
});
