import React from 'react';
import DirectoryItem from '../../component/directory/directory';
import './homepage.css';


import "firebase/firestore";
const HomePage =()=>{

    return(
        <div className='ho'>
            <DirectoryItem/>
            
        </div>
    )
}
export default HomePage;