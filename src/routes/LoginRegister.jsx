// LoginRegister.jsx
import React, { useEffect } from 'react';
import "../components/RegisterLoginStyles.css";
import { useNavigate } from 'react-router-dom';

const LoginRegister = ({ auth }) => {

  const navigateTo = useNavigate();

  useEffect(() => {
    if (auth.token) {
      navigateTo('/home');
    }
  }, [auth]);

  return (
    <div className="home-container">
        <div className="content-container">
            <h1 className="home-title">My Portfolio</h1>
            <p className="home-text">Welcome to My Portfolio web site. If you don't have any account, please get one!</p>
            <hr/>
            <a className="btn btn-light" href="/register" role="button">Register</a>
            <a className="btn lgn" href="/login" role="button">Login</a>
        </div>
    </div>
  );
};

export default LoginRegister;