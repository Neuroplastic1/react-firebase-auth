import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { UserAuth } from './AuthContext';
// import { getAuth } from "firebase/auth";



const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const {updatePasswordFunc} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePasswordFunc(password);
      alert('Updated password');
      navigate('/account')
      // console.log(user) //not defined here
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <form onSubmit={handleSubmit}>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='border p-3 text-black'
              type='password'
            />
          </div>
          <button className='border text-white bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:bg-green-500 w-full p-4 my-2'>
           Update passowrd
          </button>
        </form>
    </div>
  );
};

export default UpdatePassword