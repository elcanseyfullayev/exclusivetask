import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './contact.scss'

function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <section id='contact'>
        <div className="contLeft">
          <div className="inside">
            <div className="icon">
              <i class="fa-solid fa-phone"></i>
              <h3>Call To Us</h3>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className="inside border">
            <div className="icon">
              <i class="fa-solid fa-envelope"></i>
              <h3>Write To Us</h3>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="contRight">
          <div className="name">
            <input type="text" placeholder='Your Name *'/>
            <input type="text" placeholder='Your Email *'/>
            <input type="text" placeholder='Your Phone *'/>
          </div>
          <input className='message' type="text" placeholder='Your Massage'/>
          <div className="btn">
            Send Massage
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default Contact