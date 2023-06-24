import React from 'react';
import Navbar from './Navbar';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen  bg-gradient-to-r  from-red-200 to-blue-400 shadow-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Procing elit. Ea vel magni quideminima quia assumenda tempora blanditiis sequi, fugit iusto repudiandae consequatur, quibusdam facilis fuga. </p>
    </div>
    <LoginForm className=''></LoginForm>
  </div>
</div>
      
    </div>
  );
};

export default Login;