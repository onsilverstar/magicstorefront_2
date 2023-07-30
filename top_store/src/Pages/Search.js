import {React, useState, useEffect} from 'react'
import ProductsSearch from './ProductsSearch'
import StoreCarousel from '../components/Carousel'
import { useParams } from 'react-router-dom'


const Search = (props)=>
{
    let params = useParams()
    const [search, setSearch] = useState(params.search)
    useEffect(() => {
        setSearch(params.search)
      });
    return(
        <div className='productswrapper'>
            <StoreCarousel/>
            <ProductsSearch search = {search}/>
        </div>
    )
}
export default Search