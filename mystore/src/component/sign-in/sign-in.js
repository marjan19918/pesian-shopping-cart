import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import "firebase/auth";
import firebase from'firebase/app';
import './sign-in.css';
const SignIn=()=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const history=useHistory();
 const hndleName=(e)=>{
   setEmail(e.target.value)
 }
 const handlepass=(e)=>{
   setPassword(e.target.value)

 }
  const handlesignin=async(e)=>{e.preventDefault();
    try{await
    firebase.auth().signInWithEmailAndPassword(email,password);
    
    history.push('/');
  }catch(error){console.error();}
  }

return(
<div class="input-form">
<form class="sign-in" onSubmit={handlesignin}> 
    
     <p class="sign-in-header">ورود</p>
      <div class="name-div">
        <label>نام کاربری</label>
        <input type="email" value={email} onChange={hndleName} required placeholder='نام'></input>
      </div>
      <div class="pass-div">
        <label>گذرواژه</label>
        <input type='password' value={password} onChange={handlepass} required placeholder='گذرواژه'></input>
      </div>
     
    <button class="sign-in-button" type='submit'>ورود</button>

<div class="sign-in-chioce">
  <Link to='./login'>ثبت نام</Link>
</div>
</form>
</div> 
)
}
export default SignIn