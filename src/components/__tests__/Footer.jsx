import React from 'react';
import {render} from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom'
import {MemoryRouter} from 'react-router-dom';

describe('Footer', () => {
	it('renders the Footer component without errors', () => {
		render(<Footer/>, {wrapper: MemoryRouter});
	});

	it('renders the Address section correctly', () => {
		const {getByText} = render(<Footer/>, {wrapper: MemoryRouter});
		const addressTitle = getByText(/Address/i);
		expect(addressTitle).toBeInTheDocument();
		const addressText = getByText(/308 Negra Arroyo Ln. ABQ New Mexico. 87104/i);
		expect(addressText).toBeInTheDocument();
	});

	it('renders the Legal section correctly', () => {
		const {getByText} = render(<Footer/>, {wrapper: MemoryRouter});
		const legalTitle = getByText(/Legal/i);
		expect(legalTitle).toBeInTheDocument();
		const termsButton = getByText(/Terms/i);
		expect(termsButton).toBeInTheDocument();
		const privacyButton = getByText(/Privacy/i);
		expect(privacyButton).toBeInTheDocument();
	});

	it('renders the social buttons correctly', () => {
		const {getByLabelText} = render(<Footer/>, {wrapper: MemoryRouter});
		const facebookButton = getByLabelText(/FacebookIcon/i);
		expect(facebookButton).toBeInTheDocument();
		const twitterButton = getByLabelText(/TwitterIcon/i);
		expect(twitterButton).toBeInTheDocument();
		const instagramButton = getByLabelText(/InstagramIcon/i);
		expect(instagramButton).toBeInTheDocument();
	});
});
