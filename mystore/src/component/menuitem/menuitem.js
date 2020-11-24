import React from 'react';
import './menuitem.css';
const MenuItem=({title,imageUrl,size,id})=>{
    return(
        <div className={`${size} menuitem`} key={id} >
            <div style={{backgroundImage:`url(${imageUrl})`}} className='menubackpic'></div>
            <div  className='content' >
            <h1>{title}</h1> 
             </div>
            
               
        </div>
    )
}
export default MenuItem;