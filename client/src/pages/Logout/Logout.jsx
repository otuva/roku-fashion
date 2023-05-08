import {useEffect} from "react";
import Cookies from "universal-cookie";
import {CircularProgress} from "@mui/material";

/**
 A React component that logs the user out by removing the JWT token from the cookies and redirecting to the home page.
 @function
 @returns {JSX.Element} - The rendered component, which displays a circular progress indicator while the logout process is in progress.
 */
const Logout = () => {
    useEffect(() => {
        (async () => {
            const cookies = new Cookies();
            cookies.remove("token", {path: "/"});
            // Redirect to home page and cause refresh.
            window.location.href = "/";
        })();
    }, []);

    return <CircularProgress/>
}

export default Logout