import React, { Fragment } from "react";
import {Route, Routes, Link} from 'react-router-dom'
import Signin from './Auth-components/Signin'
import Signup from './Auth-components/Signup'
import Account from './Auth-components/Account'
import { AuthContextProvider } from './Auth-components/AuthContext';
import AuthenticatedRoute from './Auth-components/AuthenticatedRoute'
const App = () => {
  return (
    <Fragment>
        <nav className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen">
        <Link to="/signup">signup</Link>
        <Link to="/">signin</Link>
        </nav>
        <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={
          <AuthenticatedRoute>
            <Account />
          </AuthenticatedRoute>
            }
          />
        </Routes>
        </AuthContextProvider>
    </Fragment>
    )
} 

export default App;
