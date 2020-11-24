import React, { useEffect, useState } from 'react';
import "firebase/auth";
import firebase from'firebase/app';
export const AuthContext=React.createContext();
export const AuthProvider=(props)=>{
    const[cuser,setCuser]=useState(null);
     
  
           useEffect(()=>{ firebase.auth().onAuthStateChanged(setCuser) ;
            if(cuser){
                 const calluid=async(cusers)=>{
                    const userRef=firebase.firestore().collection('user').doc(cusers.uid)
                    const onsnapshot= await userRef.get();
                    console.log(onsnapshot.data().displayName);
                    const displayName=onsnapshot.data().displayName
                    }
                     calluid(cuser);
                    }},[cuser])
        
    
return(
    <AuthContext.Provider value={[cuser,setCuser]}>
        {props.chilren}
    </AuthContext.Provider>
      );
};
