import React from 'react'
import './footer.scss'

function Footer() {
    return (
        <>
            <footer>
                <div className="ad">
                    <h1>Exclusive</h1>
                    <h2>Subscribe</h2>
                    <p>Get 10% off your first order</p>
                    <input type="text" placeholder='Enter your email' />
                </div>
                <div className="footerBox">
                    <h1>Support</h1>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className="footerBox">
                    <h1>Account</h1>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className="footerBox">
                    <h1>Quick Link</h1>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="download">
                    <h1>Download App</h1>
                    <div className="downBox">
                        <p>Save $3 with App New User Only</p>
                        <div className="images">
                            <img src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="" />
                            <div className="imagesRight">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png" alt="" />
                            </div>
                            
                        </div>
                        <div className="social">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer