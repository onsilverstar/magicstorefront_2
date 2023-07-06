import React from 'react';
import Table from 'react-bootstrap/Table';

function ShoppingCartPage(props) {
    let items=props.cartItems
    let count =1
    console.log(JSON.stringify(props))
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
                <td><button>Remove</button></td>
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
  </div>
  );
}

export default ShoppingCartPage;