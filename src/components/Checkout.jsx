import React from 'react'
import Navbar from './Navbar'
import '../components/css/checkout.css'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';



function Checkout() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='body'>
      <Navbar />
      <div className='checkout'>
        <div className='container'>
          {
            basket?.length == 0 ? (

              <h1>Your Cart is Empty</h1>
            ) :
              (
                <div className='product'>
                  <p className='heading'>Your Cart</p>
                  {
                    basket?.map(item => (
                      <CheckoutProduct
                        key={item.id}
                        item={item}
                      />
                    ))
                  }
                  <Subtotal/>
                </div>

              )
          }
        </div>
      </div>
    </div>
  )
}

export default Checkout