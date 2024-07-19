import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './authcontext'; // Adjust path as needed

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className='relative w-full bg-8 py-4 px-6 flex items-center justify-between'>
      <h1 className='text-white font-bold text-2xl cursor-pointer' onClick={handleGoBack}>BankApp</h1>
      <div className='flex items-center space-x-1'>
        <FaUserCircle size={25} className='text-white' />
        <RiArrowDropDownLine
          className='text-white cursor-pointer'
          size={25}
          onClick={toggleDropdown}
        />
        {user ? (
          <button onClick={handleLogout} className='bg-11 text-white font-bold py-2 px-4 rounded'>
            Sign Out
          </button>
        ) : (
          <button onClick={handleLogin} className='bg-11 text-white font-bold py-2 px-4 rounded'>
            Login
          </button>
        )}
      </div>
      {dropdownOpen && (
        <div className='absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10'>
          <ul className='list-none p-0'>
            <li className='font-bold text-lg p-4'>
              <Link
                to='/profile'
                className={location.pathname === '/profile' ? 'text-6 hover:bg-white hover:text-10' : 'text-6 hover:bg-white hover:text-10'}
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </Link>
            </li>
            <li className='font-bold text-lg p-4'>
              <Link
                to='/exchangehistorypage'
                className={location.pathname === '/exchangehistorypage' ? 'text-6 hover:bg-white hover:text-10' : 'text-6 hover:bg-white hover:text-10'}
                onClick={() => setDropdownOpen(false)}
              >
                Exchange History
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
