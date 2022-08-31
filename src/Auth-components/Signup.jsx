import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const {createUser} = UserAuth();
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      try {
        await createUser(email, password);
        navigate('/account')
        // console.log(user) //not defined here
      } catch (e) {
        setError(e.message);
        console.log(error.message);
      }
    };
  
    return (
      <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
          <h1 className='text-2xl font-bold text-bg-gradient-to-r from-green-500 via-blue-500 to-purple-500'>Sign up for a free account</h1>
          <p className='py-2 text-white'>
            Already have an account?{' '}
            <Link to='/' className='font-bold text-white hover:text-green-500'>
              Sign in.
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium text-white'>Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='border p-3'
              type='email'
            />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium text-white'>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='border p-3'
              type='password'
            />
          </div>
          <button className='border text-white bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:bg-green-500 w-full p-4 my-2'>
            Sign Up
          </button>
        </form>
      </div>
    );
  };

export default Signup