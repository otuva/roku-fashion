import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import isAuthorized from "../../helpers/isAuthorized";

const render = (c) => {
    return c;
}

const PublicOnly = (Component) => {
    const [hasSession, setHasSession] = useState(false);

    useEffect(() => {
        (async () => {
            console.log("Public only route girdi");

            const sessionStatus = await isAuthorized();

            setHasSession(sessionStatus);
        })();
    }, []);


    return !hasSession ? render(Component) : <Navigate to="/" />;
};

export default PublicOnly;