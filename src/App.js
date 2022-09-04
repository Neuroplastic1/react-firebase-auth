import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Auth-components/Signin";
import Signup from "./Auth-components/Signup";
import Account from "./Auth-components/Account";

import { AuthContextProvider } from "./Auth-components/AuthContext";
import AuthenticatedRoute from "./Auth-components/AuthenticatedRoute";
const App = () => {
  return (
    <>
      <AuthContextProvider>
        
        <Routes className="container">
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={ <AuthenticatedRoute> <Account /> </AuthenticatedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
