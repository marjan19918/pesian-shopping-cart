import React, { createContext, useState } from 'react'

 export const ToggleContext=createContext({
     hidden:true,
     togglehidden:()=>{},
     
 });
 export const ToggleProvider=(props)=>{
    
    const [hidden,setHidden]=useState(true)
  const togglehidden=()=>{setHidden(!hidden)}
  
     return(
     <ToggleContext.Provider value={{hidden,togglehidden}} >
         {props.children}
     </ToggleContext.Provider>
     )
 }