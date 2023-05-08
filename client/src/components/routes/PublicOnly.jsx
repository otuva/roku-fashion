import { Navigate } from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import isAuthorized from "../../helpers/isAuthorized";
import {AuthContext} from "../../context/AuthContext";

const render = (c) => {
    return c;
}

const PublicOnly = (Component) => {
    const [isLoggedIn] = useContext(AuthContext);

    return !isLoggedIn ? render(Component) : <Navigate to="/" />;
};

export default PublicOnly;