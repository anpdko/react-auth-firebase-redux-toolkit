import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import {useAuth} from './hooks/useAuth'

function App() {
  const {isAuth} = useAuth();

  return (
    <Routes>
      {isAuth
          ?<Route path='/' element={<HomePage/>} />
          :<Route path="/" element={<Navigate to={"/login"}/>} />
      }
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
    </Routes>
  );
}

export default App;
