import React from 'react'
import './about.scss'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function About() {
    return (
        <>
            <Navbar></Navbar>
            <section id='story'>
                <div className="about">
                    <h1>Our Story</h1>
                    <div className="text">
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                </div>
                <img src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1704067200&Signature=n-oha2AnFe24Xlahn9mfXnUsQ7NJ~Rxhd6LyYnB~5E~WaplxN6KvsDmjT-NNu~aWyLW--KyycE5B9h0jvfIOCVrxLIu5gkIPQYx2kH08COI4wIp2q1veGYfsX0T3gZ8K0aq0hpQVnB7qMqXuP3JuA3EArl~q4K~3GljTCOoWp7~DLLFCxAh9YNmpn9CA~hWzhVgnllp3sjihsZV0eQ-2~lKcPZ9hgvjUEwvmTdaZtnQbnCtC3~-mKoDBJgoGPD0QjJkAI7yxCQQTwmDlzwiY0KKqw46E4mvR0m9pI4dOOdMMOkZ49hy6ovl1mbCmAeivhDtxvG~xCS3gNNFVfL2AbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </section>
            <section id='gain'>
                <div className="gainBox">
                    <i className="fa-solid fa-shop"></i>
                    <h1>10.5k</h1>
                    <p>Sallers active our site</p>
                </div>
                <div className="gainBox">
                    <i className="fa-solid fa-dollar-sign"></i>
                    <h1>33k</h1>
                    <p>Monthly product sale</p>
                </div>
                <div className="gainBox">
                    <i className="fa-solid fa-users"></i>
                    <h1>45.5k</h1>
                    <p>Customer active in our site</p>
                </div>
                <div className="gainBox">
                    <i className="fa-solid fa-sack-dollar"></i>
                    <h1>25k</h1>
                    <p>Anual gross sale in our site</p>
                </div>
            </section>
            <section id='workers'>
                <div className="workerBox">
                    <img src="https://pagesix.com/wp-content/uploads/sites/3/2023/02/tom-cruise-69.jpg?quality=75&strip=all&w=471" alt="" />
                    <h1>Tom Cruise</h1>
                    <p>Founder & Chairman</p>
                    <div className="social">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="workerBox">
                    <img src="https://m.media-amazon.com/images/M/MV5BOWU1ODBiNGUtMzVjNi00MzdhLTk0OTktOWRiOTIxMWNhOGI2XkEyXkFqcGdeQXVyMTU2OTM5NDQw._V1_.jpg" alt="" />
                    <h1>Dwayne Johnson</h1>
                    <p>Managing Director</p>
                    <div className="social">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="workerBox">
                    <img src="https://cdn.britannica.com/66/103066-050-B89D5EAF/Will-Smith-actor-musician-2006.jpg" alt="" />
                    <h1>Will Smith</h1>
                    <p>Product Designer</p>
                    <div className="social">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
            </section>
            <section id='about'>
                <div className="aboutBox">
                    <i className="fa-solid fa-truck-fast"></i>
                    <h1>FAST AND FREE DELIVERY</h1>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className="aboutBox">
                    <i className="fa-solid fa-headset"></i>
                    <h1>24/7 CUSTOMER SERVICE</h1>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div className="aboutBox">
                    <i className="fa-regular fa-circle-check"></i>
                    <h1>MONEY BACK GUARANTEE</h1>
                    <p>We reurn money within 30 days</p>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default About