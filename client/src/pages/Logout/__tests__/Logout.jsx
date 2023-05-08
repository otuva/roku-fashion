// import React from 'react';
// import { render, waitFor } from '@testing-library/react';
// import Cookies from 'universal-cookie';
// import Logout from './Logout';
// import { CircularProgress } from '@mui/material';

// jest.mock('universal-cookie');

// describe('Logout', () => {
// 	beforeEach(() => {
// 		Cookies.mockClear();
// 		window.location.href = '/';
// 	});

// 	it('should remove token cookie and redirect to home page', async () => {
// 		const { container } = render(<Logout />);

// 		expect(container).toEqual(<CircularProgress />);

// 		await waitFor(() => {
// 			expect(Cookies).toHaveBeenCalledTimes(1);
// 			expect(Cookies).toHaveBeenCalledWith();
// 			expect(Cookies.prototype.remove).toHaveBeenCalledTimes(1);
// 			expect(Cookies.prototype.remove).toHaveBeenCalledWith('token', { path: '/' });
// 			expect(window.location.href).toEqual('/');
// 		});
// 	});
// });
