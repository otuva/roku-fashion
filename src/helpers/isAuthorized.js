import axios from 'axios';
import Cookies from "universal-cookie";

/**

 Asynchronously sends a request to the server to determine whether the user is authorized.
 @async
 @function
 @returns {Promise<boolean>} - A promise that resolves to true if the user is authorized or false otherwise.
 */
const isAuthorized = async () => {
    const cookies = new Cookies();
    try {
        const resp = await axios.get('/api/auth/authenticated', {
            headers: {
                'Authorization': `Bearer ${cookies.get('token')}`
            }
        });
        return resp.data.status;
    } catch (e) {
        cookies.remove('token');
        return false;
    }
}

export default isAuthorized;