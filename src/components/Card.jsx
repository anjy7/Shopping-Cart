import React, { useContext } from 'react'
import '../components/css/card.css'
import { useStateValue } from '../StateProvider'



function Card({item}) {
  const [{basket},dispatch] = useStateValue();

  const addToBasket = () =>{
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id:item.id,
        title:item.name,
        image:item.image,
        price:item.price,
      },
    })
  }
  return (
    <div className='card'>
    <img src={item.image}/>
    <h1>{item.name}</h1>
    <p className='description'>{item.description}</p>
    <button onClick={addToBasket} className='btn'>Add to Cart</button>
    </div>
  )
}

export default Card