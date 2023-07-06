import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import {React, useState} from "react";
import Footer from './components/Footer';
import ProductView from './components/ProductView';
import Home from "./Pages/Home"
import ShoppingCartPage from './Pages/ShoppingCartPage'
import ShippingBilling from './components/ShippingBilling';
import StripePay from './components/StripePay';

function App(props) {
  const [a, b] = useState(getItemsNo())
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("orderitems")))
  const [cartCost, setCartCost] = useState(getCost())
  const getCartCount= async(data)=>{
    b(data)
  }

  const getCartItems= async(data)=>{
    setCartItems(data)
  }

  const getCartCost= async(data)=>{
    setCartCost(data)
  }

  function getCost(){
    let total=0
    let orderitems = JSON.parse(localStorage.getItem("orderitems"))
    if(orderitems==null){
        return 0
    }
    for(let i=0; i<orderitems.length; i++)
            {
                total+=parseInt(orderitems[i].quantity*orderitems[i].price)
            }
        return total
}

  function getItemsNo()
  {
      let shoppingcart=JSON.parse(localStorage.getItem("orderitems"))
      if(shoppingcart!=null)
      {
          let itemscount=0
          for(let i=0; i<shoppingcart.length; i++)
          {
              itemscount+=parseInt(shoppingcart[i].quantity)
          }
          return parseInt(itemscount)
      }
      else{
          return 0
      }
        
  }
  return (
      <div id='wrapper'>
        <NavigationBar cartCount={a}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/product/:id/:quantity/:image/:price"  
          element={<ProductView func1={getCartCount} func2={getCartItems} funcost={getCartCost}/>}/>
          <Route path="/shoppingcartview" element={<ShoppingCartPage cartItems={cartItems} cost={cartCost}/>}/>
          <Route path="/shippingbilling" element={<ShippingBilling cartItems={cartItems} cost={cartCost}/>}/>
          <Route path="/stripepayment/:order_id" element={<StripePay cost={cartCost}/>}/>
        </Routes>
        <Footer/>     
      </div>
  );
}

export default App;
