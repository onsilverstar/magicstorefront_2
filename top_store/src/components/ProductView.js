import {React, useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import { Card } from 'react-bootstrap'
import ShoppingCart from "./ShoppingCart";
import { Form } from "react-bootstrap"
import {Button} from "react-bootstrap";

const ProductView = (props) =>
{
    let params = useParams();
    let [OrderItem, setOrderItem] = useState(
        {
            "product_id": params.id,
            "price":params.price,
            "quantity": 0,
    }
    )
    let [Count, setCount] = useState(getItemsNo())
    let [items, setItems] = useState(JSON.parse(localStorage.getItem("orderitems")))
    let [Cost, setCost] = useState(getCost())
    useEffect(() => {
        props.func1(Count)
        props.func2(items)
        props.funcost(Cost)
        
      }, [Count, items, Cost]);
   

    
// function handleLocalStorage(item)
// {
//     localStorage.setItem("test", JSON.stringify([]))
//     let test = JSON.parse(localStorage.getItem("test"))
//     test.push(OrderItem)
//     console.log(OrderItem)
//     localStorage.setItem("test", JSON.stringify(test))
    

// }
// function saveShoppingcart(){
//     handleLocalStorage(OrderItem)
// }
const handleOnChange = (e)=>
{
    setOrderItem({
        "product_id": params.id,
        "price":params.price,
        "quantity":e.target.value}
        )

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
const handleSubmit=(e)=>{
    e.preventDefault()
    if(localStorage.getItem("orderitems") == null)
    {
        localStorage.setItem("orderitems", JSON.stringify([]))
    }
    let orderitems = JSON.parse(localStorage.getItem("orderitems"))
    if(OrderItem.quantity>0)
    {
        orderitems.push(OrderItem)
        setItems(orderitems)
        localStorage.setItem("orderitems", JSON.stringify(orderitems))
        setCount(
        getItemsNo()
        )
    }
    setCost(getCost())

}
    return(
        <div className="productviewwrapper">
            <div className='product'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src={params.image.replaceAll("+","/")}/>
                    <Card.Text>
                    {params.price}
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '15rem'}}>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Enter quantity" value={OrderItem.quantity} max={params.quantity} min={0} onChange={(e)=>handleOnChange(e)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
                            Add to Cart
                        </Button>
                    </Form>
                </div>
        </div>
    )
}

export default ProductView