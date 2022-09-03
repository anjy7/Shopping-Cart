import React from 'react'
import { useStateValue } from '../StateProvider'
import '../components/css/checkout.css'

function CheckoutProduct({ item }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_TO_BASKET",
            id: item.id,
        })
    }

    return (
        <div className='box'>
            <div className='left'>

                <img className='img-cart' src={item.image} />
                <p>{item.title}</p>
            </div>
            <div className='right'>
                <p className='price'>Price: ${item.price}</p>
                <button onClick={removeFromBasket} className='cart-btn'>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct