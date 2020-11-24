import './shoppreview.css';
import React, {  useState } from 'react';
import SHOP_DATA from '../../page/shoppage/shopdata';
 import ShopItem from '../shopitem/shopitem';


 const  ShopPagePreView=()=> {
     const [collection,setCollection]=useState(SHOP_DATA)
     const coll=collection ? Object.keys(collection).map(key=>collection[key]) :[]
    
    return(
        <div className='shopPcont'>
           
             {
               coll.map(({id,...props})=>(
                   <div>
               
               <ShopItem key={id} {...props}/>
               
               </div>
               
               )
               
               )
             } 
           
    
        </div>

    )
};
export default ShopPagePreView;