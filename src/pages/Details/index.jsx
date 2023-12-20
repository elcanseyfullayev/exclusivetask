import React, { useContext, useEffect, useState } from 'react'
import './details.scss'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'

function Details() {
    let { id } = useParams()
    const [product, setProduct] = useState({})
    const { addBasket } = useContext(BasketContext)

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [])



    return (
        <>
            <Navbar></Navbar>
            <section id='details'>
                {<div className='details'>
                    <img src={product.images} alt="" />
                    <div className="productDetails">
                        <h1>{product.title}</h1>
                        <h1>{product.price}$</h1>
                        <p>{product.description}</p>
                        <div onClick={() => addBasket(product)} className="addCart" >Add To Cart</div>
                    </div>
                    
                </div>}
                
                
            </section>
            <Footer></Footer>
        </>
    )
}

export default Details