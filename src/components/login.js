import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password123') {
      setShowOtpField(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === '1234') {
      alert('Login Successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid OTP');
    }
  };

  const handleAbout = () => {
    alert(
      `Identify is a secure authentication system with OTP verification for enhanced security.\n\nIt helps protect user data and provides a safe and seamless login experience.`
    );
  };

  return (
    <div className="login-container">
      <div className="top-bar">
        <h1 className="app-title">Identify</h1>
        <div className="nav-buttons">
          <button onClick={() => alert('Welcome to Home!')}>Home</button>
          <button onClick={handleAbout}>About</button>
        </div>
      </div>

      <div className="login-box">
        <h2>Welcome Back!</h2>
        {!showOtpField ? (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="continue-btn" type="submit">
              Proceed
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button className="continue-btn" type="submit">
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
