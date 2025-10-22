import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogOut = ({ setAuth }) => {
    setAuth({ token: false });
    const navigateTo  = useNavigate();
    navigateTo("/");

    return (
        <h1>LOG OUT</h1>
    );
}

export default LogOut
