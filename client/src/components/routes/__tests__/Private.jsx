// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../../../context/AuthContext';
// import Private from '../Private';
//
// describe('Private', () => {
// 	const MockComponent = () => <div data-testid="mock-component" />;
//
// 	it('should render the given component if user is authenticated', () => {
// 		const authContextValue = [true];
// 		render(
// 			<AuthContext.Provider value={authContextValue}>
// 				<Private Component={<MockComponent />} />
// 			</AuthContext.Provider>
// 		);
//
// 		const mockComponent = screen.getByTestId('mock-component');
// 		expect(mockComponent).toBeInTheDocument();
// 	});
//
// 	it('should redirect to sign-in page if user is not authenticated', () => {
// 		const authContextValue = [false];
// 		render(
// 			<AuthContext.Provider value={authContextValue}>
// 				<Private Component={<MockComponent />} />
// 			</AuthContext.Provider>
// 		);
//
// 		expect(screen).toEqual(<Navigate to="/sign-in" />);
// 	});
// });
