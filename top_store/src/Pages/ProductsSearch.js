import React, {useState, useEffect} from 'react'
import Product from '../components/Product';
import ProductsPagination from '../components/Pagination';

function ProductsSearch(props)
    {
        let [items, setItems] = useState([])
        let [search, setSearch] = useState()
        useEffect(()=> {
            getItems()
            setSearch(props.search)
        })

        let getItems = async () => {
            let response
            if(props.search == null)
            {
                response = await fetch("https://api.mtandauza.com/")
            }
            else
            {
                response = await fetch("https://api.mtandauza.com/search",
                {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({search: search})
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
export default ProductsSearch