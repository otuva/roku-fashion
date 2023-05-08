import axios from 'axios';
import Cookies from "universal-cookie";

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