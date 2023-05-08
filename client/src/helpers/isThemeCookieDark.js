import Cookies from "universal-cookie";

const isThemeCookieDark = () => {
    const cookies = new Cookies();
    const theme = cookies.get('theme');

    if (theme === null) {
        // If theme cookie doesn't exist, set it to default value of 'dark'
        cookies.set('theme', 'dark', {path: '/'});
        return true;
    }

    return theme === 'dark';
}
export default isThemeCookieDark;