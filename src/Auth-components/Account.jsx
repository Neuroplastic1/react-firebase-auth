import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
console.log(user)
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='max-w-[600px] text-white mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email}</p>
      <button onClick={handleLogout} className='border border-blue-500 px-6 py-2 my-4 bg-bg-gray-600 hover:bg-green-500'>
        Logout
      </button>
    </div>
  );
};

export default Account;