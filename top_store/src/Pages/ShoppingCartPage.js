import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ShoppingCartPage(props) {
    const [cartitems, setitems] = useState()
    let count =1
    console.log(JSON.stringify(props))
    let items=props.cartItems

    useEffect(() => {
    }, [cartitems]);

    const handleSubmit = async (event, item) => {
      event.preventDefault();
      let index = items.indexOf(item)
      setitems(items.splice(index, 1))
      localStorage.setItem("orderitems", JSON.stringify(items))
      props.func2(items)
      props.funcost(getCost())
      props.func1(getItemsNo())
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
    <div className='productswrapper'>
      <Table striped bordered hover className='cart_table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {
            items.map(
                (item)=><tr>
                <td>{count++}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price*item.quantity}</td>
                <td><button onClick={e=>handleSubmit(e, item)}>Remove</button></td>
            </tr>
            )
        }
        <tr>
            <td>Total Cost</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{props.cost}</td>
        </tr>
      </tbody>
    </Table>
    <div style={{margin:"2rem", display:"block"}}>
      <Link to={"/shippingbilling"}>
        <Button>Proceed to Checkout</Button>
      </Link>
      
    </div>
  </div>
  );
}

export default ShoppingCartPage;