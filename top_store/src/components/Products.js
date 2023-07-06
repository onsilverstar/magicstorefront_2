import React, {useState, useEffect} from 'react'
import Product from './Product';
import ProductsPagination from './Pagination';

function Products()
    {
        let [items, setItems] = useState([])
        useEffect(()=> {
            getItems()
        },[])

        let getItems = async () => {
            let response = await fetch("http://44.212.67.79/")
            let data = await response.json()
            console.log('DATA:', data)
            setItems(data)}

       
               return (
                <div className='products'>
                    {items.map(res=> <Product key={res["guid"]} data={res}/>)}
                    <ProductsPagination/>
                </div>
               )
               }
export default Products