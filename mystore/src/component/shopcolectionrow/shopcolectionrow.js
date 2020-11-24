import React,{useContext} from 'react'
import './shopcolectionrow.css'
import Costombuttom from '../costom.button/costombuttom';
import {CartContext} from '../../context/cartcontext'
const Shopcolectionrow = ({item}) => {
    const {name,id,imageUrl,price}=item
    const {cart,addcart}=useContext(CartContext);
    return (
        <div className='shopcolrow'>
          <h1>{name}</h1>
          <img src={imageUrl}  className='shopcolrow-img' />
          <sapn className='shopcolrow-price'>قیمت: {price*1000} تومان</sapn>
          <Costombuttom onClick={()=>addcart(cart,item)} text='خرید'/>
        </div>
    )
}

export default Shopcolectionrow
