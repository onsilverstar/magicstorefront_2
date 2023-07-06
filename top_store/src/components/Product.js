import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'

function Product(props)
{
    let image_url = props.data.image
    image_url=image_url.replaceAll("/","+")
    //image_url = image_url.split("/").replace("/", "+").join()
        return(
                <div className='product'>
                    <Card style={{ width: '15rem', height: '15rem'}}>
                    <Card.Body>
                    <Link to={`product/${props.data.guid}/${props.data.quantity}/${image_url}/${props.data.price}`}>
                    <Card.Img variant="top" src={props.data["image"]}/>
                    </Link>
                    <Card.Text>
                    {props.data["price"]}
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                    
                )
    }
export default Product