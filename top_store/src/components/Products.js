import React, {useState, useEffect} from 'react'
import Product from './Product';
import ProductsPagination from './Pagination';

function Products(props)
    {
        let [items, setItems] = useState([])
        let [search, setSearch] = useState()
        useEffect(()=> {
            getItems()
            setSearch(props.search)
        },[])

        let getItems = async () => {
            let response
            if(props.search == null)
            {
                response = await fetch("http://127.0.0.1:8000/")
            }
            else
            {
                response = await fetch("http://127.0.0.1:8000/search",
                {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({search: "shoes"})
                })
            }
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