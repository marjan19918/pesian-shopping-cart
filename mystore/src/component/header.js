import React,{useContext} from 'react';
import './header.css';

import {CartContext} from '../context/cartcontext'
import{ReactComponent as Carticon} from '../assets/cart icon.svg';
import {ToggleContext} from '../context/togglecartcontext/togglecartcontext'
import {Link } from 'react-router-dom'
import ToggleCart from './toggle-cart/toggle-cart';
import Dealer from './dealer/dealer'


const Header =()=>{

     const {cart}=useContext(CartContext)
   const {hidden}=useContext(ToggleContext);
   const {togglehidden}=useContext(ToggleContext);
return(
    
<div className='header'>
    <div className='con'>
    <div className='logo-container'>logo</div>
     
           <div className='link-container'>
           <Link to='/'>صفحه اصلی</Link>
           <Link to='/shop'>خرید</Link>
                <Link to='/shop/trends'>جدیدترین</Link>
                <Link to='/shop/children'>کودک </Link>
                <Link to='/shop/men'>اقایان</Link>
                <Link to='/shop/women'>بانوان</Link>
             </div>
             
             
             <div className='icon-container'>
                 <Link>چت</Link>
    
                 <button className='toggle-butt'
                
                onClick={()=>togglehidden()}
                
                  >
                        {cart.length}  
                 
                     {hidden ? null :<ToggleCart />  }   
                    
                 </button>
                 
                 <Dealer/>


             </div>
</div>


        </div>
    )
}
export default Header;