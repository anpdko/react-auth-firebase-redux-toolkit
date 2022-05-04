import React, {useState} from 'react';

const Form = ({textBtn, handleClick}) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const sendForm = (e) =>{
      e.preventDefault();

      if (email !== '' && password !== ''){
         handleClick(email, password)
      }
   }
   
   return (
      <form onSubmit={sendForm}>
         <input 
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="email"
         />
         <input 
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="password"
         />
         <button type='submit'>
            {textBtn}
         </button>
      </form>
   );
};

export default Form;