import {React, useState, useEffect} from "react";
import './components.css'
import cart from '../Photos/cart.png'

function ShoppingCart(props)
{
    let [ItemsCount, setItemsCount] = useState(
    )
    useEffect(()=>
        setItemsCount(getItemsNo()),
        [ItemsCount]
    )

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
    return(
        <div className="cart"><p>{props.count}</p><img src={cart} alt='shopping cart'/></div>
    )
}

export default ShoppingCart