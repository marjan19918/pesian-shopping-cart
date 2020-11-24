import React, {  createContext, useState } from 'react';

export const CartContext=createContext();
export const CartProvider=(props)=>{
const [cart,setCart]=useState([])
 const addcart=(cart,item)=>{
     let firstcart=[...cart];
     let sameitem=firstcart.find(cart=>cart.id===item.id);
     if(sameitem){sameitem.quantity++}else{sameitem={...item,quantity:1,};setCart([...cart,sameitem])}
   }
   const addcartincart=(cart,items)=>{
    const cartitems= cart.map(cartitem=>cartitem.id===items.id ? {...cartitem,quantity:cartitem.quantity+1}:cartitem)
  setCart([...cartitems])
     }
     const deleteItem=(cart,items)=>{const cartitems=cart.filter(cartitem=>cartitem.id !== items.id);console.log(cartitems) ;setCart([...cartitems])}
    const decreaseItem=(cart,items)=>{
        const sameitem=cart.find(cartitem=>cartitem.id===items.id)
        if(sameitem.quantity>1){const cartitems=cart.map(cartitem=>cartitem.id===items.id ?
             {...cartitem,quantity:cartitem.quantity-1}:cartitem)
           setCart([...cartitems])}
        }
    return(
        <CartContext.Provider value={{cart,setCart,addcart,addcartincart,decreaseItem,deleteItem}}>
            {props.children}
        </CartContext.Provider>
    )
}
