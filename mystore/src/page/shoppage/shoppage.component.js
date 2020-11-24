import ShopPagePreView from '../../component/shoppreview/shoppreview';
import './shoppage.style.css';
import React from 'react';
import {Route,  Switch, useRouteMatch} from 'react-router-dom';
import Shoppagecoll from '../../component/shopcoll/Shoppagecoll';


const ShopPage=()=>{
    let {path,url}=useRouteMatch();
    

    
    
    return(
        <div className='shopcont' >
            
            <Switch>
            <Route exact path={path} component={ShopPagePreView}/>
             {/* <ShopPagePreView/>  */}
             <Route path={`${path}/:collectionid`} component={Shoppagecoll}/>
             </Switch>
             
        </div>

    )
};
export default ShopPage;
