import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(error)
    }
  };

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='mb-3 text-transparent max-w-[40ch] leading-relaxed text-3xl sm:text-4xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text'>Sign in to your account</h1>
        <p className='py-2 text-white'>
          Don't have an account yet?{' '}
          <Link to='/signup' className='font-bold text-white hover:text-green-500'>
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium text-white'>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium text-white'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
        </div>
        <button className='border border-blue-500 bg-bg-gray-600 hover:bg-green-500 w-full p-4 my-2 text-white'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;