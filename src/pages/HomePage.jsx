import React from 'react';
import { useDispatch } from 'react-redux';
import {useAuth} from '../hooks/useAuth'
import { removeUser } from '../store/slices/userSlice';
 
const HomePage = () => {
   const dispatch = useDispatch();
   const {email} = useAuth();
   return (
      <div>
         <h1>Привет друг!</h1>
         <button
            onClick={() => dispatch(removeUser())}
         >Log out from {email}</button>
      </div>
   );
};

export default HomePage;