import {useEffect} from "react";
import Cookies from "universal-cookie";
import {CircularProgress} from "@mui/material";

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