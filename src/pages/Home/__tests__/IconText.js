import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import IconText from '../IconText';

describe('IconText component', () => {

    beforeEach(() => {
        render(
            <MemoryRouter>
                <IconText/>
            </MemoryRouter>
        );
    });

    it('renders "Our team is here" section', () => {
        // const measureTapeIcon = screen.getByRole('img', { name: 'MeasureTape' });
        const ourTeamSection = screen.getByRole('heading', { name: 'Our team is here' });
        const ourTeamContent = screen.getByText('Whether you have a specific design in mind or need some guidance in creating your perfect outfit, our team is here to help.');
        // expect(measureTapeIcon).toBeInTheDocument();
        expect(ourTeamSection).toBeInTheDocument();
        expect(ourTeamContent).toBeInTheDocument();
    });

    it('renders "Finest materials" section', () => {
        // const scissorsIcon = screen.getByRole('img', { name: 'Scissors' });
        const finestMaterialsSection = screen.getByRole('heading', { name: 'Finest materials' });
        const finestMaterialsContent = screen.getByText('We use only the finest materials and fabrics to create our custom outfits, ensuring that they are not only beautiful but also durable and long-lasting.');
        // expect(scissorsIcon).toBeInTheDocument();
        expect(finestMaterialsSection).toBeInTheDocument();
        expect(finestMaterialsContent).toBeInTheDocument();
    });

    it('renders "Your perfect outfit" section', () => {
        // const sewingNeedleIcon = screen.getByRole('desc', { name: 'SewingNeedle' });
        const perfectOutfitSection = screen.getByRole('heading', { name: 'Your perfect outfit' });
        const perfectOutfitContent = screen.getByText('Whether you are looking for a formal suit, a stunning dress, or a casual outfit, we can help you design and craft your perfect outfit');
        // expect(sewingNeedleIcon).toBeInTheDocument();
        expect(perfectOutfitSection).toBeInTheDocument();
        expect(perfectOutfitContent).toBeInTheDocument();
    });
});
