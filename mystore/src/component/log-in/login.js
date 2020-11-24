import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import "firebase/auth";
import firebase from'firebase/app';
import { createUserProfileDocument } from '../../firebase/firebase';

import './login.css';
const Login=()=>{
  const history=useHistory();
  const [displayName,setDisplayName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [repass,setRepass]=useState('');
  const handleName=(e)=>{
    setDisplayName(e.target.value)
  }
  const handleMail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePass=(e)=>{
    setPassword(e.target.value)
  }
  const handelRepass=(e)=>{
    setRepass(e.target.value)
  }
  
const  handlesubmit=async(e)=>{
  e.preventDefault();
  if(password!==repass){
    alert('گذرواژه ه ها با هم مطابقت ندارند');return;
  }
  try{const {user}=await firebase.auth().createUserWithEmailAndPassword(email,password);
  // console.log(displayName)
     await createUserProfileDocument(user,{displayName});
  

    history.push('/');

  }catch(error){console.error(error);}
}




    return(
        <div class="input-form">
        <form class="login" onSubmit={handlesubmit} > 
            
             <span class="login-header">ثبت نام</span>
             <div class="login-name-div">
                <label>نام کاربری</label>
                <input type="text" value={displayName} onChange={handleName}></input>
              </div>
              <div class="login-name-div">
                <label>پست الکترونیکی</label>
                <input type="email" value={email} onChange={handleMail}></input>
              </div>
              <div class="login-name-div">
                <label>گذرواژه</label>
                <input type="password" value={password} onChange={handlePass} ></input>
              </div>
              <div class="login-name-div">
                <label>تکرار گذرواژه</label>
                <input type='password'  value={repass} onChange={handelRepass}></input>
              </div>
             
            <button class="login-button" type='submit'>ثبت نام</button>
        
        <div class="login-chioce">
         <Link to='./signin'>ورود</Link> 
        </div>
        </form>
        </div> 
    )
}
export default Login;