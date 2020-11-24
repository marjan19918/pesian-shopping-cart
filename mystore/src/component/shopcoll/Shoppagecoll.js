import React, { useState,useContext } from 'react'
import { useParams,useRouteMatch } from 'react-router-dom'
import { CartContext } from '../../context/cartcontext';
import SHOP_DATA from '../../page/shoppage/shopdata';
import './Shoppagecoll.css';
import Costombuttom from '../costom.button/costombuttom'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Shopcolectionrow from '../shopcolectionrow/shopcolectionrow'
const Shoppagecoll=()=>{
   const {cart,addcart}=useContext(CartContext);
    let g=useParams();
    let param=g.collectionid;
let lastindex=(g.collectionid).length;
 let k=param.search('items');
 const idNumber=param.slice(k+6,lastindex);
 let y=param.slice(0,k-1);
    const [collection,setCollection]=useState(SHOP_DATA);
    const getcoll=()=>{if(param.length<10){
        return  collection[param]}
        else{return  collection[y]}}

 let coll=getcoll();
 
      let h=coll.items
       console.log(h)
     let speseficItem=h.find(hid=>hid.id==idNumber)
     return(<div>
         {speseficItem ? <div>
            <div className='shoppagecoll'>
            <TransformWrapper> 
             <TransformComponent >
             

           <img src={speseficItem.imageUrl} className='shoppagecollimg'/>
       
            </TransformComponent> 
           </TransformWrapper> 
         
           <div className='shoppagecoll-disc' >
           <p>توضیحات:
       طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان
       عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه 
      شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید،
       تا از نظر ا</p>
     
         <span> نام : {speseficItem.name} </span>
           <Costombuttom text='خرید' onClick={()=>addcart(cart,speseficItem)}  />
       </div>
     

       </div>
         </div> :
          <div> <div className='shoppagecoll'>
     <h3>{coll.title}</h3>
      <div className='shoppagecoll-img'>
          {coll.items.map(item=><Shopcolectionrow item={item} id={item.id}/>)}
          
      </div>
        </div></div>}
         </div>
   
      )
}
export default Shoppagecoll