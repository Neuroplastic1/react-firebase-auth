import React from "react";
import {Route, Routes} from 'react-router-dom'
import Signin from './Auth-components/Signin'
import Signup from './Auth-components/Signup'
import Account from './Auth-components/Account'
import { AuthContextProvider } from './Auth-components/AuthContext';

const App = () => {
  return (
    <div>
        <h1 className='p-4'>setting up routes from app.js</h1>
        <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
        </Routes>
        </AuthContextProvider>
    </div>
    )
} 

export default App;
