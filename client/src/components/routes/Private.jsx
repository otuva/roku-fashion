import { Navigate } from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import isAuthorized from "../../helpers/isAuthorized";
import {AuthContext} from "../../context/AuthContext";

const render = (c) => {
    return c;
}

const Private = (Component) => {
    const [isLoggedIn] = useContext(AuthContext);

    return isLoggedIn ? render(Component) : <Navigate to="/sign-in" />;
};

export default Private;