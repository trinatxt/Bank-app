import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authcontext'; // Ensure this path is correct
import { RiLockPasswordFill } from 'react-icons/ri'; // Example icon import

const ProfileCreationPage = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');
  const [duplicateError, setDuplicateError] = useState(''); // State for duplicate username or email

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const passwordPolicy = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;
    return passwordPolicy.test(password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!validatePassword(e.target.value)) {
      setPasswordError('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character');
    } else {
      setPasswordError('');
    }
  };

  const handleClick = async () => {
    // Client-side validation
    if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }
    
    if (!validatePassword(password)) {
      alert("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character");
      return;
    }
  
    // If all validations pass, proceed with user creation
    try {
      const userData = {
        first_name: firstName,
        last_name: lastName,
        email,
        username,
        password
      };
  
      const response = await fetch('http://weloveesc.xukaiteo.com:8001/user/add_user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorData = await response.json(); // Parse error response
        let errorMessage = 'Unknown error occurred';
  
        if (response.status === 400) {
          if (errorData.detail && Array.isArray(errorData.detail)) {
            errorMessage = errorData.detail.map(err => err.msg).join(', ');
          } else {
            errorMessage = errorData.detail;
          }
          if (errorData.detail === 'Username or email already exists') {
            setDuplicateError(errorData.detail); // Set duplicateError state for UI display
            setServerError(''); // Clear serverError if duplicateError is set
          } else {
            setDuplicateError(''); // Clear duplicateError if serverError is set
            setServerError(errorMessage); // Set serverError state for UI display
          }
        } else if (response.status === 500) {
          errorMessage = errorData.detail || 'Server error occurred';
          setServerError(errorMessage); // Set serverError state for UI display
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return;
      }
  
      const data = await response.json();
      console.log('User creation successful:', data);
  
      // Assuming signUp function updates the authenticated user state
      signUp(userData);
  
      // Redirect or navigate to the profile page
      navigate('/profile');
    } catch (error) {
      console.error('Error creating user:', error.message);
      setServerError(`Error: ${error.message}`); // Set serverError state for UI display
    }
  };
  
  const handleLogin = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form>
          <h1 className="text-3xl text-center bg-gray-200 py-4 rounded">Create Profile</h1>
          <div className="input box">
            <p>First Name</p>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="input box">
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="input box">
            <p>Email</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="input box">
            <p>Username</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="input box">
            <p>Password</p>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <RiLockPasswordFill className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Error message for server errors */}
          {serverError && <p className="text-red-500 text-center">{serverError}</p>}

          {/* Error message for duplicate username or email */}
          {duplicateError && <p className="text-red-500 text-center">{duplicateError}</p>}
  
          <div className="mt-12">
            <button
              type="button" // Change type to button
              className="w-1/2 bg-blue-500 text-white py-2 rounded"
              onClick={handleClick} // Call handleClick directly on click
            >
              Create Profile
            </button>
          </div>
  
          {/* Optional: Link to login page */}
          <div className="register-link text-center mt-4">
            <p>Already have an account? <span onClick={handleLogin} className="text-blue-500 cursor-pointer">Login</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileCreationPage;











