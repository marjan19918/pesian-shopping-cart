import React from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from './page/homepage/homepage';
import Header from './component/header';
import CartPage from './page/cart/cartpage'
import './App.css';
import ShopPage from './page/shoppage/shoppage.component';
import {ToggleProvider} from './context/togglecartcontext/togglecartcontext';
import{AuthProvider} from './context/authcontext'
import { CartProvider } from './context/cartcontext';
import SignIn from './component/sign-in/sign-in';
import Login from './component/log-in/login';
const App=()=>{
  return(
     
    <ToggleProvider>
    <CartProvider>
  <div className='App'>
    <div className='header-con'>
    {/* <AuthProvider> */}
    <Header/>
    {/* </AuthProvider> */}
    </div>
    <Switch>
      <Route exact  path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route exact  path='/cart' component={CartPage}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/login' component={Login}/>
    </Switch>
    </div>
    </CartProvider>
    </ToggleProvider>
     
    
  )
}
export default App;