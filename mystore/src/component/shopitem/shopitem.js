import './shopitem.css';
import React, { useContext, useState} from 'react';
import {ToggleContext} from '../../context/togglecartcontext/togglecartcontext'
import { CartContext } from '../../context/cartcontext';
import {  useHistory,useRouteMatch } from 'react-router-dom';
import Costombuttom from '../costom.button/costombuttom';


const ShopItem=({id,items,title,routeName})=>{
  const history=useHistory()
   const {cart,addcart}=useContext(CartContext)
   const {togglehidden}=useContext(ToggleContext);
   
  //  const [toggle,setToggle]=useContext(ToggleContext)
    // const addToCart=(item)=>{setCart([...cart,item]);console.log(cart)}
  // تابع بالا فقط ایتم اضافه میکند و تعداد ندارد 
  
 let sendToProduct=(itemm)=>{
    let id=itemm.id
   let pat=path.concat('/',routeName,' ','items',' ',id);
    history.push(pat)
    }
   let {path,url}=useRouteMatch();
 
  
    return(
    <div className='shopitem' >  
     <div className='hcon'>
        <h1 >{title}:</h1> 
         </div>
        {items.filter((item,idx)=>idx<4).map(item=>(
         <div className='shopitemcont' key={item.id} >
          
           <div className='mainimagcont' onClick={()=>sendToProduct(item)}>
          
           <div className='imgcont'

           style={{backgroundImage:`url(${item.imageUrl})`}}></div>
          
           </div>
             <div className='shopitem-discription'>
             
               <sapn className='shopitem-discription-name'>{item.name}</sapn>
               <span>{`قیمت: ${item.price*1000} تومان  `}</span>
               
             </div> 
               {/* <button className='shopitem-but'
         
           onClick={()=>addcart(cart,item)}
           >خرید</button>   */}
           <Costombuttom onClick={()=>addcart(cart,item)} >خرید</Costombuttom>
        </div>
        )) }
       
    </div>
        
    )
};
export default ShopItem;