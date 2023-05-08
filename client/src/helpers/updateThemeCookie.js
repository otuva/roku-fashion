import Cookies from "universal-cookie";

const updateThemeCookie = (isDarkTheme) => {
    const cookies = new Cookies();
    cookies.set('theme', isDarkTheme ? 'dark' : 'light', { path: '/' });
}

export default updateThemeCookie;