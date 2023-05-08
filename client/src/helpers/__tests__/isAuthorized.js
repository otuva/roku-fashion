import axios from 'axios';
import Cookies from "universal-cookie";
import isAuthorized from '../isAuthorized';

jest.mock('axios');

describe('isAuthorized', () => {
    it('should return true when API call returns status true', async () => {
        const mockCookies = new Cookies();
        mockCookies.set('token', 'fakeToken');

        const mockApiResponse = {
            response : {
                data: {
                    status: true
                }
            }
        };
        axios.get.mockResolvedValueOnce(mockApiResponse);

        const result = await isAuthorized();

        expect(result).toEqual(true);
        expect(axios.get).toHaveBeenCalledWith('/api/auth/authenticated', {
            headers: {
                'Authorization': `Bearer ${mockCookies.get('token')}`,
            },
        });
    });

    it('should return false and remove token when API call throws an error with 400 status code', async () => {
        const mockCookies = new Cookies();
        mockCookies.set('token', 'fakeToken');

        const mockErrorResponse = {
            response: {
                status: 400,
            },
        };
        axios.get.mockRejectedValueOnce(mockErrorResponse);

        const result = await isAuthorized();

        expect(result).toEqual(false);
        expect(mockCookies.get('token')).toBeUndefined();
        expect(axios.get).toHaveBeenCalledWith('/api/auth/authenticated', {
            headers: {
                'Authorization': `Bearer ${mockCookies.get('token')}`,
            },
        });
    });
});
