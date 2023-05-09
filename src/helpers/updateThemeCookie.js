import Cookies from "universal-cookie";

/**
 * Updates the theme cookie to reflect the current theme.
 * @param isDarkTheme
 */
const updateThemeCookie = (isDarkTheme) => {
    const cookies = new Cookies();
    cookies.set('theme', isDarkTheme ? 'dark' : 'light', { path: '/' });
}

export default updateThemeCookie;