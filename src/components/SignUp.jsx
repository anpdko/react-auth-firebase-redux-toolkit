import React from 'react';
import Form from './Form';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {setUser} from '../store/slices/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
   const dispatch = useDispatch();
   let navigate = useNavigate();

   const handleRegister = (email, password) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
         .then(({user}) => {
            console.log("user: ", user);
            dispatch(setUser({
               email: user.email,
               id: user.uid,
               token: user.accessToken
            }))
            navigate("/");
          })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorCode: ", errorCode)
            console.log("errorMessage: ", errorMessage)
         })
   }

   return (
      <>
         <Form textBtn="Регистрация" handleClick={handleRegister}/>
      </>
   );
};

export default SignUp;