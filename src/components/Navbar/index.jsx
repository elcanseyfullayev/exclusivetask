import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {

    function handleMenu() {
        document.querySelector('.resmenu').classList.toggle('menutoggle')  
    }

    return (
        <>
            <nav>
                <Link to={"/"}><h1>Exclusive</h1></Link>
                <div className="menu">
                    <Link to={"/"}><p>Home</p></Link>
                    <Link to={"/contact"}><p>Contact</p></Link>
                    <Link to={"/about"}><p>About</p></Link>
                    <p>Sign Up</p>
                </div>
                <div className="cart">
                    <i onClick={handleMenu} className="fa-solid fa-bars"></i>
                    <div className="resmenu">
                        <Link to={"/"}><p>Home</p></Link>
                        <Link to={"/contact"}><p>Contact</p></Link>
                        <Link to={"/about"}><p>About</p></Link>
                    </div>
                    <input type="text" placeholder='What are you looking for?' />
                    <i className="fa-regular fa-heart"></i>
                    <Link to={"/cart"}><i className="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar