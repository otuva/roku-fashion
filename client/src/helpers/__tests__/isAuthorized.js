import axios from 'axios';
import Cookies from "universal-cookie";
import isAuthorized from '../isAuthorized';

jest.mock('axios');

describe('isAuthorized', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should return true if user is authorized', async () => {
        axios.get.mockResolvedValue({ data: { status: true } });
        const result = await isAuthorized();
        expect(result).toBe(true);
        expect(axios.get).toHaveBeenCalledWith('/api/auth/authenticated', {
            headers: {
                'Authorization': `Bearer undefined`
            }
        });
    });

    it('should return false if user is not authorized', async () => {
        axios.get.mockRejectedValue({
            response: {
                status: 400
            }
        });
        const result = await isAuthorized();
        expect(result).toBe(false);
        expect(axios.get).toHaveBeenCalledWith('/api/auth/authenticated', {
            headers: {
                'Authorization': `Bearer undefined`
            }
        });
    });

    it('should remove the token cookie if user is not authorized', async () => {
        axios.get.mockRejectedValue({});
        const cookies = new Cookies();
        cookies.set('token', 'abc');
        await isAuthorized();
        expect(cookies.get('token')).toBeUndefined();
    });
});
