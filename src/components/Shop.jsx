import React from 'react'
import cars  from "../carsData.js"
import Card from "../components/Card.jsx"
import Navbar from './Navbar.jsx'
import './css/shop.css'

function Shop() {
    const cards = cars.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <>
        <Navbar/>
        <section className="card-section">
            {cards}
           
        </section>
        </>
    )
}

export default Shop