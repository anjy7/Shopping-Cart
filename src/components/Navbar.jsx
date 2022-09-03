import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/navbar.css'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useStateValue } from '../StateProvider'



function Navbar() {

    const [{ basket }, dispatch] = useStateValue();
    return (
        <nav>
            <ul className='list'>
                <li >
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">SHOP</NavLink>
                </li>
            </ul>
            <img
                className='logo'
                alt="logo"
                src="https://www.carlogos.org/car-logos/ferrari-prancing-horse-logo-800x1100.png"
            ></img>
            <div className='cart'>
            <NavLink to="/checkout">
            <button className='cart-logo'>
                <HiOutlineShoppingCart className='cart-img' />
            </button>
            </NavLink>
            <span>{basket?.length}</span>
            </div>
        </nav>
    )
}

export default Navbar