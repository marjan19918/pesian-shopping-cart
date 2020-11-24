import React, { useState } from 'react'
import './cart.css'
import {CartContext} from '../../context/cartcontext'
import { useContext } from 'react'
import Costombuttom from '../costom.button/costombuttom'
 const Cart=()=>{
   const {cart,addcartincart,decreaseItem,deleteItem}=useContext(CartContext)
   const tSum=cart.reduce((sum,cur)=>sum+(cur.price*cur.quantity),0)
    return(
    <div className='maincart'>
     {cart.length===0 ?<div className='empty-text'>سبد خالی است</div>:
     <div className='cartmaincont'>
         {cart.map(carty=>
            // <div>
         
         <div className='cartcont'>
            <div className='cartimg'>
               
            <img src={carty.imageUrl} />
            </div> 
            <div className='cartdis'>
                <p className='cart-name'>{carty.name}</p>
               
                <p className='cart-price'>{carty.price*1000} </p>
                </div>
                
                <div className='cart-controlbut'>
                <div className='cart-controlbut-each' onClick={()=>addcartincart(cart,carty)} >&#10094;</div>
                <p className='cart-controlbut-eachp '>{carty.quantity}</p>
                <div className='cart-controlbut-each' onClick={()=>decreaseItem(cart,carty)}>&#10095;</div>
                 
                
                <div className='cart-controlbut-each' onClick={()=>deleteItem(cart,carty)} >&#215;</div>
               </div>
                </div>
               
            )}
            <div className='cart-tsumcont'>
         <h3 className='cart-tsum'>مبلغ کل: {tSum*1000} تومان  </h3>
         </div>
         <div className='cart-butdiv'>
         {/* <button className='cart-but'>پرداخت</button> */}
         <Costombuttom text="پرداخت"/>
         </div>
  </div>   
 }
 </div>
 )
}
export default Cart;
