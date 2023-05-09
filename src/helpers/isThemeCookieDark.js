import Cookies from "universal-cookie";

/**
 * Returns true if the theme cookie is set to 'dark' or if the theme cookie doesn't exist.
 * Otherwise, returns false.
 * Also sets the theme cookie to 'dark' if it doesn't exist.
 * @returns {boolean}
 */
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