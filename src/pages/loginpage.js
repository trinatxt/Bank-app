import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/authcontext'; // Adjust path as needed
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

const LoginPage = () => {
  const { authenticate } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State to manage login error

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!username.trim()) {
        setError('Please enter a username.');
        return;
      }
      if (!password.trim()) {
        setError('Please enter a password.');
        return;
      }

      const userData = await authenticate(username, password);
      console.log('userData:', userData);

      if (userData) {
        // Redirect to profile page after successful login
        const redirectTo = location.state?.from?.pathname || '/profile';
        navigate(redirectTo);
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again later.');
    }
  };

  const handleSignUp = () => {
    navigate('/profilecreationpage'); // Redirect to sign up page
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1>Bank App Login</h1>
          {error && <p className="error-message">{error}</p>}
          <div className="input box">
            <p>Username</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input box">
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <RiLockPasswordFill className="icon" />
          </div>
          <div className="forgot-pwd">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account? <a onClick={handleSignUp}>Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;






