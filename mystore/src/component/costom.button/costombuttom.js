import React from 'react'
import './constom-buton.css'
const Costombuttom = ({children,text,...props}) => (
    
        // <div className='costombutoncont'>
            <button className='costombuton' {...props}>{children}{text}</button>
        // </div>
    
)

export default Costombuttom
