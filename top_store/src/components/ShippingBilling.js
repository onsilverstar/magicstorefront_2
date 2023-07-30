import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import StripePay from "./StripePay";

function ShippingBilling(props) {
    console.log("we are doing billing")
    console.log(props.cartItems)
    console.log(props)
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Address, setAddress] = useState("")
    const [State, setState] = useState("")
    const [ZipCode, setZipCode] = useState("")
    const [UnitNo, setUnitNo] = useState("")
    const [Country, setCountry] = useState("")
    const [OrderId, setOrderId] = useState(0)

    
    useEffect( ()=>
    {
        createOrder()
    },
    []
    )
        
    
    const handleChangeFirstName = (e)=> {
        e.preventDefault()
        setFirstName(e.target.value);
      }
    
      const handleChangeLastName = (e)=> {
        e.preventDefault()
        setLastName(e.target.value);
      }
      const handleChangePhoneNumber = (e)=> {
        e.preventDefault()
        setPhoneNumber(e.target.value);
      }
    
      const handleChangeAddress = (e)=> {
        e.preventDefault()
        setAddress(e.target.value);
    }
    
    const handleChangeState = (e)=> {
        e.preventDefault()
        setState(e.target.value);
    }

    const handleChangeZipCode = (e)=> {
        e.preventDefault()
        setZipCode(e.target.value);
    }

    const handleChangeUnitNo = (e)=> {
        e.preventDefault()
        setUnitNo(e.target.value);
    }

    const handleChangeCountry = (e)=> {
        e.preventDefault()
        setCountry(e.target.value);
    }
    const createOrder = () =>{
        const data = {"items": props.cartItems, "cost": props.cost, access: localStorage.getItem("auth_token")}
        fetch("https://api.mtandauza.com/createorder",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
        }).then(data=> {return data.json()}).then(data=>{
            setOrderId(data["order_id"])
            console.log(data["order_id"])})
        //console.log(data)
      }
  return (
            <div className="shippingbillng" style={{margin: 5+"rem auto", width: 50+"%"}}>
                <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" onChange={handleChangeFirstName}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" onChange={handleChangeLastName}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="tel" onChange={handleChangePhoneNumber}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Physical Address</Form.Label>
                    <Form.Control type="text" onChange={handleChangeAddress}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" onChange={handleChangeState}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" onChange={handleChangeZipCode}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Unit Number/Apt</Form.Label>
                    <Form.Control type="text" onChange={handleChangeUnitNo}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" onChange={handleChangeCountry}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Link to={`/stripepayment/${OrderId}`}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Link>
                </Form>
            <br></br>
            </div>
            
  );
}


export default ShippingBilling

