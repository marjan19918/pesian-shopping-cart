import React, { useContext } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { CartContext } from '../../context/cartcontext';
import { ToggleContext } from '../../context/togglecartcontext/togglecartcontext';
import './toggle-cart.css';
const ToggleCart=()=>{
    // const [cart,setCart]=useContext(CartContext)
    const {cart}=useContext(CartContext)
    const {togglehidden}=useContext(ToggleContext);
    const tSum=cart.reduce((sum,cur)=>sum+(cur.price*cur.quantity),0)
    const history=useHistory();
   
   if(cart.length===0){return(<div className='togglemain'>
       <h1 >سبد شما خالی است</h1>  <div className='buttoncont'>
   <button onClick={()=>{history.push('./cart') ;togglehidden()}} >بستن
   </button> 
</div>
</div>)}
   else{
    return(<div className='togglemain' >
        {cart.map((carty)=>(
        
            <div className='togglecartcont' >
            
                
         <div className='togglefirstcon'>
             <div className='toggleimgcont'>
                <img src={carty.imageUrl}></img>

             </div>
            <div className='discription'>
                <span className='name'>{carty.name}</span>
                <span className='price'>{carty.price*1000}:قیمت</span>
                <span>تعداد:{carty.quantity}</span>
            </div>
         </div>
        </div>
        ))
        }
          <div className='buttoncont'>
              <Link to='/cart'>
                 <button onClick={()=>{togglehidden()}} >خرید</button> 
                 </Link>
                 <span>مبلغ کل:{tSum*1000}</span>

            </div> 
        </div>
    )
    }
}
    

export default ToggleCart;