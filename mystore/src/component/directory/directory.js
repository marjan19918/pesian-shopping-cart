import React from 'react';
import MenuItem from '../menuitem/menuitem';
import directorydata from './directorydata';
import './directory.css'
import { useParams, withRouter } from 'react-router-dom';

const DirectoryItem=({history})=>{
    
    return(
        <div className='directory' onClick={()=>{history.push('/shop')}}>
           { directorydata.sections.map(({id,...props})=>(<MenuItem id={id} {...props}
        
           />))}
        </div>
    )
}
export default withRouter( DirectoryItem);