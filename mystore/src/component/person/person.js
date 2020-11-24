import React from 'react'
import './person.css';
import "firebase/auth";
import firebase from'firebase/app';

const Person = () => {
  // const exituser=firebase.auth().signOut();
    return (
        <div className='person'>
            <div className="person-half">
      <span>حساب کاربری</span>
    </div>

    <div className='person-half'>
      <button 
       onClick={()=>{firebase.auth().signOut()}}
      >خروج</button>

    </div>
        </div>
    )
}

export default Person
