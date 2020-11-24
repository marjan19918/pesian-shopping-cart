import React, { useContext } from 'react'
import { CartContext } from '../../context/cartcontext'
import './ceckout.css'
import Cart from '../cart/cart'
const Checkout = () => {
    const {cart}=useContext(CartContext)
    return (
        <div className='checkoutmain'>
        <div className='checkout'>
            <div><p> محصول</p></div>
            <div><p>قیمت(تومان)</p></div>
            <div><p>تعداد</p></div>
            {/* <div><p>حذف</p></div> */}
           
        </div>
       <Cart/>
        </div>
    )
}

export default Checkout

