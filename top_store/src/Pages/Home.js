import {React} from 'react'
import Products from '../components/Products'
import StoreCarousel from '../components/Carousel'

const Home = (props)=>
{
    return(
        <div className='productswrapper'>
            <StoreCarousel/>
            <Products/>
        </div>
    )
}
export default Home