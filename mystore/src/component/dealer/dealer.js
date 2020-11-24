import React from 'react'
import {useState,useEffect} from 'react';
import "firebase/auth";
import firebase from'firebase/app';
import './dealer.css';
import Person from '../person/person'
import {useHistory } from 'react-router-dom';
const Dealer = () => {
    const[cuser,setCuser]=useState(null);
    const [nami,setNami]=useState('')
      const history=useHistory();
      const [dealertoggle,setDealertoggle]=useState(false);
      const hndledealertoggle=()=>{setDealertoggle(!dealertoggle)}
            useEffect(()=>{ firebase.auth().onAuthStateChanged(setCuser) ;
             if(cuser){
                  const calluid=async(cusers)=>{
                     const userRef=firebase.firestore().collection('user').doc(cusers.uid)
                     const onsnapshot= await userRef.get();
                      console.log(onsnapshot.data().displayName);
                      const displayName=onsnapshot.data().displayName
 
                     setNami(displayName)
                     }
                      calluid(cuser);
                     }},[cuser])
                   
    return (
        <div className='dealer-con' onClick={()=>hndledealertoggle()}>
            <button className='hello-but' >{cuser ? <p>سلام {nami} </p>:<span className='his-sp' onClick={()=>history.push('/signin')}>ورود</span>}{dealertoggle&&cuser ? <Person/> : null}</button>



        </div>
    )
}

export default Dealer


